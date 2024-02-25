import React, { useEffect, useState } from "react";
import styles from "./StockSummaryTable.module.scss";
import CustomButton from "../../customButton";
import ViewMoreIcon from "../../../../../assets/icons/svgs/ViewMore";
import CustomModal from "../../modal/CustomModal";

const StockSummaryTable = ({ tableHeader, dataset, actionType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

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
              <p>{item.bloodGroup}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[1].width }}
            >
              <p>{item.lastUpdated}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[2].width }}
            >
              <p>{item.total}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[3].width }}
            >
              <CustomButton
                buttonType={"ICON"}
                iconsLeft={<ViewMoreIcon size={18} color={"#BBB6B4"} />}
                onClick={() => {
                  setIsModalOpen(true);
                  setSelectedItem(item);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {console.log("selectedItem - ", selectedItem)}
      {isModalOpen ? (
        <CustomModal
          open={setIsModalOpen}
          title={`Blood Group ${selectedItem.bloodGroup}`}
        >
          <div className={styles.hospitalData}>
            <div className={styles.hospitalBasicData}>
              <div className={styles.dflexRow}>
                <p>Blood Group:</p>
                <p>{selectedItem.bloodGroup}</p>
              </div>
              {/* <div className={styles.dflexRow}>
                <p>address:</p> */}
              {/* <p>{selectedHospital.bloodGroup}</p> */}
              {/* </div>
              <div className={styles.dflexRow}>
                <p>contact No:</p>
                <p>(+94) 7845874</p>
              </div> */}
            </div>
            <div className={styles.hospitalBasicData}>
              need to get stocks from Blood Group {selectedItem.bloodGroup} and
              map in here!
              {/* {Object.keys(selectedHospital.stock).map(
                (bloodGroup, subIndex) => (
                  <div className={styles.dflexRow}>
                    <p>Blood Group</p>
                    <p>{selectedHospital.stock[bloodGroup]}</p>
                  </div>
                )
              )} */}
            </div>
          </div>
        </CustomModal>
      ) : (
        ""
      )}
    </div>
  );
};
export default StockSummaryTable;
