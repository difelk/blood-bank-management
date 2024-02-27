import React, { useEffect, useState } from "react";
import styles from "./UserTable.module.scss";
import CustomButton from "../../customButton";
import ViewMoreIcon from "../../../../../assets/icons/svgs/ViewMore";
import CustomModal from "../../modal/CustomModal";
import UserForm from "./UserForm";

const UserTable = ({ tableHeader, dataset, actionType, isAllowedFullAccess }) => {
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
              <p>{item.first_name}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[2].width }}
            >
              <p>{item.last_name}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[3].width }}
            >
              <p>{item.contact_no}</p>
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
        <CustomModal open={setIsModalOpen} title={"User Details"} >
           <div className={styles.hospitalData}>
            <UserForm
              user={selectedUser}
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
export default UserTable;
