import React from "react";

const SalesCards = ({
  iconName,
  amount,
  blackTxt,
  blueTxt,
  bgColor,
  iconBg,
}) => {
  return (
    <div className="p-5 rounded-lg" style={{ backgroundColor: bgColor }}>
      <div
        className="flex w-[40px] h-[40px] rounded-full justify-center items-center"
        style={{ backgroundColor: iconBg }}
      >
        {iconName}
      </div>
      <p className="today-sale-num mt-4">{amount}</p>
      <p className="today-sale-blk-txt mt-4">{blackTxt}</p>
      <p className="today-sale-blue-txt mt-4">{blueTxt}</p>
    </div>
  );
};

export default SalesCards;
