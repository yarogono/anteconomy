import axios from "axios";

const ALPHA_VANTAGE_API_KEY = "demo"; // 실제 운영시에는 환경변수로 관리해야 합니다

// Forex symbols for metals
const METAL_SYMBOLS = {
  gold: "OANDA:XAU_USD",
  silver: "OANDA:XAG_USD",
  platinum: "OANDA:XPT_USD",
  palladium: "OANDA:XPD_USD",
};

// Cache duration in milliseconds (1 minute)
const CACHE_DURATION = 60 * 1000;

// In-memory cache
let priceCache = {
  data: null,
  timestamp: 0,
};

// Fallback data in case of API failure
const fallbackData = {
  gold: {
    bid: 2050.5,
    ask: 2051.5,
    change: 5.2,
    changePercent: 0.25,
  },
  silver: {
    bid: 23.15,
    ask: 23.25,
    change: 0.15,
    changePercent: 0.65,
  },
  platinum: {
    bid: 890.5,
    ask: 891.5,
    change: -2.3,
    changePercent: -0.26,
  },
  palladium: {
    bid: 950.75,
    ask: 951.75,
    change: 3.25,
    changePercent: 0.34,
  },
  timestamp: new Date().toISOString(),
};

// async function fetchMetalPrice(symbol) {
//   try {
//     const response = await axios.get(`https://finnhub.io/api/v1/quote`, {
//       params: {
//         symbol: symbol,
//         token: FINNHUB_API_KEY,
//       },
//     });

//     if (!response.data || typeof response.data.c === "undefined") {
//       console.error(`No data received for ${symbol}`, response.data);
//       return null;
//     }

//     const current = response.data.c; // Current price
//     const previousClose = response.data.pc; // Previous close
//     const change = current - previousClose;

//     return {
//       bid: current,
//       ask: current * 1.001, // Adding 0.1% spread
//       change: parseFloat(change.toFixed(2)),
//       changePercent: parseFloat(((change / previousClose) * 100).toFixed(2)),
//     };
//   } catch (error) {
//     console.error(
//       `Error fetching ${symbol}:`,
//       error.response?.data || error.message
//     );
//     return null;
//   }
// }

// async function fetchAllMetalPrices() {
//   try {
//     const promises = Object.entries(METAL_SYMBOLS).map(
//       async ([metal, symbol]) => {
//         const price = await fetchMetalPrice(symbol);
//         return [metal, price];
//       }
//     );

//     const results = await Promise.all(promises);
//     const prices = Object.fromEntries(results);

//     // If any price fetch failed, use fallback data for that metal
//     Object.keys(METAL_SYMBOLS).forEach((metal) => {
//       if (!prices[metal]) {
//         prices[metal] = fallbackData[metal];
//       }
//     });

//     return {
//       ...prices,
//       timestamp: new Date().toISOString(),
//     };
//   } catch (error) {
//     console.error("Error fetching all prices:", error);
//     return fallbackData;
//   }
// }

export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://query1.finance.yahoo.com/v8/finance/chart/GC=F?range=1d&interval=1m&includePrePost=false",
      {
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

    res.setHeader("Cache-Control", "s-maxage=60");
    res.status(200).json(goldData);
  } catch (error) {
    console.error("Error fetching gold price:", error);

    // Return sample data in case of error
    const sampleData = {
      price: "2023.50",
      change: "-12.30",
      changePercent: "-0.60",
      high: "2035.80",
      low: "2020.40",
      timestamp: new Date().toISOString(),
      volume: 145230,
    };

    res.status(200).json(sampleData);
  }
}
