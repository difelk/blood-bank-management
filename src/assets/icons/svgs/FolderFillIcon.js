import * as React from "react";
const FolderFillIcon = ({ size, color }) => (
  <svg
    fill={color ?? "#000000"}
    width={size ?? "800px"}
    height={size ?? "800px"}
    viewBox="0 0 24 24"
    id="folder"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
  >
    <path
      id="primary"
      d="M20,6H13.41L11,3.59A2,2,0,0,0,9.59,3H4A2,2,0,0,0,2,5V19a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V8A2,2,0,0,0,20,6Z"
      style={{
        fill: color ?? "#000000",
      }}
    />
  </svg>
);
export default FolderFillIcon;
