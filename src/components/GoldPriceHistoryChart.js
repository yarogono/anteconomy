import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function GoldPriceHistoryChart({ data, single = false }) {
  if (single) {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#FFD700" strokeWidth={2} dot={false} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis yAxisId="left" domain={["auto", "auto"]} tickFormatter={(value) => `₩${(value / 1000).toFixed(0)}K`} />
        <YAxis yAxisId="right" orientation="right" domain={["auto", "auto"]} tickFormatter={(value) => `$${value.toFixed(2)}`} />
        <Tooltip />
        <Line yAxisId="left" type="monotone" dataKey="priceKRW" stroke="#10b981" strokeWidth={2} dot={false} isAnimationActive={false} />
        <Line yAxisId="right" type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} dot={false} isAnimationActive={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
