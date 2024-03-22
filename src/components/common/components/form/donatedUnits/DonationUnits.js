import React, { useEffect, useState } from "react";
import styles from "./DonationUnits.module.scss";
import formStyles from "../../form/CustomForm.module.scss";
import modalStyle from "../../../components/modal/CustomModal.module.scss";
import CustomPasswordInput from "../CustomPasswordInput";
import { Form, Formik } from "formik";
import AlertBox from "../../../../../share/Alerts/AlertBox";
import CustomButton from "../../customButton";
import UserService from "../../../../../api/services/userService";
import CustomDatePicker from "../CustomDatePicker";
import CustomInput from "../CustomInput";
import donationHistoryService from "../../../../../api/services/donationHistoryServic";

const DonationUnits = ({ donor, formChanged, isUpdateform }) => {
  const [alertMsg, setAlertMsg] = useState({});
  const [loading, setLoading] = useState(false);

  const initialValues = {
    donationDate: new Date() ?? "",
    quantity: donor.quantity ?? "",
  };

  const validation = (values) => {
    const errors = {};

    if (!values.quantity) {
      errors.quantity = "Units are required";
    } else if (values.quantity < 50 || values.quantity > 1000) {
      errors.quantity = "Units should be between 50 to 1000";
    }

    return errors;
  };

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      if (!isUpdateform) {
        const findByNic = await donationHistoryService.findDonationByNic(
          donor.donorNic
        );
        console.log("donor.donorNic - ", donor.donorNic);
        console.log("findByNic - ", findByNic);
        if (findByNic.length) {
          const donation = await donationHistoryService.createDonation({
            donorNic: donor.donorNic,
            donationDate: values.donationDate,
            quantity: values.quantity,
          });
          if (donation.status === 200) {
            setAlertMsg({
              type: "SUCCESS",
              message: donation.statusMsg,
              display: true,
            });
          } else {
            setAlertMsg({
              type: "ERROR",
              message: donation.statusMsg,
              display: true,
            });
          }
        } else {
          setAlertMsg({
            type: "ERROR",
            message: "Donor not found",
            display: true,
          });
        }
      }
      else{
        // update donation
      }
    } catch (e) {
      setAlertMsg({ type: "ERROR", message: "ERROR: " + e, display: true });
    } finally {
      setLoading(false);
      // formChanged();
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
                <div className={styles.dateDiv}>
                  <CustomDatePicker
                    placeholder={"Date"}
                    onDateChange={(donationDate) => {
                      setFieldValue("donationDate", donationDate);
                    }}
                    touched={(value) => setFieldTouched("donationDate", value)}
                    defaultDate={initialValues.donationDate}
                  />
                  <span>{touched.donationDate ? errors.donationDate : ""}</span>
                </div>
              </div>
            </div>
            <div
              className={[formStyles.inputWrapper, styles.dateDiv].join(" ")}
            >
              <div
                className={[formStyles.groupInputs, formStyles.input50].join(
                  " "
                )}
              >
                <CustomInput
                  placeHolder={"Units: ml"}
                  id={"quantity"}
                  name={"quantity"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("quantity", value);
                  }}
                  default={values.quantity ?? ""}
                  error={errors.quantity}
                  type={"number"}
                  touched={(value) => setFieldTouched("quantity", value)}
                />

                <span>{touched.quantity ? errors.quantity : ""}</span>
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

export default DonationUnits;
