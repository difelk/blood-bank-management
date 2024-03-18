import React from "react";
import styles from "./Popups.module.scss";
const DeletePopUp = ({ popupMessage, subMessage, isActionProceed }) => {
  return (
    <div className={styles.deletePopUpWrapper}>
      <p>{popupMessage ?? "are you sure you want to delet this record ?"}</p>
      <span>
        {subMessage ??
          'if you click "yes" this record will delete permently from the database'}
      </span>
      <div className={styles.confirmationBtnsWrapper}>
        <button
          type="button"
          className={styles.btnTypeNo}
          onClick={() => isActionProceed(false)}
        >
          No
        </button>
        <button
          type="button"
          className={styles.btnTypeYes}
          onClick={() => isActionProceed(true)}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default DeletePopUp;
