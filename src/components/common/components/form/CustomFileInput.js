import React, { useState } from "react";
import styles from "./CustomFileInput.module.scss";
import FileIcon from "../../../../assets/icons/svgs/FileIcon";

const CustomFileInput = ({ getCsvFile }) => {
  const [fileUploadError, setFileUploadError] = useState("");
  const [fileDetails, setFileDetails] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setFileUploadError("Please select a file.");
      return;
    }
    if (file.type !== "text/csv") {
      setFileUploadError(
        "Invalid file type. Only CSV files are allowed to be uploaded."
      );
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setFileUploadError("");
    setFileDetails({
      name: file.name,
      size: file.size,
      type: file.type,
    });

    getCsvFile(formData);
  };

  return (
    <div>
      <div className={styles.wrapFileUploader}>
        <p>Upload The CSV File In Here</p>
        <label htmlFor="fileUpload" className={styles.fileUploadLabl}>
          <FileIcon size={20} color={"#3A99F2"} />
        </label>
        <input
          type="file"
          id="fileUpload"
          name="fileUpload"
          onChange={(e) => handleFileUpload(e)}
        />

        {fileDetails && (
          <div>
            <p>File Name: {fileDetails.name}</p>
            <p>File Size: {fileDetails.size} bytes</p>
            <p>File Type: {fileDetails.type}</p>
          </div>
        )}
        {fileUploadError && (
          <span className={styles.erroronUpload}>{fileUploadError}</span>
        )}
      </div>
    </div>
  );
};

export default CustomFileInput;
