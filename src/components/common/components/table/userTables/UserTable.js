import React, { useEffect, useState } from "react";
import styles from "./UserTable.module.scss";
import CustomButton from "../../customButton";
import ViewMoreIcon from "../../../../../assets/icons/svgs/ViewMore";
import CustomModal from "../../modal/CustomModal";

const UserTable = ({ tableHeader, dataset, actionType }) => {
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

  console.log("tableHeader - ", tableHeader);

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.tableHeader}>
        {tableHeader.map((header) => (
          <div
            className={styles.tableHeaderItem}
            style={{ width: header.width }}
          >
            <p>{header.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.tableBody}>
        {dataset.map((item, index) => (
          <div className={styles.tableData}>
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
              <p>{item.name}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[2].width }}
            >
              <p>{item.contactNo}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[3].width }}
            >
              <CustomButton
                buttonType={"ICON"}
                iconsLeft={<ViewMoreIcon size={18} color={"#BBB6B4"} />}
                onClick={() => {
                  console.log("h");
                  setIsModalOpen(true);
                  setSelectedUser(item);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {isModalOpen ? (
        <CustomModal open={setIsModalOpen} title={"User Details"}>
          <div className={styles.hospitalData}>
            <div className={styles.hospitalBasicData}>
              <div className={styles.dflexRow}>
                <p>NIC:</p>
                <p>{selectedUser.nic}</p>
              </div>
              <div className={styles.dflexRow}>
                <p>Name:</p>
                <p>{selectedUser.name}</p>
              </div>
              <div className={styles.dflexRow}>
              <p>Contact No:</p>
                <p>{selectedUser.contactNo}</p>
              </div>
              <div className={styles.dflexRow}>
              <p>Priviledge:</p>
                <p>Admin</p>
              </div>
            </div>
            {/* <div className={styles.hospitalBasicData}>
              {Object.keys(selectedUser.stock).map((bloodGroup, subIndex) => (
                <div className={styles.dflexRow}>
                  <p>Blood Group</p>
                  <p>{selectedUser.stock[bloodGroup]}</p>
                </div>
              ))}
            </div> */}
          </div>
        </CustomModal>
      ) : (
        ""
      )}
    </div>
  );
};
export default UserTable;