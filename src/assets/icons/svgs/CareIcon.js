import * as React from "react";
const CareIcon = ({ size, color }) => (
  <svg
    fill={color ?? "#000000"}
    width={size ?? "800px"}
    height={size ?? "800px"}
    viewBox="0 0 32 32"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    xmlSpace="preserve"
    // xmlns="http://www.w3.org/2000/svg"
    // xmlns:serif="http://www.serif.com/"
    // xmlnsXlink="http://www.w3.org/1999/xlink"
    // {...props}
  >
    <path d="M4.234,6.266c-1.409,1.45 -2.202,3.415 -2.202,5.464c-0,2.05 0.793,4.015 2.202,5.464l9.625,9.899c0.568,0.584 1.339,0.91 2.143,0.91c0.803,0 1.575,-0.326 2.143,-0.91c1.743,-1.793 9.617,-9.907 9.617,-9.907c1.409,-1.449 2.202,-3.414 2.202,-5.464c0,-2.05 -0.793,-4.014 -2.202,-5.464c-0,0 -0,0 -0,0c-1.419,-1.459 -3.345,-2.277 -5.352,-2.277c-2.007,-0 -3.932,0.818 -5.351,2.277c-0,0 -1.065,1.095 -1.065,1.095c0,0 -1.057,-1.087 -1.057,-1.087c-1.419,-1.459 -3.344,-2.277 -5.351,-2.277c-2.007,0 -3.933,0.818 -5.352,2.277m1.434,1.395c1.039,-1.069 2.448,-1.672 3.918,-1.672c1.47,0 2.878,0.603 3.917,1.672c0,-0 1.774,1.824 1.774,1.824c0.188,0.193 0.447,0.303 0.717,0.303c0.27,-0 0.529,-0.11 0.717,-0.303l1.782,-1.833c1.039,-1.068 2.447,-1.671 3.917,-1.671c1.47,-0 2.878,0.603 3.918,1.671c0.003,0.004 0.006,0.007 0.01,0.011c1.039,1.069 1.626,2.533 1.626,4.059c0,1.526 -0.587,2.991 -1.636,4.07c-0,-0 -7.874,8.114 -9.617,9.907c-0.188,0.193 -0.443,0.304 -0.709,0.304c-0.266,0 -0.521,-0.111 -0.709,-0.304l-9.625,-9.899c-1.049,-1.079 -1.636,-2.544 -1.636,-4.07c-0,-1.526 0.587,-2.99 1.636,-4.069" />
    <path d="M14.998,15.003l-1.997,-0c-0.552,-0 -1,0.448 -1,1c0,0.552 0.448,1 1,1l1.997,-0l-0,1.997c-0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l-0,-1.997l1.997,-0c0.552,-0 1,-0.448 1,-1c-0,-0.552 -0.448,-1 -1,-1l-1.997,-0l-0,-1.997c-0,-0.552 -0.448,-1 -1,-1c-0.552,0 -1,0.448 -1,1l-0,1.997Z" />
  </svg>
);
export default CareIcon;