import React, { useState } from "react";
import CustomButton from "../../common/components/customButton";
import FileIcon from "../../../assets/icons/svgs/FileIcon";
import CustomeFileInput from "../../common/components/form/CustomFileInput";
import donorService from "../../../api/services/donorService";
import styles from "./DonorManagement.module.scss";
import modalStyle from "../../../components/common/components/modal/CustomModal.module.scss";
import AlertBox from "../../../share/Alerts/AlertBox";
const DonorUploadCSV = ({ formChanged }) => {
  const [csvFile, setCsvFile] = useState(null);
  const [alertMsg, setAlertMsg] = useState({});

  const handleSubmit = async () => {
    console.log("handleSubmit ");
    if (csvFile) {
      try {
        const response = await donorService.sendCSVDonors(csvFile);
        console.log("response - ", response);
        if (response.status !== 200) {
          setAlertMsg({
            type: "ERROR",
            message: "Failed to upload file.",
            display: true,
          });
          throw new Error("Failed to upload file.");
        } else {
          setAlertMsg({
            type: "SUCCESS",
            message: "File upload successful",
            display: true,
          });
        }
      } catch (error) {
        setAlertMsg({
          type: "ERROR",
          message: "ERROR : " + error,
          display: true,
        });
        console.error("Error uploading file:", error);
        // setFileUploadError("Error uploading file. Please try again.");
        // setFileDetails(null);
      } finally {
        formChanged();
      }
    }
  };

  return (
    <div>
      <div className={modalStyle.alertBoxWrapper}>
        <AlertBox
          type={alertMsg.type}
          message={alertMsg.message}
          display={alertMsg.display}
        />
      </div>
      <CustomeFileInput getCsvFile={setCsvFile} />
      <div className={styles.saveBtnWrapper}>
        <CustomButton
          buttonText={"Save"}
          buttonType={"submit"}
          isDisabled={!csvFile}
          active={true}
          onClick={() => handleSubmit()}
        />
      </div>
    </div>
  );
};

export default DonorUploadCSV;
