import React, { useState } from "react";
import Styles from "./Dashboard.module.scss";
import SideBar from "./SideBar";
import Content from "./Content";
import Schedules from "./Schedules";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  return (
    <div className={Styles.dashboardWrapper}>
      <div className={Styles.sectionSideBar}>
        <SideBar setCurrentPage={setCurrentPage} />
      </div>
      <div className={Styles.sectionContent}>
        <Content selectedPage={currentPage} />
      </div>
      <div className={Styles.sectionSchedule}>
        <Schedules />
      </div>
    </div>
  );
};

export default Dashboard;
