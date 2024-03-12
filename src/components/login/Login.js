import React, { useContext, useState } from "react";
import formStyles from "../common/components/form/CustomForm.module.scss";
import styles from "./Login.module.scss";
import customFormStyles from "../common/components/form/CustomInput.module.scss";
import customFormStyles2 from "../common/components/form/CustomPasswordInput.module.scss";
import { GlobalContext } from "../../contexts/ContextsProvider";
import AuthService from "../../api/services/authService";

const LoginForm = ({ ismodalOpen }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isUsernameFocus, setIsUsernameFocus] = useState(false);
  const [isPasswordFocus, setIsPasswordFocus] = useState(false);
  const { login } = useContext(GlobalContext);

  const handleUserName = (value) => {
    if (!value || value.trim() === "") {
      setUserNameError("Username is required");
    } else {
      setUserNameError("");
      setUserName(value);
    }
  };

  const handlePassword = (value) => {
    if (!value || value.trim() === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
      setPassword(value);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await AuthService.login({
        username: userName,
        password: password,
      });

      if (response.token) {
        login(response.token);
        ismodalOpen(false);
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className={formStyles.basicDataFormWrapper}>
      <div className={formStyles.formWrapper}>
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
          <label className={styles.error}>{usernameError}</label>
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
          <label className={styles.error}>{passwordError}</label>
        </div>
        <button className={styles.forgetPassword}>
          {" "}
          Forgot your password?
        </button>
      </div>

      <button className={styles.submitBtn} onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default LoginForm;
