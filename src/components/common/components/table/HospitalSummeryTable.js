import React from "react";
import styles from "./HospitalSummeryTable.module.scss";
import CustomButton from "../customButton";
import ViewMoreIcon from "../../../../assets/icons/svgs/ViewMore";

const HospitalSummeryTable = ({ tableHeaders, datasets, actions }) => {
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
        <div className={styles.tableHeaderItem} style={{ width: "25%" }}>
          <p>Hospital Name</p>
        </div>
        <div className={styles.tableHeaderItem} style={{ width: "18%" }}>
          <p>Location</p>
        </div>
        <div className={styles.tableHeaderItem} style={{ width: "40%" }}>
          <p>Stock(%)</p>
        </div>
        <div className={styles.tableHeaderItem} style={{ width: "14%" }}>
          <p>Actions</p>
        </div>
      </div>
      <div className={styles.tableBody}>
        {datasets.map((item, index) => (
          <div className={styles.tableData}>
            <div className={styles.tableDataItem} style={{ width: "25%" }}>
              <p>{item.hospitalName}</p>
            </div>
            <div className={styles.tableDataItem} style={{ width: "18%" }}>
              <p>{item.city}</p>
            </div>
            <div
              className={[styles.tableDataItem, styles.groupDataItems].join(
                " "
              )}
              style={{ width: "40%" }}
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
            <div className={styles.tableDataItem} style={{ width: "14%" }}>
              <CustomButton
                buttonType={"ICON"}
                iconsLeft={<ViewMoreIcon size={18} color={"#BBB6B4"} />}
                onClick={() => console.log("clicked")}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalSummeryTable;