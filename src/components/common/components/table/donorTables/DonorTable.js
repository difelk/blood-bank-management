import React, { useEffect, useState } from "react";
import styles from "./DonorTable.module.scss";
import CustomButton from "../../customButton";
import ViewMoreIcon from "../../../../../assets/icons/svgs/ViewMore";
import CustomModal from "../../modal/CustomModal";
import DonorForm from "./DonorForm";
import HistoryIcon from "../../../../../assets/icons/svgs/HistoryIcon";
import ClassicTable from "../classicTable/ClassicTable";

const donorHistorytableHeader = [
  { name: "Stock ID", width: "20%" },
  { name: "Donation Type", width: "20%" },
  { name: "Event Name", width: "20%" },
  { name: "Date", width: "20%" },
  { name: "Qty", width: "20%" },
];

const DonorTable = ({
  tableHeader,
  dataset,
  actionType,
  isAllowedFullAccess,
}) => {
  const [modalType, setModalType] = useState("");
  const [selectedDonor, setSelectedDonor] = useState({});

  const ScrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (modalType) {
      ScrollToTopButton();
    }
  }, [modalType]);

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
                  setModalType("VIEW");
                  setSelectedDonor(item);
                }}
              />
              <div />
              <CustomButton
                buttonType={"ICON"}
                iconsLeft={<HistoryIcon size={20} color={"#BBB6B4"} />}
                onClick={() => {
                  setModalType("HISTORY");
                  setSelectedDonor(item);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {modalType === "VIEW" ? (
        <CustomModal open={setModalType} title={"Donor Details"}>
          <div className={styles.hospitalData}>
            <DonorForm
              donor={selectedDonor}
              isAllowedFullAccess={isAllowedFullAccess}
            />
          </div>
        </CustomModal>
      ) : modalType === "HISTORY" ? (
        <CustomModal
          open={setModalType}
          title={selectedDonor.firstName + " " + selectedDonor.lastName}
          width={600}
        >
          <div className={styles.hospitalData}>
            <ClassicTable
              tableHeader={donorHistorytableHeader}
              dataset={[]}
              getSelected={() => {}}
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
