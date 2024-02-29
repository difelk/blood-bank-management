import React, { useState, useRef, useEffect } from "react";
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
import EmptyMessage from "../../../share/empty/Empty";
import SearchTableData from "../../common/components/Filters/Search/SearchTableData";
import Filter from "../../common/components/Filters/Filter/Filter";

const summaryTableHeader = [
  { name: "Blood Group", width: "25%" },
  { name: "Last Updated", width: "25%" },
  { name: "Total", width: "25%" },
  { name: "Actions", width: "25%" },
];

const filterOptionsForHospitals = [
  { key: 1, value: "Sort By Hospital Name" },
  { key: 2, value: "Sort By City" },
];

const filterOptionsForStock = [
  { key: 1, value: "Sort By Date" },
  { key: 2, value: "Sort By Category" },
  { key: 3, value: "Sort By Quantity" },
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
  { name: "Blood Group", width: "30%" },
  { name: "Quantity", width: "10%" },
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
    hospitalName: "Hospital 004",
    city: "Colombo 10",
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
    city: "Kottawa",
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
    hospitalName: "Hospital 001",
    city: "Colombo 03",
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
    city: "Maharagama",
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
    date: "2024/02/10 09:34",
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
    qty: "50%",
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
    qty: "70%",
  },
  {
    // stockId: "202402241619V1",
    date: "2024/01/24 14:20",
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
    qty: "65%",
  },
  {
    // stockId: "202402241620V1",
    date: "2023/12/28 08:54",
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
    qty: "40%",
  },
  {
    // stockId: "202402241621V1",
    date: "2024/02/25 19:21",
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
    qty: "35%",
  },
];

const tabs = [
  { key: 1, value: "Hospitals Summary" },
  { key: 2, value: "Hospital Stock Summary" },
  { key: 3, value: "Hospital Stock Details" },
];

