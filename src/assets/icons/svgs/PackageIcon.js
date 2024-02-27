import * as React from "react";
const PackageIcon = ({ size, color }) => (
  <svg
    id="Uploaded to svgrepo.com"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size ?? "800px"}
    height={size ?? "800px"}
    viewBox="0 0 32 32"
    xmlSpace="preserve"
  >
    <style type="text/css">{`\n\t.linesandangles_een{fill:${
      color ?? "#111918"
    };}\n`}</style>
    <path
      className="linesandangles_een"
      d="M23,8H9l-4,6v14h22V14L23,8z M23.93,13H17v-3h4.93L23.93,13z M10.07,10H15v3H8.07L10.07,10z  M7,26V15h18v11H7z M9,17h8v2H9V17z M9,20h8v2H9V20z"
    />
  </svg>
);
export default PackageIcon;
