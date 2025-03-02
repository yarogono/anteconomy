import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";

export default function GoldPriceChart({ data }) {
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    if (data?.prices) {
      const formattedData = data.prices.map(([timestamp, price]) => ({
        date: moment(timestamp).format("MM/DD HH:mm"),
        price: price.toFixed(2),
      }));
      setPriceData(formattedData);
    }
  }, [data]);

  return (
    <div className="w-full h-[400px] bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">금 시세 차트</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={priceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            interval="preserveStartEnd"
          />
          <YAxis
            domain={["auto", "auto"]}
            tick={{ fontSize: 12 }}
            width={80}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "white", borderRadius: "8px" }}
            formatter={(value) => [`$${value}`, "금 시세"]}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#FFD700"
            strokeWidth={2}
            dot={false}
            name="금 시세 (USD/oz)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
