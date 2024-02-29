import React from "react";

const ArrowDownIcon = ({ size = "800px", color, flip }) => {
  return (
    <svg
      viewBox="0 0 8.526 4.876"
      width={size}
      height={size}
      transform={flip ? "scale(1 -1) translate(0 0)" : ""}
    >
      <path
        data-name="Icon ionic-ios-arrow-down"
        d="M4.262 3.407 1.037.179a.607.607 0 0 0-.861 0 .615.615 0 0 0 0 .863L3.83 4.698a.608.608 0 0 0 .84.018l3.679-3.671a.61.61 0 1 0-.861-.863Z"
        fill={color ?? "#4d4d4d"}
      />
    </svg>
  );
};

export default ArrowDownIcon;
