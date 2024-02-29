import * as React from "react";
const ExchangeIcon = ({ size = "800px", color }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill={color ?? "#000000"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 16H29V4L44 19L29 34V24H18V13L4 28L18 44V32H23"
      stroke="#000000"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ExchangeIcon;
