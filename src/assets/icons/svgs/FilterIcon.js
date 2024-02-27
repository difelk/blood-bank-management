import * as React from "react";
const FilterIcon = ({ size, color }) => (
  <svg
    width={size ?? "800px"}
    height={size ?? "800px"}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 2.5H15M3 7.5H12M5 12.5H10" stroke={color ?? "#000000"} />
  </svg>
);
export default FilterIcon;
