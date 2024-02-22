import React, { useEffect, useState } from "react";
import Styles from "./Dashboard.module.scss";
import siteLogo from "../../images/bloodLogo.png";

const SideBar = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  useEffect(() => {
    setCurrentPage("Dashboard");
  }, []);
  return (
    <div className={Styles.sidebarWrapper}>
      <div className={Styles.logowrapper}>
        <img src={siteLogo} alt="logo" />
        <p>BloodCentral Network</p>
      </div>
      {/* <div>
        <button>Registor</button>
      </div> */}
      <div className={Styles.navlinksWrapper}>
        <ul>
          <li className={activeTab === "Dashboard" ? Styles.activeTab : ""}>
            <img src="" alt="" />
            <a href="#">Dashboard</a>
          </li>
          <li>
            <img src="" alt="" />
            <a href="#">Stock Management</a>
          </li>
          <li>
            <img src="" alt="" />
            <a href="#">Event Management</a>
          </li>
          <li>
            <img src="" alt="" />
            <a href="#">User Management</a>
          </li>
          <li>
            <img src="" alt="" />
            <a href="#">Settings</a>
          </li>
          <li>
            <img src="" alt="" />
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
