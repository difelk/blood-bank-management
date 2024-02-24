import * as React from "react";
const StockIcon = ({ size, color }) => (
  <svg
    width={size ?? "800px"}
    height={size ?? "800px"}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    // {...props}
  >
    <path
      fill={color ?? "#758CA3"}
      d="M12 6v-6h-8v6h-4v7h16v-7h-4zM7 12h-6v-5h2v1h2v-1h2v5zM5 6v-5h2v1h2v-1h2v5h-6zM15 12h-6v-5h2v1h2v-1h2v5z"
    />
    <path fill={color ?? "#758CA3"} d="M0 16h3v-1h10v1h3v-2h-16v2z" />
  </svg>
);
export default StockIcon;
