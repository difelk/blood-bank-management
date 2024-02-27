import React, { useState } from "react";
import sectionStyles from "../dashboard/Dashboard.module.scss";
import styles from "./DonorManagement.module.scss";
import CustomButton from "../../common/components/customButton";
import AddIcon from "../../../assets/icons/svgs/AddIcon";
import TabController from "../../common/components/tab/TabController";
import DonorTable from "../../common/components/table/donorTables/DonorTable";
import commonStyles from "../../../styles/common.module.scss";
import SearchTableData from "../../common/components/Filters/Search/SearchTableData";
import Filter from "../../common/components/Filters/Filter/Filter";

const donorTableHeader = [
  { name: "NIC", width: "20%" },
  { name: "First Name", width: "20%" },
  { name: "Last Name", width: "20%" },
  { name: "Blood Group", width: "20%" },
  { name: "Actions", width: "20%" },
];

const filterOptions = [
  { key: 1, value: "Sort By NIC" },
  { key: 2, value: "Sort By First name" },
  { key: 2, value: "Sort By Last name" },
  { key: 2, value: "Sort By Blood Group" },
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
  const [filteredData, setFilteredData] = useState(donorTableDataSet);

  const loadComponent = () => {
    switch (selectedTab.key) {
      case 1:
        return (
          <DonorTable
            dataset={filteredData}
            tableHeader={donorTableHeader}
            actionType={"VIEW"}
            isAllowedFullAccess={true}
          />
        );
      default:
        return (
          <DonorTable
            dataset={filteredData}
            tableHeader={donorTableHeader}
            actionType={"VIEW"}
            isAllowedFullAccess={true}
          />
        );
    }
  };

  const filterData = (searchValue) => {
    console.log("searchValue - ", searchValue);
    const filteredDataSet = donorTableDataSet.filter((value) =>
      value.nic.toLocaleLowerCase().includes(searchValue)
    );
    console.log("filteredDataSet - ", filteredDataSet);
    if (filteredDataSet && searchValue) {
      setFilteredData(filteredDataSet);
    } else {
      setFilteredData(donorTableDataSet);
    }
  };

  const getFilterOption = (value) => {
    switch (value.key) {
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
        <div
          className={[
            commonStyles.d_flex,
            commonStyles.flex_column,
            commonStyles.align_items_normal,
            commonStyles.justify_flex_start,
          ].join(" ")}
        >
          <div>
            {
              <SearchTableData
                name={"search"}
                placeholder={"Donor search by NIC"}
                getOnChangeSearchValue={(value) => filterData(value)}
                getOnClickedSearchValue={(value) => filterData(value)}
              />
            }
          </div>
          <div className={commonStyles.mrg_l_5}>
            {" "}
            {
              <Filter
                filterOptions={filterOptions}
                getFilterOption={getFilterOption}
              />
            }
          </div>
        </div>
        <div className={styles.summeryTable}>{loadComponent()}</div>
        <div className={styles.stockTable}></div>
      </div>
    </div>
  );
};

export default DonorManagement;
