import React, { useState } from "react";
import sectionStyles from "../dashboard/Dashboard.module.scss";
import styles from "./DonorManagement.module.scss";
import CustomButton from "../../common/components/customButton";
import AddIcon from "../../../assets/icons/svgs/AddIcon";
import TabController from "../../common/components/tab/TabController";
import DonorTable from "../../common/components/table/donorTables/DonorTable";
import commonStyles from "../../../styles/common.module.scss";

const donorTableHeader = [
  { name: "NIC", width: "20%" },
  { name: "First Name", width: "20%" },
  { name: "Last Name", width: "20%" },
  { name: "Blood Group", width: "20%" },
  { name: "Actions", width: "20%" },
];

const donorTableDataSet = [
  {
    nic: "123456789V",
    firstName: "John",
    lastName: "Doe",
    bloodType: "A+",
  },
  {
    nic: "987654321V",
    firstName: "Jane",
    lastName: "Smith",
    bloodType: "B-",
  },
  {
    nic: "456789123V",
    firstName: "Alice",
    lastName: "Johnson",
    bloodType: "AB+",
  },
  {
    nic: "654321987V",
    firstName: "Bob",
    lastName: "Brown",
    bloodType: "O-",
  },
  {
    nic: "789123456V",
    firstName: "Sarah",
    lastName: "Lee",
    bloodType: "A-",
  },
];

const tabs = [
  { key: 1, value: "Donor Details" },
  // { key: 2, value: "Stock Details" },
];

const DonorManagement = ({ selectedPage }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [isDonorFormOpen, setIsDonorFormOpen] = useState(false);

  const loadComponent = () => {
    switch (selectedTab.key) {
      case 1:
        return (
          <DonorTable
            dataset={donorTableDataSet}
            tableHeader={donorTableHeader}
            actionType={"VIEW"}
            isAllowedFullAccess={true}
          />
        );
      default:
        return (
          <DonorTable
            dataset={donorTableDataSet}
            tableHeader={donorTableHeader}
            actionType={"VIEW"}
            isAllowedFullAccess={true}
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
        <div className={commonStyles.controllPanel}>
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

export default DonorManagement;
