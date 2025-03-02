import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import TicketStartSvg from "../utils/images/svg/TicketStarSvg";
import BagSvg from "../utils/images/svg/BagSvg";

const TargetChart = ({ data }) => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="75%">
        <BarChart
          width={800}
          height={200}
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
          <YAxis hide />
          <Tooltip />
          <Bar
            dataKey="onlineSale"
            name="Reality Sales"
            fill="#4AB58E"
            barSize={15}
          />
          <Bar
            dataKey="offlineSale"
            name="Target Sales"
            fill="#FFCF00"
            barSize={15}
          />
        </BarChart>
      </ResponsiveContainer>
      <div>
        <div className="flex justify-between w-[70%] mt-2">
          <div className="flex">
            <BagSvg />
            <div className="flex ml-3 justify-center flex-col">
              <p className="target-chart-bold-txt">Reality Sale</p>
              <p className="target-chart-sm-txt">Global</p>
            </div>
          </div>
          <p className="target-chart-val-txt text-[#27AE60]">8.823</p>
        </div>
        <div className="flex justify-between w-[70%] mt-2">
          <div className="flex">
            <TicketStartSvg />
            <div className="flex ml-3 justify-center flex-col">
              <p className="target-chart-bold-txt">Target Sales</p>
              <p className="target-chart-sm-txt">Global</p>
            </div>
          </div>
          <p className="target-chart-val-txt text-[#FFA412]">12.122</p>
        </div>
      </div>
    </div>
  );
};

export default TargetChart;
