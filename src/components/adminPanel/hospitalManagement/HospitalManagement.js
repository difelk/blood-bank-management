import React, { useState } from "react";
import sectionStyles from "../dashboard/Dashboard.module.scss";
import styles from "./HospitalManagement.module.scss";
import CustomButton from "../../common/components/customButton";
import AddIcon from "../../../assets/icons/svgs/AddIcon";
import TabController from "../../common/components/tab/TabController";
import HospitalStockDetails from "../../common/components/table/hospitalTables/HospitalStockDetails";
import HospitalStockSummaryTable from "../../common/components/table/hospitalTables/HospitalStockSummaryTable";
import ExchangeIcon from "../../../assets/icons/svgs/ExchangeIcon";
import CustomModal from "../../common/components/modal/CustomModal";
import commonStyles from "../../../styles/common.module.scss";
import HospitalsTable from "../../common/components/table/hospitalTables/HospitalsTable";
import HospitalRegistrationForm from "../../../share/formComponents/hospitalRegistrationForm/HospitalRegistrationForm";

const summaryTableHeader = [
  { name: "Blood Group", width: "25%" },
  { name: "Last Updated", width: "25%" },
  { name: "Total", width: "25%" },
  { name: "Actions", width: "25%" },
];

const summaryTableDataSet = [
  { bloodGroup: "A+", lastUpdated: "2024/01/03", total: "97" },
  { bloodGroup: "A-", lastUpdated: "2024/01/04", total: "82" },
  { bloodGroup: "B+", lastUpdated: "2024/01/05", total: "65" },
  { bloodGroup: "B-", lastUpdated: "2024/01/06", total: "53" },
  { bloodGroup: "AB+", lastUpdated: "2024/01/07", total: "37" },
  { bloodGroup: "AB-", lastUpdated: "2024/01/08", total: "29" },
  { bloodGroup: "O+", lastUpdated: "2024/01/09", total: "110" },
  { bloodGroup: "O-", lastUpdated: "2024/01/10", total: "95" },
];

const summaryDetailsTableHeader = [
  // { name: "Stock ID", width: "20%" },
  { name: "Date", width: "20%" },
  { name: "Category", width: "20%" },
  { name: "Blood Group", width: "40%" },
  { name: "Action", width: "20%" },
];

const hospitalsTablesHeader = [
  // { name: "Stock ID", width: "20%" },
  { name: "Hospital Name", width: "20%" },
  { name: "City", width: "20%" },
  { name: "Stock", width: "40%" },
  { name: "Action", width: "20%" },
];

const hospitalsTablesDataSet = [
  {
    hospitalName: "Hospital 001",
    city: "Colombo",
    stock: {
      APLUS: 70,
      AMINUS: 88,
      BPLUS: 50,
      BMINUS: 87,
      OPLUS: 20,
      OMINUS: 43,
      ABPLUS: 38,
      ABMINUS: 78,
    },
  },
  {
    hospitalName: "Hospital 002",
    city: "Colombo",
    stock: {
      APLUS: 70,
      AMINUS: 88,
      BPLUS: 50,
      BMINUS: 87,
      OPLUS: 20,
      OMINUS: 43,
      ABPLUS: 38,
      ABMINUS: 78,
    },
  },
  {
    hospitalName: "Hospital 003",
    city: "Colombo",
    stock: {
      APLUS: 70,
      AMINUS: 88,
      BPLUS: 50,
      BMINUS: 87,
      OPLUS: 20,
      OMINUS: 43,
      ABPLUS: 38,
      ABMINUS: 78,
    },
  },
  {
    hospitalName: "Hospital 004",
    city: "Colombo",
    stock: {
      APLUS: 70,
      AMINUS: 88,
      BPLUS: 50,
      BMINUS: 87,
      OPLUS: 20,
      OMINUS: 43,
      ABPLUS: 38,
      ABMINUS: 78,
    },
  },
];

