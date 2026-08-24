let priceCache = { data: null, expiresAt: 0 };

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }
  if (priceCache.data && priceCache.expiresAt > Date.now()) {
    return res.status(200).json(priceCache.data);
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const response = await fetch(
      "https://query1.finance.yahoo.com/v8/finance/chart/GC=F?range=1d&interval=1m&includePrePost=false",
      {
        signal: controller.signal,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.chart || !data.chart.result || !data.chart.result[0]) {
      throw new Error("Invalid response structure");
    }

    const result = data.chart.result[0];
    const quote = result.indicators.quote[0];
    const timestamp = result.timestamp[result.timestamp.length - 1] * 1000; // Convert to milliseconds

    // Safely get the latest valid price
    const validCloses = quote.close.filter((price) => price !== null);
    const currentPrice = validCloses[validCloses.length - 1];

    // Safely get previous close
    const previousClose = result.meta.previousClose || validCloses[0];
    const priceChange = currentPrice - previousClose;
    const changePercent = (priceChange / previousClose) * 100;

    // Safely get high and low prices
    const validHighs = quote.high.filter((price) => price !== null);
    const validLows = quote.low.filter((price) => price !== null);
    const highPrice = Math.max(...validHighs);
    const lowPrice = Math.min(...validLows);

    // Safely get volume
    const validVolumes = quote.volume.filter((vol) => vol !== null);
    const latestVolume = validVolumes[validVolumes.length - 1] || 0;

    const goldData = {
      price: currentPrice.toFixed(2),
      change: priceChange.toFixed(2),
      changePercent: changePercent.toFixed(2),
      high: highPrice.toFixed(2),
      low: lowPrice.toFixed(2),
      timestamp: new Date(timestamp).toISOString(),
      volume: latestVolume,
    };

    priceCache = { data: goldData, expiresAt: Date.now() + 60 * 1000 };
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    res.status(200).json(goldData);
  } catch (error) {
    console.error("Error fetching gold price:", error);
    res.status(502).json({ error: "Gold price provider unavailable" });
  } finally {
    clearTimeout(timeout);
  }
}
