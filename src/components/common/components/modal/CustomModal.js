import React, { useEffect, useState } from "react";
import styles from "./CustomModal.module.scss";
import CustomButton from "../customButton";
import CloseIcon from "../../../../assets/icons/svgs/Close";

const CustomModal = ({ children, title, open, width, height }) => {
  return (
    <>
      <div className={styles.grayWrapper} />
      <div
        className={styles.modalWrapper}
        style={{ width: width, height: height }}
      >
        <div className={styles.modalTitle}>
          <h3>{title ?? "modal"}</h3>
          <CustomButton
            buttonType={"CLOSE"}
            iconsLeft={<CloseIcon size={15} color={"#7b7a7a"} />}
            active={true}
            onClick={() => open(false)}
          />
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </>
  );
};
export default CustomModal;
