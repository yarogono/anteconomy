import axios from "axios";

export default async function handler(req, res) {
  try {
    // CoinGecko API를 사용하여 금 시세 데이터 가져오기
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/tether-gold/market_chart",
      {
        params: {
          vs_currency: "usd",
          days: "1",
          interval: "hourly",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Gold price fetch error:", error);
    res.status(500).json({ error: "Failed to fetch gold price data" });
  }
}