const HospitalManagement = ({ selectedPage, isAllowedFullAccess }) => {
  const resetSearchField = useRef(null);
  const resetFilters = useRef(null);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [modalType, setModalType] = useState("");
  const [selectedHospital, setSelectedHospital] = useState({});
  const [filteredDataForHospitals, setFilteredDataForHospitals] = useState(
    hospitalsTablesDataSet
  );
  const [filteredDataForStock, setFilteredDataForStock] = useState(
    summaryDetailsTableDataSet
  );
  const [isSearchHasValue, setSearchHasValue] = useState(false);

  const loadComponent = () => {
    switch (selectedTab.key) {
      case 1:
        if (!filteredDataForHospitals.length) {
          return <EmptyMessage isSearchedValue={isSearchHasValue} />;
        } else {
          return (
            <>
              {/* <TableLoader /> */}
              <HospitalsTable
                dataset={filteredDataForHospitals}
                tableHeader={hospitalsTablesHeader}
                actionType={"VIEW"}
              />
            </>
          );
        }

      case 2:
        if (!summaryTableDataSet.length) {
          return <EmptyMessage isSearchedValue={isSearchHasValue} />;
        } else {
          return (
            <HospitalStockSummaryTable
              dataset={summaryTableDataSet}
              tableHeader={summaryTableHeader}
              actionType={"VIEW"}
            />
          );
        }
      case 3:
        if (!filteredDataForStock.length) {
          return <EmptyMessage isSearchedValue={isSearchHasValue} />;
        } else {
          return (
            <HospitalStockDetails
              dataset={filteredDataForStock}
              tableHeader={summaryDetailsTableHeader}
              actionType={"VIEW_EDIT"}
            />
          );
        }
      default:
        if (!filteredDataForHospitals.length) {
          return <EmptyMessage isSearchedValue={isSearchHasValue} />;
        } else {
          return (
            <HospitalsTable
              dataset={filteredDataForHospitals}
              tableHeader={hospitalsTablesHeader}
              actionType={"VIEW"}
            />
          );
        }
    }
  };

  const filterData = (searchValue) => {
    if (selectedTab.key === 1) {
      searchValue ? setSearchHasValue(true) : setSearchHasValue(false);
      const filteredDataSetHospitals = hospitalsTablesDataSet.filter(
        (value) =>
          value.hospitalName.toLocaleLowerCase().includes(searchValue) ||
          value.city.toLocaleLowerCase().includes(searchValue)
      );

      if (filteredDataSetHospitals && searchValue) {
        setFilteredDataForHospitals(filteredDataSetHospitals);
      } else {
        setFilteredDataForHospitals(hospitalsTablesDataSet);
      }

      setFilteredDataForStock(summaryDetailsTableDataSet);
    } else if (selectedTab.key === 3) {
      searchValue ? setSearchHasValue(true) : setSearchHasValue(false);
      const filteredDataSetStock = summaryDetailsTableDataSet.filter(
        (value) =>
          value.date.toLocaleLowerCase().includes(searchValue) ||
          value.category.toLocaleLowerCase().includes(searchValue)
      );

      if (filteredDataSetStock && searchValue) {
        setFilteredDataForStock(filteredDataSetStock);
      } else {
        setFilteredDataForStock(summaryDetailsTableDataSet);
      }

      setFilteredDataForHospitals(hospitalsTablesDataSet);
    }
  };

  const getFilterOption = (value) => {
    if (selectedTab.key === 1) {
      switch (value.key) {
        case 1:
          setFilteredDataForHospitals(
            [...filteredDataForHospitals].sort((a, b) =>
              a.hospitalName > b.hospitalName
                ? 1
                : a.hospitalName < b.hospitalName
                ? -1
                : 0
            )
          );
          break;
        case 2:
          setFilteredDataForHospitals(
            [...filteredDataForHospitals].sort((a, b) =>
              a.city > b.city ? 1 : a.city < b.city ? -1 : 0
            )
          );
          break;
        default:
          break;
      }
    } else if (selectedTab.key === 3) {
      switch (value.key) {
        case 1:
          setFilteredDataForStock(
            [...filteredDataForStock].sort((a, b) =>
              a.date > b.date ? 1 : a.date < b.date ? -1 : 0
            )
          );
          break;
        case 2:
          setFilteredDataForStock(
            [...filteredDataForStock].sort((a, b) =>
              a.category > b.category ? 1 : a.category < b.category ? -1 : 0
            )
          );
          break;
        case 3:
          setFilteredDataForStock(
            [...filteredDataForStock].sort((a, b) =>
              a.qty > b.qty ? 1 : a.qty < b.qty ? -1 : 0
            )
          );
          break;
        default:
          break;
      }
    }
  };

  const tableReset = () => {
    setFilteredDataForHospitals(hospitalsTablesDataSet);
    setFilteredDataForStock(summaryDetailsTableDataSet);
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
            onClick={() => {
              setModalType("ADD");
            }}
            optionalBackgroundColor={"#5585CC"}
          />
          <CustomButton
            buttonType={"CIRCLE_ACTIONS"}
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
        <div
          className={[
            commonStyles.d_flex,
            commonStyles.flex_column,
            commonStyles.align_items_normal,
            commonStyles.justify_flex_start,
          ].join(" ")}
        >
          {selectedTab.key == 1 ? (
            <>
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
                    filterOptions={filterOptionsForHospitals}
                    getFilterOption={getFilterOption}
                  />
                }
              </div>
            </>
          ) : selectedTab.key == 3 ? (
            <>
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
                    filterOptions={filterOptionsForStock}
                    getFilterOption={getFilterOption}
                  />
                }
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        <rect x="4" y="1" rx="1" ry="1" width="13" height="2" />
        <rect x="5" y="4" rx="1" ry="1" width="38" height="6" />
        <rect x="45" y="4" rx="1" ry="1" width="38" height="6" />
        <rect x="4" y="12" rx="1" ry="1" width="13" height="2" />
        <rect x="5" y="15" rx="1" ry="1" width="38" height="6" />
        <rect x="45" y="15" rx="1" ry="1" width="38" height="6" />
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
