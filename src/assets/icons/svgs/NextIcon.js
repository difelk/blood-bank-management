import * as React from "react";
const NextIcon = ({ size, color }) => (
  <svg
    width={size ?? "800px"}
    height={size ?? "800px"}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 48 48"
  >
    <polygon
      fill={color ?? "#2196F3"}
      points="17.1,5 14,8.1 29.9,24 14,39.9 17.1,43 36,24"
    />
  </svg>
);
export default NextIcon;
