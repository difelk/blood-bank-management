import React, { useState } from "react";
import Styles from "./Dashboard.module.scss";
import CustomeDropdown from "../../common/components/customDropdown";
import ArrowDownIcon from "../../../assets/icons/svgs/ArrowIcon";
import MailIcon from "../../../assets/icons/svgs/MailIcon";

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
            icon={<MailIcon size={40} />}
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
    </div>
  );
};

export default Schedules;
