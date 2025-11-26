import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function PurchaseChart({ data }) {
  return (
    <div>
      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray={"3 3"} />
          <XAxis dataKey={"title"} />
          <YAxis />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Line
            dataKey={"total"}
            stroke="#060771"
            strokeWidth={3}
            type={"monotone"}
            name="Total purchase"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
