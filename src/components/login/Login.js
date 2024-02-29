import React, { useState } from "react";
import formStyles from "../common/components/form/CustomForm.module.scss";
import styles from "./Login.module.scss";
import customFormStyles from "../common/components/form/CustomInput.module.scss";
import customFormStyles2 from "../common/components/form/CustomPasswordInput.module.scss";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameFocus, setIsUsernameFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);

  const handleUserName = (value) => {
    setUserName(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  return (
    <div className={formStyles.basicDataFormWrapper}>
      <div className={styles.formWrapper}>
        <div
          className={
            isUsernameFocus || userName
              ? [
                  customFormStyles.inputWrapper,
                  styles.inputWrapper,
                  customFormStyles.inputWrapperOnFocus,
                ].join(" ")
              : [styles.inputWrapper, customFormStyles.inputWrapper].join(" ")
          }
        >
          <label>Username</label>
          <input
            id={"username"}
            name={"username"}
            type={"text"}
            onChange={(e) => {
              handleUserName(e.target.value);
            }}
            onFocus={() => {
              setIsUsernameFocus(true);
            }}
            onBlur={() => setIsUsernameFocus(false)}
            value={userName ?? ""}
            disabled={false}
            className={customFormStyles.error}
          />
        </div>

        <div
          className={
            isPasswordFocus || password
              ? [
                  customFormStyles2.inputWrapper,
                  styles.inputWrapper,
                  customFormStyles2.inputWrapperOnFocus,
                ].join(" ")
              : [styles.inputWrapper, customFormStyles2.inputWrapper].join(" ")
          }
        >
          <label>Password</label>
          <input
            id={"password"}
            name={"password"}
            type={"password"}
            onChange={(e) => {
              handlePassword(e.target.value);
            }}
            onFocus={() => {
              setIsPasswordFocus(true);
            }}
            onBlur={() => setIsPasswordFocus(false)}
            value={password}
            disabled={false}
            className={customFormStyles2.error}
          />
        </div>
      </div>
      <button className={styles.submitBtn}>Login</button>
    </div>
  );
};

export default LoginForm;
