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

const eventTableHeader = [
  { name: "Event Name", width: "25%" },
  { name: "Date", width: "25%" },
  { name: "Location", width: "25%" },
  { name: "Actions", width: "25%" },
];

const eventTableDataSet = [
  { eventName: "Event 1", date: "2024/01/03", location: "Location 1" },
  { eventName: "Event 2", date: "2024/01/03", location: "Location 2" },
  { eventName: "Event 3", date: "2024/01/03", location: "Location 3" },
  { eventName: "Event 4", date: "2024/01/03", location: "Location 4" },
  { eventName: "Event 5", date: "2024/01/03", location: "Location 5" },
];

const tabs = [
  { key: 1, value: "Event Details" },
  // { key: 2, value: "Stock Details" },
];

const EventManagement = ({ selectedPage, isAllowedFullAccess }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [modalType, setModalType] = useState("");
  const [selectedEvent, setSelectedEvent] = useState({});

  const loadComponent = () => {
    switch (selectedTab.key) {
      case 1:
        return (
          <EventTable
            dataset={eventTableDataSet}
            tableHeader={eventTableHeader}
            actionType={"VIEW"}
          />
        );
      default:
        return (
          <EventTable
            dataset={eventTableDataSet}
            tableHeader={eventTableHeader}
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
            // buttonType={BUTTONTYPES.SQUAREICON}
            iconsLeft={<AddIcon size={12} color={"#FE5987"} />}
            onClick={() =>  setModalType("ADD")}
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
          <CustomModal open={setModalType} title={`Add Event`} height={"450px"}>
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
