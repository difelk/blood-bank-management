import React, { useEffect, useState } from "react";
import styles from "./AttachmentModal.module.scss";
import CustomButton from "../../customButton";
import CloseIcon from "../../../../../assets/icons/svgs/Close";
import PDFIcon from "../../../../../assets/icons/svgs/PDFIcon";
import EyeIcon from "../../../../../assets/icons/svgs/EyeIcon";
import DeleteIcon from "../../../../../assets/icons/svgs/DeleteIcon";
import AttachmentIcon from "../../../../../assets/icons/svgs/AttachmentIcon";

const AttachmentModal = ({
  height,
  width,
  headerTitle,
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
          <h6>{headerTitle ?? "File Upload"}</h6>
          <CustomButton
            buttonType={"CLOSE"}
            iconsLeft={<CloseIcon size={15} color={"#7b7a7a"} />}
            active={true}
            onClick={() => setModalVisibility(false)}
          />
        </div>
        <div className={styles.body}>
          <div className={styles.uploadedFiles}>
            <div className={styles.fileItem}>
              <div className={styles.fileIcon}>
                <PDFIcon size={30} />
              </div>
              <div className={styles.fileDescription}>
                <p className={styles.fileName}>
                  Request Approvel For Asiri Hospital
                </p>
                <p className={styles.fileSize}>File Size: 115.52Kb</p>
              </div>
              <div className={styles.fileController}>
                <CustomButton
                  buttonType={"ICON"}
                  iconsLeft={<EyeIcon color={"#949494"} />}
                />
                <CustomButton
                  buttonType={"ICON"}
                  iconsLeft={<DeleteIcon color={"#949494"} />}
                />
              </div>
            </div>

            <div className={styles.fileItem}>
              <div className={styles.fileIcon}>
                <PDFIcon size={30} />
              </div>
              <div className={styles.fileDescription}>
                <p className={styles.fileName}>
                  Request Approvel For Asiri Hospital by BCN
                </p>
                <p className={styles.fileSize}>File Size: 115.52Kb</p>
              </div>
              <div className={styles.fileController}>
                <CustomButton
                  buttonType={"ICON"}
                  iconsLeft={<EyeIcon color={"#949494"} />}
                />
                <CustomButton
                  buttonType={"ICON"}
                  iconsLeft={<DeleteIcon color={"#949494"} />}
                />
              </div>
            </div>
          </div>
          <div className={styles.fileUploaderBtnWrp}>
            <input
              type="file"
              id="fileUpload"
              className={styles.UploadBtn}
              style={{ opacity: 0 }}
            />
            <div className={styles.uploadIcon}>
              <AttachmentIcon size={30} color={"#3D95EA"} />
              <span>Upload File</span>
            </div>
          </div>
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
export default AttachmentModal;
