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
import Lottie from "react-lottie";
import { defaultOptions } from "../userManagement/UserManagement";
import CsvIcon from "../../../assets/icons/svgs/CsvIcon";
import DonorUploadCSV from "./DonorUploadCSV";

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

const tabs = [
  { key: 1, value: "Donor Details" },
  // { key: 2, value: "Stock Details" },
];

const DonorManagement = ({ selectedPage }) => {
  const resetSearchField = useRef(null);
  const resetFilters = useRef(null);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [modalType, setmodalType] = useState("");
  const [selectedDonor, setSelectedDonor] = useState({});
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [isLoading, setIsloading] = useState(false);
  const [isSearchHasValue, setSearchHasValue] = useState(false);

  const getDonors = async () => {
    setIsloading(true);
    try {
      const respond = await donorService.getAllDonors();
      setFilteredData(respond);
      setData(respond);
    } catch (e) {
      console.log("error - ", e);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getDonors();
  }, []);

  const formChanged = () => {
    getDonors();
  };

  const loadComponent = () => {
    switch (selectedTab.key) {
      case 1:
        if (isLoading) {
          return (
            <Lottie
              options={defaultOptions}
              height={150}
              width={150}
              speed={2}
            />
          );
        } else if (!filteredData || !filteredData.length) {
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
        value.donorNic.toLocaleLowerCase().includes(searchValue) ||
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
            a.donorNic > b.donorNic ? 1 : a.donorNic < b.donorNic ? -1 : 0
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
          <div className={styles.btnWrapper}>
            <CustomButton
              buttonType={"CIRCLE_ACTIONS"}
              iconsLeft={<AddIcon size={12} color={"#FE5987"} />}
              onClick={() => setmodalType("ADD_DONOR")}
              optionalBackgroundColor={"#5585CC"}
            />
          </div>

          <div className={commonStyles.controllPanel}>
            <CustomButton
              buttonType={"CIRCLE_ACTIONS"}
              iconsLeft={<CsvIcon size={25} color={"#292929"} />}
              onClick={() => setmodalType("ADD_CSV")}
              optionalBackgroundColor={"#5585CC"}
            />
          </div>
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
                disabledSearch={!filteredData || isLoading}
              />
            }
          </div>
          {filteredData && !isLoading ? (
            <div>
              {
                <Filter
                  filterOptions={filterOptions}
                  getFilterOption={getFilterOption}
                />
              }
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={styles.summeryTable}>{loadComponent()}</div>
        <div className={styles.stockTable}></div>
      </div>
      {modalType ? (
        <CustomModal
          open={setmodalType}
          title={modalType === "ADD_DONOR" ? `Add New Donor` : "Upload CSV"}
        >
          <div className={styles.hospitalData}>
            {modalType === "ADD_DONOR" ? (
              <DonorForm
                donor={selectedDonor}
                isAllowedFullAccess={false}
                isCreateDonor={true}
                formChanged={formChanged}
              />
            ) : (
              <DonorUploadCSV formChanged={formChanged} />
            )}
          </div>
        </CustomModal>
      ) : (
        ""
      )}
    </div>
  );
};

export default DonorManagement;
