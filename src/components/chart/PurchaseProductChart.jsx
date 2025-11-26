import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function PurchaseProductChart({ data }) {
  const chartData = data?.flatMap((purchase) =>
    purchase?.product_purchase.map((item) => ({
      name: item?.product?.name,
      total: Number(item?.qty) * Number(item?.cost),
    }))
  );
  return (
    <div>
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray={"3 3"} />
          <XAxis dataKey={"name"} />
          <YAxis />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Bar dataKey={"total"} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
