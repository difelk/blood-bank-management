import React, { useEffect, useState } from "react";
import styles from "./UserTable.module.scss";
import CustomButton from "../../customButton";
import ViewMoreIcon from "../../../../../assets/icons/svgs/ViewMore";
import CustomModal from "../../modal/CustomModal";
import UserActivtiesListTable from "./UserActivtiesListTable";

const activitytableHeader = [
  { name: "Activity Name", width: "25%" },
  { name: "Date", width: "25%" },
  { name: "Description", width: "50%" },
];

const UserActivitiesTable = ({
  tableHeader,
  dataset,
  actionType,
  isAllowedFullAccess,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const ScrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    ScrollToTopButton();
  }, [isModalOpen]);

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
              <p>{item.nic}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[1].width }}
            >
              <p>{item.username}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[2].width }}
            >
              <p>{item.role}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[3].width }}
            >
              <p>{item.organization}</p>
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
                  setSelectedUser(item);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {isModalOpen ? (
        <CustomModal
          open={setIsModalOpen}
          title={`User ${selectedUser.nic} Activities`}
        >
          <div className={styles.hospitalData}>
            <UserActivtiesListTable
              dataset={[]}
              tableHeader={activitytableHeader}
              actionType={"VIEW"}
              isAllowedFullAccess={true}
            />
          </div>
        </CustomModal>
      ) : (
        ""
      )}
    </div>
  );
};
export default UserActivitiesTable;
