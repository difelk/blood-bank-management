import React, { useEffect, useState } from "react";
import styles from "./UserTable.module.scss";
import CustomButton from "../../customButton";
import ViewMoreIcon from "../../../../../assets/icons/svgs/ViewMore";
import CustomModal from "../../modal/CustomModal";
import UserForm from "./UserForm";
import NextIcon from "../../../../../assets/icons/svgs/NextIcon";
import PreviousIcon from "../../../../../assets/icons/svgs/PreviousIcon";

const UserTable = ({
  tableHeader,
  dataset,
  actionType,
  isAllowedFullAccess,
  formChanged,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [showDataSet, setShowDataSet] = useState([]);
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [paginationStat, setPaginationStat] = useState({
    startingPosition: 0,
    endPosition: 5,
  });

  const ScrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    ScrollToTopButton();
  }, [isModalOpen]);

  useEffect(() => {
    setShowDataSet(dataset);
    handleDataShow(0, 5);
    setPaginationNumber(1);
    setPaginationStat({
      startingPosition: 0,
      endPosition: 5,
    });
  }, [dataset]);

  const handlePagination = (values) => {
    if (values === 1) {
      setPaginationStat((prevState) => ({
        ...prevState,
        startingPosition: prevState.startingPosition + 5,
        endPosition: prevState.endPosition + 5,
      }));
    } else if (values === -1) {
      setPaginationStat((prevState) => ({
        ...prevState,
        startingPosition: prevState.startingPosition - 5,
        endPosition: prevState.endPosition - 5,
      }));
    }

    setPaginationNumber((prev) => prev + values);
  };

  useEffect(() => {
    handleDataShow(paginationStat.startingPosition, paginationStat.endPosition);
  }, [paginationStat]);

  const handleDataShow = (starting, end) => {
    console.log("starting - ", starting);
    console.log("end - ", end);
    let newDataSet = [];
    for (let i = starting; i < end; i++) {
      if (dataset[i]) {
        newDataSet.push(dataset[i]);
      }
    }

    setShowDataSet(newDataSet);
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
        {showDataSet.map((item, index) => (
          <div className={styles.tableData} key={index}>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[0].width }}
              key={index}
            >
              <p>{item.nic}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[1].width }}
            >
              <p>{item.firstName}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[2].width }}
            >
              <p>{item.lastName}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[3].width }}
            >
              <p>{item.contactNo}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[4].width }}
            >
              <p>{item.role}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[5].width }}
            >
              <p>{item.organizationType}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[6].width }}
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
        <CustomModal open={setIsModalOpen} title={"User Details"}>
          <div className={styles.hospitalData}>
            <UserForm
              user={selectedUser}
              isAllowedFullAccess={isAllowedFullAccess}
              formChanged={formChanged}
            />
          </div>
        </CustomModal>
      ) : (
        ""
      )}
      <div className={styles.paginationWrapper}>
        <button
          className={styles.nextprevPagbtns}
          onClick={() => handlePagination(-1)}
          disabled={paginationNumber <= 1}
        >
          <PreviousIcon
            size={25}
            color={paginationNumber <= 1 ? "#BBB6B4" : "#2196F3"}
          />
        </button>
        <div
          // onClick={() => handlePagination()}
          className={styles.paginationNumberDisplay}
        >
          {paginationNumber}
        </div>
        <button
          className={styles.nextprevPagbtns}
          onClick={() => handlePagination(1)}
          disabled={dataset.length / 5 < paginationNumber}
        >
          <NextIcon
            size={25}
            color={
              dataset.length / 5 < paginationNumber ? "#BBB6B4" : "#2196F3"
            }
          />
        </button>
      </div>
    </div>
  );
};
export default UserTable;
