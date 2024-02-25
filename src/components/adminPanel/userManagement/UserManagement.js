import React, { useState } from "react";
import sectionStyles from "../dashboard/Dashboard.module.scss";
import styles from "./UserManagement.module.scss";
import CustomButton from "../../common/components/customButton";
import AddIcon from "../../../assets/icons/svgs/AddIcon";
import { BUTTONTYPES } from "../../../share/enums";
import TabController from "../../common/components/tab/TabController";
import UserTable from "../../common/components/table/userTables/UserTable";

const userTableHeader = [
  { name: "NIC", width: "25%" },
  { name: "Name", width: "25%" },
  { name: "Contact No", width: "25%" },
  { name: "Actions", width: "25%" },
];

const userTableDataSet = [
  { nic: "975083691V", name: "Ilmee De Silva", contactNo: "0772909244" },
  { nic: "975083691V", name: "Ilmee De Silva", contactNo: "0772909244" },
  { nic: "975083691V", name: "Ilmee De Silva", contactNo: "0772909244" },
  { nic: "975083691V", name: "Ilmee De Silva", contactNo: "0772909244" },
];

const tabs = [
  { key: 1, value: "User Details" },
  // { key: 2, value: "Stock Details" },
];

const UserManagement = ({ selectedPage }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const loadComponent = () => {
    switch (selectedTab.key) {
      case 1:
        return (
          <UserTable
            dataset={userTableDataSet}
            tableHeader={userTableHeader}
            actionType={"VIEW"}
          />
        );
      default:
        return (
          <UserTable
            dataset={userTableDataSet}
            tableHeader={userTableHeader}
            actionType={"VIEW"}
          />
        );
    }
  };

  return (
    <div className={sectionStyles.sectionStyles}>
      <div className={sectionStyles.dashboardTitle}>
        <h4>{selectedPage}</h4>
      </div>
      <div className={styles.stockMngWrapper}>
        <div className={styles.controllPanel}>
          <CustomButton
            // buttonType={BUTTONTYPES.SQUAREICON}
            iconsLeft={<AddIcon size={12} color={"#FE5987"} />}
            onClick={() => console.log("click")}
          />
        </div>
        <TabController
          tabs={tabs}
          getActiveTab={(tab) => setSelectedTab(tab)}
          activeTab={selectedTab}
        />
        <div className={styles.summeryTable}>{loadComponent()}</div>
        <div className={styles.stockTable}></div>
      </div>
    </div>
  );
};

export default UserManagement;
