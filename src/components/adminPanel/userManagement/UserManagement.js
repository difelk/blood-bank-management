import React, { useState, useRef, useEffect } from "react";
import sectionStyles from "../dashboard/Dashboard.module.scss";
import styles from "./UserManagement.module.scss";
import CustomButton from "../../common/components/customButton";
import AddIcon from "../../../assets/icons/svgs/AddIcon";
import TabController from "../../common/components/tab/TabController";
import UserTable from "../../common/components/table/userTables/UserTable";
import CustomModal from "../../common/components/modal/CustomModal";
import UserRegistrationForm from "../../../share/formComponents/userRegistrationForm/UserRegistrationForm";
import EmptyMessage from "../../../share/empty/Empty";
import UserActivitiesTable from "../../common/components/table/userTables/UserActivitiesTable";
import commonStyles from "../../../styles/common.module.scss";
import SearchTableData from "../../common/components/Filters/Search/SearchTableData";
import Filter from "../../common/components/Filters/Filter/Filter";
import UserService from "../../../api/services/userService";

const userTableHeader = [
  { name: "NIC", width: "18%" },
  { name: "First Name", width: "12%" },
  { name: "Last Name", width: "12%" },
  { name: "Contact No", width: "18%" },
  { name: "Role", width: "12%" },
  { name: "Organization", width: "20%" },
  { name: "Actions", width: "12%" },
];

const filterOptions = [
  { key: 1, value: "Sort By NIC" },
  { key: 2, value: "Sort By First name" },
  { key: 3, value: "Sort By Last name" },
  { key: 4, value: "Sort By Role" },
  { key: 5, value: "Sort By Organization" },
];

const userActivityTableHeader = [
  { name: "NIC", width: "25%" },
  { name: "UserName", width: "25%" },
  { name: "UserRole", width: "25%" },
  { name: "Organization", width: "25%" },
  { name: "Actions", width: "25%" },
];
const userActivityTableDataSet = [];

const tabs = [
  { key: 1, value: "User Details" },
  { key: 2, value: "User Activities" },
];

const UserManagement = ({ selectedPage, isAllowedFullAccess }) => {
  const resetSearchField = useRef(null);
  const resetFilters = useRef(null);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [modalType, setModalType] = useState("");
  const [selectedUser, setSelectedUser] = useState({});
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [isSearchHasValue, setSearchHasValue] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const getUsers = async () => {
    setIsloading(true);
    try {
      const respond = await UserService.getAllUsers();
      setFilteredData(respond);
      setData(respond);
    } catch (e) {
      console.log("error - ", e);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const formChanged = () => {
    console.log("called the user management back");
    getUsers();
  };

  const loadComponent = () => {
    switch (selectedTab.key) {
      case 1:
        if (!filteredData || !filteredData.length) {
          return <EmptyMessage isSearchedValue={isSearchHasValue} />;
        } else {
          return (
            <UserTable
              dataset={filteredData}
              tableHeader={userTableHeader}
              actionType={"VIEW"}
              isAllowedFullAccess={true}
              formChanged={formChanged}
            />
          );
        }
      case 2:
        if (!userActivityTableDataSet.length) {
          return <EmptyMessage isSearchedValue={isSearchHasValue} />;
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
          return <EmptyMessage isSearchedValue={isSearchHasValue} />;
        } else {
          return (
            <UserTable
              dataset={filteredData}
              tableHeader={userTableHeader}
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
        (value.nic && value.nic.toLocaleLowerCase().includes(searchValue)) ||
        (value.firstName &&
          value.firstName.toLocaleLowerCase().includes(searchValue)) ||
        (value.lastName &&
          value.lastName.toLocaleLowerCase().includes(searchValue)) ||
        (value.role && value.role.toLocaleLowerCase().includes(searchValue)) ||
        (value.organizationType &&
          value.organizationType.toLocaleLowerCase().includes(searchValue))
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
            a.role > b.role ? 1 : a.role < b.role ? -1 : 0
          )
        );
        break;
      case 5:
        setFilteredData(
          [...filteredData].sort((a, b) =>
            a.organizationType > b.organizationType
              ? 1
              : a.organizationType < b.organizationType
              ? -1
              : 0
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
          {/* <CustomButton
            buttonType={"CIRCLE_ACTIONS"}
            // buttonType={BUTTONTYPES.SQUAREICON}
            iconsLeft={<NotesIcon size={24} color={"#000000"} />}
            onClick={() => {
              setModalType("NOTE");
            }}
          /> */}
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
                disabledSearch={!filteredData || isLoading}
              />
            }
          </div>
          {filteredData && !isLoading ? (
            <div>
              {
                <Filter
                  ref={resetFilters}
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
        modalType === "ADD" ? (
          <CustomModal open={setModalType} title={`Add User`}>
            <div className={styles.hospitalData}></div>
            <UserRegistrationForm
              User={selectedUser}
              isAllowedFullAccess={isAllowedFullAccess}
              formChanged={formChanged}
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
