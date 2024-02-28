import React, { useState } from "react";
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
    eventName: "Event 3",
    date: "2024/01/08",
    location: "Location 2",
    status: "In progress",
  },
  {
    eventName: "Event 4",
    date: "2023/12/24",
    location: "Location 5",
    status: "Done",
  },
  {
    eventName: "Event 1",
    date: "2024/02/04",
    location: "Location 1",
    status: "Hold",
  },
  {
    eventName: "Event 5",
    date: "2024/01/03",
    location: "Location 3",
    status: "Pending",
  },
  {
    eventName: "Event 2",
    date: "2024/01/28",
    location: "Location 4",
    status: "In progress",
  },
];

const tabs = [
  { key: 1, value: "Event Details" },
  // { key: 2, value: "Stock Details" },
];

const EventManagement = ({ selectedPage, isAllowedFullAccess }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [modalType, setModalType] = useState("");
  const [selectedEvent, setSelectedEvent] = useState({});
  const [filteredData, setFilteredData] = useState(eventTableDataSet);

  const loadComponent = () => {
    switch (selectedTab.key) {
      case 1:
        if (!filteredData.length) {
          return <EmptyMessage />;
        } else {
          return (
            <EventTable
              dataset={filteredData}
              tableHeader={eventTableHeader}
              actionType={"VIEW"}
            />
          );
        }
      default:
        if (!filteredData.length) {
          return <EmptyMessage />;
        } else {
          return (
            <EventTable
              dataset={filteredData}
              tableHeader={eventTableHeader}
              actionType={"VIEW"}
            />
          );
        }
    }
  };

  const filterData = (searchValue) => {
    const filteredDataSet = eventTableDataSet.filter(
      (value) =>
        value.eventName.toLocaleLowerCase().includes(searchValue) ||
        value.date.toLocaleLowerCase().includes(searchValue) ||
        value.location.toLocaleLowerCase().includes(searchValue) ||
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
            a.eventName > b.eventName ? 1 : a.eventName < b.eventName ? -1 : 0
          )
        );
        break;
      case 2:
        setFilteredData(
          [...filteredData].sort((a, b) =>
            a.date > b.date ? 1 : a.date < b.date ? -1 : 0
          )
        );
        break;
      case 3:
        setFilteredData(
          [...filteredData].sort((a, b) =>
            a.location > b.location ? 1 : a.location < b.location ? -1 : 0
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
          <CustomModal open={setModalType} title={`Add Event`} height={"500px"}>
            <div className={styles.hospitalData}></div>
            <EventRegistrationForm
              Event={selectedEvent}
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
