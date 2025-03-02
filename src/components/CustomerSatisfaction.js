import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomerSatisfaction = ({ data }) => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#07E098"
            strokeWidth={2}
            fill="#07E098"
            dot={true}
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#0095FF"
            strokeWidth={2}
            fill="#0095FF"
            dot={true}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-center content-center mt-4">
        <div className="text-center">
          <p className="customer-chart-lbl-txt">Last Month</p>
          <p className="customer-chart-val-txt">$3,004</p>
        </div>
        <div className="h-6 w-px bg-gray-300 mx-4"></div>
        <div className="text-center">
          <p className="customer-chart-lbl-txt">This Month</p>
          <p className="customer-chart-val-txt">$4,504</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfaction;
