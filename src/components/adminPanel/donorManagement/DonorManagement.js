import React, { useEffect, useRef, useState } from "react";
import sectionStyles from "../dashboard/Dashboard.module.scss";
import styles from "./DonorManagement.module.scss";
import CustomButton from "../../common/components/customButton";
import AddIcon from "../../../assets/icons/svgs/AddIcon";
import TabController from "../../common/components/tab/TabController";
import DonorTable from "../../common/components/table/donorTables/DonorTable";
import commonStyles from "../../../styles/common.module.scss";
import SearchTableData from "../../common/components/Filters/Search/SearchTableData";
import Filter from "../../common/components/Filters/Filter/Filter";
import CustomModal from "../../common/components/modal/CustomModal";
import DonorForm from "../../common/components/table/donorTables/DonorForm";
import EmptyMessage from "../../../share/empty/Empty";
import donorService from "../../../api/services/donorService";

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
  { key: 3, value: "Sort By Last name" },
  { key: 4, value: "Sort By Blood Group" },
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
  const resetSearchField = useRef(null);
  const resetFilters = useRef(null);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [isDonorFormOpen, setIsDonorFormOpen] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState({});
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [isSearchHasValue, setSearchHasValue] = useState(false);

  const getDonors = async () => {
    try {
      const respond = await donorService.getAllDonors();
      setFilteredData(respond);
      setData(respond);
    } catch (e) {
      console.log("error - ", e);
    }
  };

  useEffect(() => {
    getDonors();
  }, []);

  const formChanged = () => {
    console.log("called the donor management back");
    getDonors();
  };

  const loadComponent = () => {
    switch (selectedTab.key) {
      case 1:
        if (!filteredData.length) {
          return <EmptyMessage isSearchedValue={isSearchHasValue} />;
        } else {
          return (
            <DonorTable
              dataset={filteredData}
              tableHeader={donorTableHeader}
              actionType={"VIEW"}
              isAllowedFullAccess={true}
              formChanged={formChanged}
            />
          );
        }
      default:
        if (!filteredData.length) {
          return <EmptyMessage isSearchedValue={isSearchHasValue} />;
        } else {
          return (
            <DonorTable
              dataset={filteredData}
              tableHeader={donorTableHeader}
              actionType={"VIEW"}
              isAllowedFullAccess={true}
              formChanged={formChanged}
            />
          );
        }
    }
  };

  const filterData = (searchValue) => {
    searchValue ? setSearchHasValue(true) : setSearchHasValue(false);
    console.log("data - ", data);
    const filteredDataSet = data.filter(
      (value) =>
        value.nic.toLocaleLowerCase().includes(searchValue) ||
        value.firstName.toLocaleLowerCase().includes(searchValue) ||
        value.lastName.toLocaleLowerCase().includes(searchValue) ||
        value.bloodType.toLocaleLowerCase().includes(searchValue)
    );
    if (filteredDataSet && searchValue) {
      setFilteredData(filteredDataSet);
    } else {
      setFilteredData(data);
    }
  };

  const getFilterOption = (value) => {
    switch (value.key) {
      case 1:
        setFilteredData(
          [...filteredData].sort((a, b) =>
            a.nic > b.nic ? 1 : a.nic < b.nic ? -1 : 0
          )
        );
        break;
      case 2:
        setFilteredData(
          [...filteredData].sort((a, b) =>
            a.firstName > b.firstName ? 1 : a.firstName < b.firstName ? -1 : 0
          )
        );
        break;
      case 3:
        setFilteredData(
          [...filteredData].sort((a, b) =>
            a.lastName > b.lastName ? 1 : a.lastName < b.lastName ? -1 : 0
          )
        );
        break;
      case 4:
        setFilteredData(
          [...filteredData].sort((a, b) =>
            a.bloodType > b.bloodType ? 1 : a.bloodType < b.bloodType ? -1 : 0
          )
        );
        break;
      default:
        break;
    }
  };

  const tableReset = () => {
    setFilteredData(data);
  };

  useEffect(() => {
    resetSearchField?.current?.handleResetFormSearch();
    resetFilters?.current?.resetFilter();
    tableReset();
  }, [selectedTab]);

  return (
    <div className={sectionStyles.sectionStyles}>
      <div className={sectionStyles.dashboardTitle}>
        <h4>{selectedPage}</h4>
      </div>
      <div className={styles.stockMngWrapper}>
        <div className={commonStyles.controllPanel}>
          <CustomButton
            buttonType={"CIRCLE_ACTIONS"}
            iconsLeft={<AddIcon size={12} color={"#FE5987"} />}
            onClick={() => setIsDonorFormOpen(true)}
            optionalBackgroundColor={"#5585CC"}
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
                name={"Search"}
                // placeholder={""}
                getOnChangeSearchValue={(value) => filterData(value)}
                getOnClickedSearchValue={(value) => filterData(value)}
              />
            }
          </div>
          <div>
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
      {isDonorFormOpen ? (
        <CustomModal open={setIsDonorFormOpen} title={`Add New Donor`}>
          <div className={styles.hospitalData}>
            <DonorForm
              donor={selectedDonor}
              isAllowedFullAccess={false}
              isCreateDonor={true}
              formChanged={formChanged}
            />
          </div>
        </CustomModal>
      ) : (
        ""
      )}
    </div>
  );
};

export default DonorManagement;
