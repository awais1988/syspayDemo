import * as React from "react";
const DownSvg = ({clsProperties, ...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={clsProperties}
    fill="none"
    viewBox="0 0 24 24"
    stroke="#151D48"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="{2} "
      d="M19 9l-7 7-7-7"
    />
  </svg>
);
export default DownSvg;
