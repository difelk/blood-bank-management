import * as React from "react";
const NotesIcon = ({ size, color }) => (
  <svg
    width={size ?? "800px"}
    height={size ?? "800px"}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill={color ?? "#000000"}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 2h13l.5.5v10l-.5.5h-13l-.5-.5v-10l.5-.5zM2 3v9h12V3H2zm2 2h8v1H4V5zm6 2H4v1h6V7zM4 9h4v1H4V9z"
    />
  </svg>
);
export default NotesIcon;
