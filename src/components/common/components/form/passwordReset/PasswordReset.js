import React, { useEffect, useState } from "react";
import styles from "./PasswordReset.module.scss";
import formStyles from "../../form/CustomForm.module.scss";
import modalStyle from "../../../components/modal/CustomModal.module.scss";
import CustomPasswordInput from "../CustomPasswordInput";
import { Form, Formik } from "formik";
import AlertBox from "../../../../../share/Alerts/AlertBox";
import CustomButton from "../../customButton";

const PasswordReset = (user) => {
  const [alertMsg, setAlertMsg] = useState({});
  const [loading, setLoading] = useState(false);

  const initialValues = {
    nic: user.nic ?? "",
    temp_pw: user.temp_pw ?? "",
    password: "",
  };

  const validation = (values) => {
    const errors = {};

    if (!values.temp_pw) {
      errors.temp_pw = "Password is required";
    } else if (values.temp_pw.length < 4 || values.temp_pw.length > 12) {
      errors.temp_pw = "Password must be between 4 and 12 characters";
    } else if (
      /\s/.test(values.temp_pw) ||
      /[^\x00-\x7F]/.test(values.temp_pw)
    ) {
      errors.temp_pw =
        "Password cannot contain whitespaces or unicode characters";
    }

    if (!values.password) {
      errors.password = "Confirm Password is required";
    } else if (values.password !== values.temp_pw) {
      errors.password = "Passwords do not match";
    }

    return errors;
  };

  const handleSubmit = async (values) => {
    let data = values;
    if (!values.password) {
      data = { ...data, password: user.password };
    }
    if (values.organizationType === "Blood Bank") {
      data = { ...data, organization: "" };
    }
    setLoading(true);
    try {
      //   const response = await UserService.updateUser(data);
      setAlertMsg({
        type: "SUCCESS",
        message: "User Update Successful",
        display: true,
      });
    } catch (e) {
      console.log("registration failed with : ", e);
      setAlertMsg("User Registration Failed");
      setAlertMsg({
        type: "ERROR",
        message: "User Registration Failed",
        display: true,
      });
    } finally {
      setLoading(false);
      //   formChanged();
    }
  };

  return (
    <div className={formStyles.basicDataFormWrapper}>
      <div className={modalStyle.alertBoxWrapper}>
        <AlertBox
          type={alertMsg.type}
          message={alertMsg.message}
          display={alertMsg.display}
        />
      </div>
      <Formik
        initialValues={initialValues}
        validate={validation}
        onSubmit={handleSubmit}
        validateOnBlur
      >
        {({
          isSubmitting,
          values,
          errors,
          touched,
          setFieldValue,
          setFieldTouched,
        }) => (
          <Form>
            <div className={formStyles.inputWrapper}>
              <div
                className={[formStyles.groupInputs, formStyles.input100].join(
                  " "
                )}
              >
                <CustomPasswordInput
                  placeHolder={"Enter New Password"}
                  id={"temp_pw"}
                  name={"temp_pw"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("temp_pw", value);
                  }}
                  default={values.temp_pw ?? ""}
                  error={errors.temp_pw}
                  type={"password"}
                  touched={(value) => setFieldTouched("temp_pw", value)}
                />
                <span>{touched.temp_pw ? errors.temp_pw : ""}</span>
              </div>
            </div>
            <div className={formStyles.inputWrapper}>
              <div
                className={[formStyles.groupInputs, formStyles.input100].join(
                  " "
                )}
              >
                <CustomPasswordInput
                  placeHolder={"Confirm Password"}
                  id={"password"}
                  name={"password"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("password", value);
                  }}
                  default={values.password ?? ""}
                  error={errors.password}
                  type={"password"}
                  touched={(value) => setFieldTouched("password", value)}
                />
                <span>{touched.password ? errors.password : ""}</span>
              </div>{" "}
            </div>
            <div className={styles.saveBtnWrapper}>
              <CustomButton
                buttonText={"Save"}
                buttonType={"submit"}
                isDisabled={Object.keys(errors).length !== 0 || loading}
                active={true}
                onClick={() => handleSubmit(values)}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PasswordReset;
