import React, { useEffect, useState } from "react";
import styles from "./NoteModal.module.scss";
import CustomButton from "../../customButton";
import CloseIcon from "../../../../../assets/icons/svgs/Close";

const NoteModal = ({
  height,
  width,
  noteTile,
  modalVisibility,
  setModalVisibility,
  getNoteValue,
}) => {
  return (
    <div style={{ display: !modalVisibility ? "none" : "" }}>
      <div className={styles.grayWrapper} />
      <div
        className={styles.wrapperComp}
        style={{ height: height ?? "", width: width ?? "" }}
      >
        <div className={styles.header}>
          <h6>{noteTile ?? "Note"}</h6>
          <CustomButton
            buttonType={"CLOSE"}
            iconsLeft={<CloseIcon size={15} color={"#7b7a7a"} />}
            active={true}
            onClick={() => setModalVisibility(false)}
          />
        </div>
        <div className={styles.body}>
          <textarea
            id="noteText"
            name="noteText"
            rows="5"
            cols="60"
            onChange={(e) => getNoteValue(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.footer}>
          <CustomButton
            buttonText={"Close"}
            buttonType={"PREV"}
            isDisabled={false}
            active={true}
            onClick={() => setModalVisibility(false)}
          />
          <CustomButton
            buttonText={"Save"}
            buttonType={"submit"}
            isDisabled={false}
            active={true}
            onClick={() => console.log("note close cliked!")}
          />
        </div>
      </div>
    </div>
  );
};
export default NoteModal;
