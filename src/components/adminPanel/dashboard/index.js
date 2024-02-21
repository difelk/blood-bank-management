import React from "react";
import Styles from "./Dashboard.module.scss";
import SideBar from "./SideBar";
import Content from "./Content";
import Schedules from "./Schedules";

const Dashboard = () => {
  return (
    <div className={Styles.dashboardWrapper}>
      <div className={Styles.sectionSideBar}>
        <SideBar />
      </div>
      <div className={Styles.sectionContent}>
        <Content />
      </div>
      <div className={Styles.sectionSchedule}>
        <Schedules />
      </div>
    </div>
  );
};

export default Dashboard;
