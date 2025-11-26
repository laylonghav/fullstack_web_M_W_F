import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function SaleThisMonthChart({ data }) {
  const avg = data?.total_order ? data?.total / data?.total_order : 0;
  const chartData = [
    { name: "Total sale this month", value: data?.total },
    { name: "Total order this month", value: data?.total_order },
    { name: "Average this month", value: avg },
  ];

  const COLORS = ["#4f46e5", "#06b6d4", "#f59e0b"];
  return (
    <div>
      <ResponsiveContainer width={300} height={300}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {chartData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
