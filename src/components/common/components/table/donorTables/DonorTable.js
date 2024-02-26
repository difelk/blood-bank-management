import React, { useEffect, useState } from "react";
import styles from "./DonorTable.module.scss";
import CustomButton from "../../customButton";
import ViewMoreIcon from "../../../../../assets/icons/svgs/ViewMore";
import CustomModal from "../../modal/CustomModal";
import DonorForm from "./DonorForm";

const DonorTable = ({
  tableHeader,
  dataset,
  actionType,
  isAllowedFullAccess,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState({});

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
              <p>{item.bloodType}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[4].width }}
            >
              <CustomButton
                buttonType={"ICON"}
                iconsLeft={<ViewMoreIcon size={18} color={"#BBB6B4"} />}
                onClick={() => {
                  console.log("h");
                  setIsModalOpen(true);
                  setSelectedDonor(item);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {isModalOpen ? (
        <CustomModal open={setIsModalOpen} title={"Donor Details"}>
          <div className={styles.hospitalData}>
            <DonorForm
              donor={selectedDonor}
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
export default DonorTable;
