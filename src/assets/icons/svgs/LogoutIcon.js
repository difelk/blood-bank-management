import * as React from "react";
const LogoutIcon = ({size, color}) => (
  <svg
    width={size ?? "800px"}
    height={size ?? "800px"}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    // {...props}
  >
    <path
      stroke={color ?? "#000000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 12h-9.5m7.5 3l3-3-3-3m-5-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2v-1"
    />
  </svg>
);
export default LogoutIcon;
