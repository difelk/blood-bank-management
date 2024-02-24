import React from "react";
import sectionStyles from "../dashboard/Dashboard.module.scss";

const StockManagement = ({ selectedPage }) => {
  return (
    <div className={sectionStyles.sectionStyles}>
      <div className={sectionStyles.dashboardTitle}>
        <h4>{selectedPage}</h4>
      </div>
    </div>
  );
};

export default StockManagement;
