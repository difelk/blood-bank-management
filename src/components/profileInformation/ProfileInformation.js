import React from "react";
import CustomInput from "../common/components/form/CustomInput";
import styles from "./ProfileInformation.module.scss";
const ProfileInformation = () => {
  return (
    <div>
      personal information
      <div className={styles.inputWrapper}>
        <CustomInput
          placeHolder={"First Name"}
          disabled={false}
          getValue={(value) => console.log("from the calling input - ", value)}
        />
      </div>
    </div>
  );
};
export default ProfileInformation;
