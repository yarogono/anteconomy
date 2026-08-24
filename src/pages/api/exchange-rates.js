let cache = { data: null, expiresAt: 0 };

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (cache.data && cache.expiresAt > Date.now()) {
    return res.status(200).json(cache.data);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD", {
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Exchange API returned ${response.status}`);
    const source = await response.json();
    const usdToKrw = Number(source.rates?.KRW);
    const usdToEur = Number(source.rates?.EUR);
    const usdToJpy = Number(source.rates?.JPY);
    const usdToCny = Number(source.rates?.CNY);
    if ([usdToKrw, usdToEur, usdToJpy, usdToCny].some((rate) => !Number.isFinite(rate) || rate <= 0)) {
      throw new Error("Required exchange rates are missing");
    }

    const data = {
      rates: {
        USD: usdToKrw,
        EUR: usdToKrw / usdToEur,
        JPY: usdToKrw / usdToJpy,
        CNY: usdToKrw / usdToCny,
      },
      updatedAt: new Date().toISOString(),
      source: "open.er-api.com",
    };
    cache = { data, expiresAt: Date.now() + 5 * 60 * 1000 };
    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(502).json({ error: "Exchange rate provider unavailable" });
  } finally {
    clearTimeout(timeout);
  }
}
