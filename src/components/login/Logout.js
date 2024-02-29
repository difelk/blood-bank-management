import React from "react";
import styles from "./Login.module.scss";
import CustomButton from "../common/components/customButton";
const Logout = ({ openModal }) => {
  const handleLogout = () => {};

  return (
    <div className={styles.logoutWrapper}>
      <div className={styles.logoutTxt}>
        <h6>Are you sure you want to logout from the admin?</h6>
      </div>
      <div className={styles.logoutBtn}>
        <CustomButton
          buttonText={"Cancel"}
          active={true}
          buttonType={"CANCEL"}
          onClick={() => openModal(false)}
        />
        <CustomButton
          buttonText={"Logout"}
          active={true}
          buttonType={"LOGOUT"}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
};
export default Logout;
