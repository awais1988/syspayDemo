import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RevenueChart = ({ data }) => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={1200}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={0}
            tick={{ fontSize: 12, fill: "#7B91B0", textAnchor: "middle" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#7B91B0" }}
            tickFormatter={(value) => `${value}k`}
          />
          <Tooltip />
          <Legend
            formatter={(value) => (
              <span className="custom-legend-revenue">{value}</span>
            )}
          />
          <Bar
            dataKey="onlineSale"
            name="Online Sales"
            fill="#0095FF"
            barSize={10}
          />
          <Bar
            dataKey="offlineSale"
            name="Offline Sales"
            fill="#00E096"
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
