import React from "react";
import styles from "./TabController.module.scss";

const TabController = ({ tabs, getActiveTab, activeTab }) => {
  return (
    <div className={styles.tabWrapper}>
      {tabs.map((tab) => (
        <button
          className={
            activeTab.key === tab.key
              ? [styles.tabItem, styles.tabItemActive].join(" ")
              : styles.tabItem
          }
          key={tab.key}
          onClick={() => getActiveTab(tab)}
        >
          <p>{tab.value}</p>
        </button>
      ))}
    </div>
  );
};

export default TabController;
