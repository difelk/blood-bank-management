import React, { useEffect, useState } from "react";
import styles from "./HospitalsTable.module.scss";
import CustomButton from "../../customButton";
import ViewMoreIcon from "../../../../../assets/icons/svgs/ViewMore";
import CustomModal from "../../modal/CustomModal";

const HospitalsTable = ({ tableHeader, dataset, actions }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState({});

  const ScrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    ScrollToTopButton();
  }, [isModalOpen]);

  const getStatusColor = (value) => {
    if (value <= 20) {
      return styles.codeRed;
    } else if (value > 20 && value <= 40) {
      return styles.codeOrange;
    } else if (value > 40 && value <= 60) return styles.codeBlue;
    else if (value > 60 && value < 80) {
      return styles.codeLightBlue;
    } else {
      return styles.codeIdeal;
    }
  };
  /*
 APLUS: 65,
      AMINUS: 80,
      BPLUS: 60,
      BMINUS: 70,
      OPLUS: 30,
      OMINUS: 40,
      ABPLUS: 35,
      ABMINUS: 65,
*/
  const getBloodType = (value) => {
    switch (value) {
      case "APLUS":
        return "A+";
      case "AMINUS":
        return "A-";
      case "BPLUS":
        return "B+";
      case "BMINUS":
        return "B-";
      case "OPLUS":
        return "0+";
      case "OMINUS":
        return "0-";
      case "ABPLUS":
        return "AB+";
      case "ABMINUS":
        return "AB-";
      default:
        return value;
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
              <p>{item.hospitalName}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[1].width }}
            >
              <p>{item.city}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[2].width }}
            >
              {Object.keys(item.stock).map((bloodGroup, subIndex) => (
                <p
                  className={[
                    styles.groupdataItem,
                    getStatusColor(item.stock[bloodGroup]),
                  ].join(" ")}
                >
                  {getBloodType(bloodGroup)} {item.stock[bloodGroup]}
                </p>
              ))}
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
                  setSelectedHospital(item);
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {isModalOpen ? (
        <CustomModal open={setIsModalOpen} title={"Hospital Details"}>
          <div className={styles.hospitalData}>
            <div className={styles.hospitalBasicData}>
              <div className={styles.dflexRow}>
                <p>Name:</p>
                <p>{selectedHospital.hospitalName}</p>
              </div>
              <div className={styles.dflexRow}>
                <p>address:</p>
                <p>{selectedHospital.city}</p>
              </div>
              <div className={styles.dflexRow}>
                <p>contact No:</p>
                <p>(+94) 7845874</p>
              </div>
            </div>
            <div className={styles.hospitalBasicData}>
              {Object.keys(selectedHospital.stock).map(
                (bloodGroup, subIndex) => (
                  <div className={styles.dflexRow}>
                    <p>Blood Group {getBloodType(bloodGroup)}</p>
                    <p>{selectedHospital.stock[bloodGroup]}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </CustomModal>
      ) : (
        ""
      )}
    </div>
  );
};

export default HospitalsTable;
