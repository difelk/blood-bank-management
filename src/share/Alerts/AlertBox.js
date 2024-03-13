import React, { useEffect, useState } from "react";
import styles from "./AlertBox.module.scss";
import SuccessIcon from "../../assets/icons/svgs/SuccessIcon";
import CloseIcon from "../../assets/icons/svgs/Close";
import ErrorIcon from "../../assets/icons/svgs/ErrorIcon";

const AlertBox = ({ type, message, display }) => {
  const [alertDetails, setAlertDetails] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const getAlertIcon = () => {
    switch (type) {
      case "SUCCESS":
        setAlertDetails({
          class: styles.success,
          icon: <SuccessIcon color={"#07B505"} size={25} />,
          text: message,
        });
        break;
      case "ERROR":
        setAlertDetails({
          class: styles.error,
          icon: <ErrorIcon color={"#EB0701"} size={25} />,
          text: message,
        });
        break;
      default:
        setAlertDetails({});
        break;
    }
  };

  useEffect(() => {
    setShowAlert(display);
    getAlertIcon();
  }, [type, message, display]);

  return (
    <>
      {showAlert ? (
        <div className={[styles.alertBoxWrapper, alertDetails.class].join(" ")}>
          <div className={styles.detailsSection}>
            <div className={styles.alertBoxIcon}>{alertDetails.icon}</div>
            <div className={styles.alertText}>
              <p>{alertDetails.text}</p>
            </div>
          </div>
          <button
            className={styles.alertClose}
            onClick={() => setShowAlert(false)}
          >
            <CloseIcon
              color={type === "ERROR" ? "#EB0701" : "#07B505"}
              size={25}
            />
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AlertBox;
