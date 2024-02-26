import React, { useState } from "react";
import Styles from "./Dashboard.module.scss";
import SideBar from "./SideBar";
import Content from "./Content";
import Schedules from "./Schedules";
import HospitalManagement from "../hospitalManagement/HospitalManagement";
import StockManagement from "../stockManagement/StockManagement";
import DonorManagement from "../donorManagement/DonorManagement";
import EventManagement from "../eventManagement/EventManagement";
import UserManagement from "../userManagement/UserManagement";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const renderContent = (page) => {
    switch (page) {
      case "Dashboard":
        return <Content selectedPage={currentPage} />;
      case "Stock Management":
        return <StockManagement selectedPage={currentPage} />;
      case "Donor Management":
        return <DonorManagement selectedPage={currentPage} />;
      case "Event Management":
        return <EventManagement selectedPage={currentPage} />;
      case "User Management":
        return <UserManagement selectedPage={currentPage} />;
      case "Hospital Management":
        return <HospitalManagement selectedPage={currentPage} />;
      default:
        return <Content selectedPage={currentPage} />;
    }
  };

  return (
    <div className={Styles.dashboardWrapper}>
      <div className={Styles.sectionSideBar}>
        <SideBar setCurrentPage={setCurrentPage} />
      </div>
      <div
        className={
          currentPage === "Dashboard"
            ? Styles.sectionContent
            : [Styles.sectionContent, Styles.sectionContentFull].join(" ")
        }
      >
        {renderContent(currentPage)}
      </div>
      {currentPage === "Dashboard" ? (
        <div className={Styles.sectionSchedule}>
          <Schedules />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Dashboard;
