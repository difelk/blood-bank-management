import React from "react";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.pageNotFoundWrapper}>
      <div className={styles.textArea}>
        <h5>404</h5>
        <p>We Could't Find the page you are looking for</p>
      </div>
    </div>
  );
};

export default NotFound;
