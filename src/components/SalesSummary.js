import React from "react";
import SaleSvg from "../utils/images/svg/SaleSvg";
import SalesCards from "./commonComponents/SalesCards";
import OrderSvg from "../utils/images/svg/OrderSvg";
import DiscSvg from "../utils/images/svg/DiscSvg";
import CustomerSvg from "../utils/images/svg/CustomerSvg";
import { useSelector } from "react-redux";

const SalesSummary = () => {
  const { salesData } = useSelector((state) => state.dashboard);
  const saleRec = salesData?.record;
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-12 mt-4">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800">Today's Sales</h2>
          <span className="sale-sumary-txt">Sales Summery</span>
        </div>

        <button className="px-4 py-2 text-sm font-medium text-[#1559ED] bg-[#F0F5FF] rounded-lg hover:bg-[#E0EAFF] focus:outline-none focus:ring-2 focus:ring-[#1559ED]">
          Export
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <SalesCards
          iconName={<SaleSvg />}
          amount={saleRec?.sales?.number}
          blackTxt={saleRec?.sales?.name}
          blueTxt={saleRec?.sales?.des}
          bgColor={"#FFE2E5"}
          iconBg={"#FA5A7D"}
        />
        <SalesCards
          iconName={<OrderSvg />}
          amount={saleRec?.order?.number}
          blackTxt={saleRec?.order?.name}
          blueTxt={saleRec?.order?.des}
          bgColor={"#FFF4DE"}
          iconBg={"#FF947A"}
        />
        <SalesCards
          iconName={<DiscSvg />}
          amount={saleRec?.sold?.number}
          blackTxt={saleRec?.sold?.name}
          blueTxt={saleRec?.sold?.des}
          bgColor={"#DCFCE7"}
          iconBg={"#3CD856"}
        />
        <SalesCards
          iconName={<CustomerSvg />}
          amount={saleRec?.customers?.number}
          blackTxt={saleRec?.customers?.name}
          blueTxt={saleRec?.customers?.des}
          bgColor={"#F3E8FF"}
          iconBg={"#BF83FF"}
        />
      </div>
    </div>
  );
};

export default SalesSummary;
