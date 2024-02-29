import React from "react";

const AddIcon2 = ({ size = "800px", color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 22.149 22.149"
    >
      <g
        data-name="Icon feather-plus-circle"
        fill="none"
        stroke={color ?? "#8d8d8d"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          data-name="Path 3095"
          d="M21.149 11.075A10.075 10.075 0 1 1 11.075 1a10.075 10.075 0 0 1 10.074 10.075Z"
        />
        <path data-name="Path 3096" d="M11.075 7.045v8.06" />
        <path data-name="Path 3097" d="M7.045 11.075h8.06" />
      </g>
    </svg>
  );
};

export default AddIcon2;
