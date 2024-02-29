import React, { useEffect, useState } from "react";
import styles from "./UserTable.module.scss";
import CustomButton from "../../customButton";
import ViewMoreIcon from "../../../../../assets/icons/svgs/ViewMore";
import CustomModal from "../../modal/CustomModal";
import UserForm from "./UserForm";

const UserActivtiesListTable = ({
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
              <p>{item.activity}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[1].width }}
            >
              <p>{item.date}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[2].width }}
            >
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen ? (
        <CustomModal open={setIsModalOpen} title={"User Activities"}>
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
export default UserActivtiesListTable;
