import React, { useState } from "react";
import Styles from "./Dashboard.module.scss";
import CustomeDropdown from "../../common/components/customDropdown";
import ArrowDownIcon from "../../../assets/icons/svgs/ArrowIcon";
import MailIcon from "../../../assets/icons/svgs/MailIcon";
import NotificationIcon from "../../../assets/icons/svgs/NotificationIcon";

const Schedules = () => {
  const getUserProfileDrodown = (value) => {
    console.log("sehedules value - ", value);
  };

  const profileData = [{ key: "profile", value: "View Profile" }];

  return (
    <div className={Styles.schedulesBarWrapper}>
      <div className={Styles.topProfileSection}>
        <div className={Styles.notificationDropdown1}>
          <CustomeDropdown
            getDropdownValue={getUserProfileDrodown}
            dataset={profileData}
            icon={<NotificationIcon size={25} color={"#4F50CB"} />}
            defultTxt={""}
          />
        </div>
        <div className={Styles.profileNameDisplay}>
          {/* <p className={Styles.userName}>Mr. JOHN DOE</p> */}
          <div className={Styles.viewPrfilDet}>
            <CustomeDropdown
              getDropdownValue={getUserProfileDrodown}
              dataset={profileData}
              icon={<ArrowDownIcon size={15} />}
              defultTxt={"Mr. JOHN DOE"}
            />
            {/* <p  className={Styles.user}>johndo@domain.com</p> */}
          </div>
        </div>
      </div>

      <div className={Styles.schCardWrapper}>
        <div className={Styles.eventsSummery}>
          <div
            className={[
              Styles.summeryChartTitle,
              Styles.ml_1,
              Styles.noMgn,
            ].join(" ")}
          >
            <h4>Event Summery</h4>
          </div>
        </div>
        <div className={Styles.stockSummery}></div>
      </div>
    </div>
  );
};

export default Schedules;
