import React, { useEffect, useRef, useState } from "react";
import sectionStyles from "../dashboard/Dashboard.module.scss";
import styles from "./EventManagement.module.scss";
import CustomButton from "../../common/components/customButton";
import AddIcon from "../../../assets/icons/svgs/AddIcon";
import TabController from "../../common/components/tab/TabController";
import EventTable from "../../common/components/table/eventTables/EventTable";
import commonStyles from "../../../styles/common.module.scss";
import CustomModal from "../../common/components/modal/CustomModal";
import EventRegistrationForm from "../../../share/formComponents/eventRegistrationForm/EventRegistrationForm";
import EmptyMessage from "../../../share/empty/Empty";
import SearchTableData from "../../common/components/Filters/Search/SearchTableData";
import Filter from "../../common/components/Filters/Filter/Filter";

const eventTableHeader = [
  { name: "Event Name", width: "25%" },
  { name: "Date", width: "25%" },
  { name: "Location", width: "25%" },
  { name: "Status", width: "25%" },
  { name: "Actions", width: "25%" },
];

const filterOptions = [
  { key: 1, value: "Sort By Event Name" },
  { key: 2, value: "Sort By Date" },
  { key: 3, value: "Sort By Location" },
  { key: 4, value: "Sort By Status" },
];

const eventTableDataSet = [
  {
    event_name: "Event 3",
    start_date: "2024/01/08",
    venue: "Location 2",
    status: "In progress",
  },
  {
    event_name: "Event 4",
    start_date: "2023/12/24",
    venue: "Location 5",
    status: "Done",
  },
  {
    event_name: "Event 1",
    start_date: "2024/02/04",
    venue: "Location 1",
    status: "Hold",
  },
  {
    event_name: "Event 5",
    start_date: "2024/01/03",
    venue: "Location 3",
    status: "Pending",
  },
  {
    event_name: "Event 2",
    start_date: "2024/01/28",
    venue: "Location 4",
    status: "In progress",
  },
];

const tabs = [
  { key: 1, value: "Event Details" },
  // { key: 2, value: "Stock Details" },
];

const EventManagement = ({ selectedPage, isAllowedFullAccess }) => {
  const resetSearchField = useRef(null);
  const resetFilters = useRef(null);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [modalType, setModalType] = useState("");
  const [selectedEvent, setSelectedEvent] = useState({});
  const [isSearchHasValue, setSearchHasValue] = useState(false);
  const [filteredData, setFilteredData] = useState(eventTableDataSet);

  const loadComponent = () => {
    switch (selectedTab.key) {
      case 1:
        if (!filteredData.length) {
          return <EmptyMessage isSearchedValue={isSearchHasValue} />;
        } else {
          return (
            <EventTable
              dataset={filteredData}
              tableHeader={eventTableHeader}
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
            <EventTable
              dataset={filteredData}
              tableHeader={eventTableHeader}
              actionType={"VIEW"}
              isAllowedFullAccess={true}
            />
          );
        }
    }
  };

  const filterData = (searchValue) => {
    searchValue ? setSearchHasValue(true) : setSearchHasValue(false);
    const filteredDataSet = eventTableDataSet.filter(
      (value) =>
        value.event_name.toLocaleLowerCase().includes(searchValue) ||
        value.start_date.toLocaleLowerCase().includes(searchValue) ||
        value.venue.toLocaleLowerCase().includes(searchValue) ||
        value.status.toLocaleLowerCase().includes(searchValue)
    );
    if (filteredDataSet && searchValue) {
      setFilteredData(filteredDataSet);
    } else {
      setFilteredData(eventTableDataSet);
    }
  };

  const getFilterOption = (value) => {
    switch (value.key) {
      case 1:
        setFilteredData(
          [...filteredData].sort((a, b) =>
            a.event_name > b.event_name
              ? 1
              : a.event_name < b.event_name
              ? -1
              : 0
          )
        );
        break;
      case 2:
        setFilteredData(
          [...filteredData].sort((a, b) =>
            a.start_date > b.start_date
              ? 1
              : a.start_date < b.start_date
              ? -1
              : 0
          )
        );
        break;
      case 3:
        setFilteredData(
          [...filteredData].sort((a, b) =>
            a.venue > b.venue ? 1 : a.venue < b.venue ? -1 : 0
          )
        );
        break;
      case 4:
        setFilteredData(
          [...filteredData].sort((a, b) =>
            a.status > b.status ? 1 : a.status < b.status ? -1 : 0
          )
        );
        break;
      default:
        break;
    }
  };

  const tableReset = () => {
    setFilteredData(eventTableDataSet);
  };

  useEffect(() => {
    resetSearchField?.current?.handleResetFormSearch();
    resetFilters?.current?.resetFilter();
    tableReset();
  }, [selectedTab]);

  // console.log("isAllowedFullAccess - ", isAllowedFullAccess);

  return (
    <div className={sectionStyles.sectionStyles}>
      <div className={sectionStyles.dashboardTitle}>
        <h4>{selectedPage}</h4>
      </div>
      <div className={styles.stockMngWrapper}>
        <div className={commonStyles.controllPanel}>
          <CustomButton
            buttonType={"CIRCLE_ACTIONS"}
            // buttonType={BUTTONTYPES.SQUAREICON}
            iconsLeft={<AddIcon size={12} color={"#FE5987"} />}
            onClick={() => setModalType("ADD")}
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

      {modalType ? (
        modalType === "ADD" ? (
          <CustomModal open={setModalType} title={`Add Event`}>
            <div className={styles.hospitalData}></div>
            <EventRegistrationForm
              event={selectedEvent}
              isAllowedFullAccess={isAllowedFullAccess}
            />
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

export default EventManagement;
