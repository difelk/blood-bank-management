import React, { useEffect, useState } from "react";
import styles from "./EventTable.module.scss";
import CustomButton from "../../customButton";
import ViewMoreIcon from "../../../../../assets/icons/svgs/ViewMore";
import CustomModal from "../../modal/CustomModal";
import EventForm from "./EventForm";

const EventTable = ({
  tableHeader,
  dataset,
  actionType,
  isAllowedFullAccess,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});

  const ScrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    ScrollToTopButton();
  }, [isModalOpen]);

  const getStatus = (status) => {
    switch (status) {
      case "In progress":
        return styles.inProgress;
      case "Done":
        return styles.done;
      case "Pending":
        return styles.pending;
      case "Hold":
        return styles.hold;
      default:
        return styles.pending;
    }
  };

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.tableHeader}>
        {tableHeader.map((header, index) => (
          <div
            className={styles.tableHeaderItem}
            style={{ width: header.width }}
            key={index}
          >
            <p>{header.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.tableBody}>
        {dataset.map((item, index) => (
          <div className={styles.tableData} key={index}>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[0].width }}
            >
              <p>{item.event_name}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[1].width }}
            >
              <p>{item.start_date}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[2].width }}
            >
              <p>{item.venue}</p>
            </div>

            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[3].width }}
            >
              <div className={styles.statusBar}>
                <p className={getStatus(item.status)}>{item.status}</p>
              </div>
            </div>

            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[4].width }}
            >
              <CustomButton
                buttonType={"ICON"}
                iconsLeft={<ViewMoreIcon size={18} color={"#BBB6B4"} />}
                onClick={() => {
                  setIsModalOpen(true);
                  setSelectedEvent(item);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {isModalOpen ? (
        <CustomModal open={setIsModalOpen} title={"Event Details"}>
          <div className={styles.hospitalData}>
            <EventForm
              event={selectedEvent}
              isAllowedFullAccess={isAllowedFullAccess}
            />
          </div>
        </CustomModal>
      ) : (
        ""
      )}
    </div>
  );
};
export default EventTable;
