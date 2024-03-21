import React, { useEffect, useState } from "react";
import styles from "./DonorTable.module.scss";
import formStyles from "../../form/CustomForm.module.scss";
import modalStyle from "../../../components/modal/CustomModal.module.scss";
import { Form, Formik } from "formik";
import AlertBox from "../../../../../share/Alerts/AlertBox";
import CustomButton from "../../customButton";
import UserService from "../../../../../api/services/userService";
import CustomDatePicker from "../../form/CustomDatePicker";

const DonationForm = (data) => {
  console.log("data - ", data);
  const [alertMsg, setAlertMsg] = useState({});
  const [loading, setLoading] = useState(false);

  const initialValues = {
    donorNic: data.donorNic ?? "",
    donationDate: data.donationDate ?? "",
  };

  const validation = (values) => {
    const errors = {};

    if (!values.donationDate) {
      errors.donationDate = "Donation Date is required";
    } else {
      const donationDate = new Date(values.donationDate);
      const currentDate = new Date();

      if (donationDate.getFullYear() < 2020) {
        errors.donationDate = "Donation Date cannot be before 2020";
      } else if (donationDate > currentDate) {
        errors.donationDate = "Donation Date cannot be in the future";
      }
    }

    return errors;
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    let response;
    try {
      //   response = await UserService.resetPassword({
      //     nic: data.user.nic,
      //     newPassword: values.password,
      //   });
      if (response.status === 200) {
        setAlertMsg({
          type: "SUCCESS",
          message: response.message,
          display: true,
        });
      } else {
        setAlertMsg({
          type: "ERROR",
          message: response.message,
          display: true,
        });
      }
    } catch (e) {
      console.log("registration failed with : ", e);
      setAlertMsg("User Registration Failed");
      setAlertMsg({
        type: "ERROR",
        message: response.message,
        display: true,
      });
    } finally {
      setLoading(false);
      //   formChanged();
    }
  };

  return (
    <div
      className={[formStyles.basicDataFormWrapper, styles.displayCenter].join(
        " "
      )}
    >
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
            <div
              className={[formStyles.inputWrapper, styles.displayCenter].join(
                " "
              )}
            >
              <div className={formStyles.groupInputs}>
                <CustomDatePicker
                  placeholder={"Donation Date"}
                  onDateChange={(date) => {
                    setFieldValue("donationDate", date);
                  }}
                  touched={(value) => setFieldTouched("donationDate", value)}
                  defaultDate={initialValues.donationDate}
                />
                <span>{touched.donationDate ? errors.donationDate : ""}</span>
              </div>
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

export default DonationForm;
