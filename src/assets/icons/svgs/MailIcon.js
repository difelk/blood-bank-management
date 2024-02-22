import React from "react";

const MailIcon = ({ size, color }) => {
  return (
    <svg
      width={size ?? 20}
      height={size ?? 20}
      viewBox="0 0 113 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M73.9966 76.3864H40.0024"
        stroke={color ?? "#1B4079"}
        strokeWidth="7.0625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M73.9966 56.6745H40.0024"
        stroke={color ?? "#1B4079"}
        strokeWidth="7.0625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52.9739 37.009H40.0024"
        stroke="#1B4079"
        strokeWidth="7.0625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M74.9024 12.9478C74.9024 12.9478 38.7565 12.9666 38.7 12.9666C25.705 13.0466 17.6584 21.597 17.6584 34.639V77.9369C17.6584 91.0449 25.7662 99.6282 38.8742 99.6282C38.8742 99.6282 75.0154 99.614 75.0766 99.614C88.0716 99.534 96.1228 90.979 96.1228 77.9369V34.639C96.1228 21.531 88.0104 12.9478 74.9024 12.9478Z"
        stroke="#1B4079"
        strokeWidth="7.0625"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MailIcon;
