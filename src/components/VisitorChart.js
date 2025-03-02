import React from "react";
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

const VisitorChart = ({ data }) => {
  return (
    <div className="w-full h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            formatter={(value) => (
              <span className="custom-legend-visitor">{value}</span>
            )}
          />
          <Line
            type="monotone"
            dataKey="loyalCustomers"
            stroke="#A700FF"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={false}
            name="Loyal Customers"
          />
          <Line
            type="monotone"
            dataKey="newCustomers"
            stroke="#EF4444"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={false}
            name="New Customers"
          />
          <Line
            type="monotone"
            dataKey="uniqueCustomers"
            stroke="#3CD856"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={false}
            name="Unique Customers"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitorChart;
