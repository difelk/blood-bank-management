import React from "react";
import styles from "./Empty.module.scss";
import emptyImg from "../../assets/img/empty.png";

const EmptyMessage = ({ heading, subtext, isSearchedValue }) => {
  return (
    <div className={styles.emptyMsgWrapper}>
      <div className={styles.emptyImg}>
        <img src={emptyImg} alt="empty" />
      </div>
      <div className={styles.emptyText}>
        <h5>{heading ?? "No Data Found"}</h5>
        <p>
          {isSearchedValue
            ? "There is no matching data according to your search."
            : subtext ?? "There is no data available for this table."}
        </p>
      </div>
    </div>
  );
};
export default EmptyMessage;
