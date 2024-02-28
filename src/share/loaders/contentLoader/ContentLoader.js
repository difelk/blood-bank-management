import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./loader.module.scss";

const TableLoader = () => (
  <ContentLoader
    speed={2}
    width={900}
    height={550}
    viewBox="0 0 900 500"
    backgroundColor="#ffffff"
    foregroundColor="#ecebeb"
    className={styles.loaderanimation}
  >
    <rect x="0" y="0" rx="3" ry="3" width="800" height="60" />
    <rect x="0" y="70" rx="3" ry="3" width="800" height="60" />
    <rect x="0" y="140" rx="3" ry="3" width="800" height="60" />
    <rect x="0" y="210" rx="3" ry="3" width="800" height="60" />
    <rect x="0" y="280" rx="3" ry="3" width="800" height="60" />
    <rect x="0" y="350" rx="3" ry="3" width="800" height="60" />
    {/* <rect x="0" y="450" rx="3" ry="3" width="800" height="60" /> */}
    {/* <rect x="0" y="540" rx="3" ry="3" width="800" height="60" /> */}
  </ContentLoader>
);

export default TableLoader;