const summaryDetailsTableDataSet = [
  {
    // stockId: "202402241617V1",
    date: "2024/02/24 19:17",
    category: "REGULAR",
    // location: "Colombo",
    stock: {
      APLUS: 70,
      AMINUS: 88,
      BPLUS: 50,
      BMINUS: 87,
      OPLUS: 20,
      OMINUS: 43,
      ABPLUS: 38,
      ABMINUS: 78,
    },
  },
  {
    // stockId: "202402241618V1",
    date: "2024/02/24 19:18",
    category: "EMERGENCY",
    // location: "Kandy",
    stock: {
      APLUS: 70,
      AMINUS: 88,
      BPLUS: 50,
      BMINUS: 87,
      OPLUS: 20,
      OMINUS: 43,
      ABPLUS: 38,
      ABMINUS: 78,
    },
  },
  {
    // stockId: "202402241619V1",
    date: "2024/02/24 19:19",
    category: "REGULAR",
    // location: "Galle",
    stock: {
      APLUS: 70,
      AMINUS: 88,
      BPLUS: 50,
      BMINUS: 87,
      OPLUS: 20,
      OMINUS: 43,
      ABPLUS: 38,
      ABMINUS: 78,
    },
  },
  {
    // stockId: "202402241620V1",
    date: "2024/02/24 19:20",
    category: "EMERGENCY",
    // location: "Jaffna",
    stock: {
      APLUS: 70,
      AMINUS: 88,
      BPLUS: 50,
      BMINUS: 87,
      OPLUS: 20,
      OMINUS: 43,
      ABPLUS: 38,
      ABMINUS: 78,
    },
  },
  {
    // stockId: "202402241621V1",
    date: "2024/02/24 19:21",
    category: "REGULAR",
    // location: "Matara",
    stock: {
      APLUS: 70,
      AMINUS: 88,
      BPLUS: 50,
      BMINUS: 87,
      OPLUS: 20,
      OMINUS: 43,
      ABPLUS: 38,
      ABMINUS: 78,
    },
  },
];

const tabs = [
  { key: 1, value: "Hospitals Summary" },
  { key: 2, value: "Hospital Stock Summary" },
  { key: 3, value: "Hospital Stock Details" },
];

const HospitalManagement = ({ selectedPage, isAllowedFullAccess }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [modalType, setModalType] = useState("");
  const [selectedHospital, setSelectedHospital] = useState({});

  const loadComponent = () => {
    switch (selectedTab.key) {
      case 1:
        return (
          <HospitalsTable
            dataset={hospitalsTablesDataSet}
            tableHeader={hospitalsTablesHeader}
            actionType={"VIEW"}
          />
        );
      case 2:
        return (
          <HospitalStockSummaryTable
            dataset={summaryTableDataSet}
            tableHeader={summaryTableHeader}
            actionType={"VIEW"}
          />
        );
      case 3:
        return (
          <HospitalStockDetails
            dataset={summaryDetailsTableDataSet}
            tableHeader={summaryDetailsTableHeader}
            actionType={"VIEW_EDIT"}
          />
        );
      default:
        return (
          <HospitalsTable
            dataset={hospitalsTablesDataSet}
            tableHeader={hospitalsTablesHeader}
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
        <div className={commonStyles.controllPanel}>
          <CustomButton
            iconsLeft={<AddIcon size={12} color={"#FE5987"} />}
            onClick={() => {
              setModalType("ADD");
            }}
          />
          <CustomButton
            iconsLeft={<ExchangeIcon size={18} color={"#03a9f4"} />}
            optionalBackgroundColor={"#03a9f4"}
            onClick={() => {
              setModalType("REQUEST");
            }}
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
      {modalType ? (
        modalType === "ADD" ? (
          <CustomModal
            open={setModalType}
            title={`Add Hospital`}
            height={"400px"}
          >
            <div className={styles.hospitalData}></div>
            <HospitalRegistrationForm
              Hospital={selectedHospital}
              isAllowedFullAccess={isAllowedFullAccess}
            />
          </CustomModal>
        ) : modalType === "REQUEST" ? (
          <CustomModal open={setModalType} title={`Stock Exhange and Request`}>
            <div className={styles.hospitalData}></div>
          </CustomModal>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default HospitalManagement;
