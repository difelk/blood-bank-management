import React, { useState, useRef, useEffect } from "react";
import sectionStyles from "../dashboard/Dashboard.module.scss";
import styles from "./UserManagement.module.scss";
import CustomButton from "../../common/components/customButton";
import AddIcon from "../../../assets/icons/svgs/AddIcon";
import { BUTTONTYPES } from "../../../share/enums";
import TabController from "../../common/components/tab/TabController";
import UserTable from "../../common/components/table/userTables/UserTable";
import NotesIcon from "../../../assets/icons/svgs/NotesIcon";
import CustomModal from "../../common/components/modal/CustomModal";
import UserRegistrationForm from "../../../share/formComponents/userRegistrationForm/UserRegistrationForm";
import EmptyMessage from "../../../share/empty/Empty";
import UserActivitiesTable from "../../common/components/table/userTables/UserActivitiesTable";
import commonStyles from "../../../styles/common.module.scss";
import SearchTableData from "../../common/components/Filters/Search/SearchTableData";
import Filter from "../../common/components/Filters/Filter/Filter";

const userTableHeader = [
  { name: "NIC", width: "20%" },
  { name: "First Name", width: "20%" },
  { name: "Last Name", width: "20%" },
  { name: "Contact No", width: "20%" },
  { name: "Actions", width: "20%" },
];

const filterOptions = [
  { key: 1, value: "Sort By NIC" },
  { key: 2, value: "Sort By First name" },
  { key: 3, value: "Sort By Last name" },
];

const userActivityTableHeader = [
  { name: "NIC", width: "25%" },
  { name: "UserName", width: "25%" },
  { name: "UserRole", width: "25%" },
  { name: "Organization", width: "25%" },
  { name: "Actions", width: "25%" },
];
const userActivityTableDataSet = [];

const userTableDataSet = [
  {
    nic: "975083691V",
    first_name: "Alice",
    last_name: "Brown",
    contact_no: "0772909244",
  },
  {
    nic: "956738921V",
    first_name: "Sarah",
    last_name: "Lee",
    contact_no: "0777777292",
  },
  {
    nic: "123456789V",
    first_name: "John",
    last_name: "Doe",
    contact_no: "0772838093",
  },
  {
    nic: "936725684V",
    first_name: "Jane ",
    last_name: "Smith",
    contact_no: "0772909244",
  },
];

const tabs = [
  { key: 1, value: "User Details" },
  { key: 2, value: "User Activities" },
  // { key: 2, value: "Stock Details" },
];

const UserManagement = ({ selectedPage, isAllowedFullAccess }) => {
  const resetSearchField = useRef(null);
  const resetFilters = useRef(null);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [modalType, setModalType] = useState("");
  const [selectedUser, setSelectedUser] = useState({});
  const [filteredData, setFilteredData] = useState(userTableDataSet);

  const loadComponent = () => {
    switch (selectedTab.key) {
      case 1:
        if (!filteredData.length) {
          return <EmptyMessage />;
        } else {
          return (
            <UserTable
              dataset={filteredData}
              tableHeader={userTableHeader}
              actionType={"VIEW"}
              isAllowedFullAccess={true}
            />
          );
        }
      case 2:
        if (!userActivityTableDataSet.length) {
          return <EmptyMessage />;
        } else {
          return (
            <UserActivitiesTable
              dataset={[]}
              tableHeader={userActivityTableHeader}
              actionType={"VIEW"}
              isAllowedFullAccess={true}
            />
          );
        }
      default:
        if (!filteredData.length) {
          return <EmptyMessage />;
        } else {
          return (
            <UserTable
              dataset={filteredData}
              tableHeader={userTableHeader}
              actionType={"VIEW"}
              isAllowedFullAccess={true}
            />
          );
        }
    }
  };

  const filterData = (searchValue) => {
    const filteredDataSet = userTableDataSet.filter(
      (value) =>
        value.nic.toLocaleLowerCase().includes(searchValue) ||
        value.first_name.toLocaleLowerCase().includes(searchValue) ||
        value.last_name.toLocaleLowerCase().includes(searchValue)
    );
    if (filteredDataSet && searchValue) {
      setFilteredData(filteredDataSet);
    } else {
      setFilteredData(userTableDataSet);
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
            a.first_name > b.first_name
              ? 1
              : a.first_name < b.first_name
              ? -1
              : 0
          )
        );
        break;
      case 3:
        setFilteredData(
          [...filteredData].sort((a, b) =>
            a.last_name > b.last_name ? 1 : a.last_name < b.last_name ? -1 : 0
          )
        );
        break;
      default:
        break;
    }
  };

  const tableReset = () => {
    setFilteredData(userTableDataSet);
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
        <div className={[styles.controllPanel, styles.groupBtns].join(" ")}>
          <CustomButton
            buttonType={"CIRCLE_ACTIONS"}
            // buttonType={BUTTONTYPES.SQUAREICON}
            iconsLeft={<AddIcon size={12} color={"#FE5987"} />}
            onClick={() => {
              setModalType("ADD");
            }}
            optionalBackgroundColor={"#5585CC"}
          />
          <CustomButton
            buttonType={"CIRCLE_ACTIONS"}
            // buttonType={BUTTONTYPES.SQUAREICON}
            iconsLeft={<NotesIcon size={24} color={"#000000"} />}
            onClick={() => {
              setModalType("NOTE");
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
          <div>
            {
              <SearchTableData
                ref={resetSearchField}
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
                ref={resetFilters}
                filterOptions={filterOptions}
                getFilterOption={getFilterOption}
              />
            }
          </div>
        </div>
        <div className={styles.summeryTable}>{loadComponent()}</div>
        <div className={styles.stockTable}></div>
      </div>
      {modalType ? (
        modalType === "ADD" ? (
          <CustomModal open={setModalType} title={`Add User`}>
            <div className={styles.hospitalData}></div>
            <UserRegistrationForm
              User={selectedUser}
              isAllowedFullAccess={isAllowedFullAccess}
            />
          </CustomModal>
        ) : modalType === "NOTE" ? (
          <CustomModal open={setModalType} title={`Add Note`}>
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

export default UserManagement;
