import React, { useState } from "react";
import styles from "./DonorTable.module.scss";
import commonStyle from "../../../../../styles/common.module.scss";
import formStyles from "../../form/CustomForm.module.scss";
import CustomButton from "../../customButton";
import CustomInput from "../../form/CustomInput";
import { Form, Formik } from "formik";
import CustomDropdown from "../../form/CustomDropdown";
import CustomDatePicker from "../../form/CustomDatePicker";
import DeletePopUp from "../../modal/popups/DeletePopUp";
import donorService from "../../../../../api/services/donorService";
import style from "../../../../../share/formComponents/userRegistrationForm/UserRegistrationForm.module.scss";
import AlertBox from "../../../../../share/Alerts/AlertBox";
import modalStyle from "../../../components/modal/CustomModal.module.scss";
import donationHistoryService from "../../../../../api/services/donationHistoryServic";
import UserService from "../../../../../api/services/userService";

const bloodTypes = [
  { key: "A+", value: "A +" },
  { key: "A-", value: "A -" },
  { key: "B+", value: "B +" },
  { key: "B-", value: "B -" },
  { key: "AB+", value: "AB +" },
  { key: "AB-", value: "AB -" },
  { key: "O+", value: "O +" },
  { key: "O-", value: "O -" },
];

const gender = [
  { key: 1, value: "Male" },
  { key: 2, value: "Female" },
];

const DonorForm = ({
  donor,
  isAllowedFullAccess,
  isCreateDonor,
  formChanged,
}) => {
  const [showConfirmation, setshowConfirmation] = useState(false);
  const [alertMsg, setAlertMsg] = useState({});
  const [loading, setLoading] = useState(false);
  const [isNICAlreadyExisting, setIsNICAlreadyExisting] = useState(false);
  const [isDonated, setIsDonated] = useState(false);

  const handleRemoveClick = (value) => {
    setshowConfirmation(false);
  };

  const handleDeleteClick = async (value) => {
    try {
      const deleteRespond = await donorService.deleteDonorById(value.donorNic);
      // console.log("deleteRespond - ", deleteRespond);
      if (deleteRespond.status === 200) {
        setAlertMsg({
          type: "SUCCESS",
          message: deleteRespond.statusMsg,
          display: true,
        });
      } else {
        setAlertMsg({
          type: "ERROR",
          message: deleteRespond.statusMsg,
          display: true,
        });
      }
    } catch (e) {
      setAlertMsg({ type: "ERROR", message: "ERROR: " + e, display: true });
    }
    formChanged();
    setshowConfirmation(false);
  };

  const initialValues = {
    donorNic: donor.donorNic ?? "",
    firstName: donor.firstName ?? "",
    lastName: donor.lastName ?? "",
    contactNo: donor.contactNo
      ? donor.contactNo.toString().length < 10
        ? "0" + donor.contactNo ?? ""
        : donor.contactNo ?? ""
      : "",
    bloodType: donor.bloodType ?? "",
    streetNo: donor.streetNo ?? "",
    street: donor.street ?? "",
    city: donor.city ?? "",
    gender: donor.gender ?? "",
    birthday: donor.birthday ?? "",
    weight: donor.weight ?? "",
    unit: donor.unit ?? "",
    emergencyContactNo: donor.emergencyContactNo ?? "",
    donated: donor.donated ?? false,
  };

  const validation = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(values.firstName)) {
      errors.firstName = "First Name must contain only letters and spaces";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(values.lastName)) {
      errors.lastName = "Last Name must contain only letters and spaces";
    }

    if (!values.contactNo) {
      errors.contactNo = "Contact Number is required";
    } else if (!/^(0\d{9})$/.test(values.contactNo)) {
      errors.contactNo = "Invalid Contact Number";
    }

    if (!values.donorNic) {
      errors.donorNic = "NIC is required";
    } else {
      if (!/^[0-9]{9}[vVxX]$/.test(values.donorNic.toString().toUpperCase())) {
        if (!/^[0-9]{12}$/.test(values.donorNic)) {
          errors.donorNic = "Invalid NIC";
        }
      }
    }

    if (!values.streetNo) {
      errors.streetNo = "Address No is required";
    }

    if (!values.street) {
      errors.street = "Street address is required";
    } else if (!/^[^\d\s]{2,}/.test(values.street)) {
      errors.street = "Street address should contain at least 2 letters";
    }

    if (!values.city) {
      errors.city = "City is required";
    } else if (!/^[^\d\s]{3,}/.test(values.city)) {
      errors.city = "City should contain at least 3 letters";
    }

    if (!values.unit && values.donated) {
      errors.unit = "Units are required";
    } else if (values.donated && (values.unit < 50 || values.unit > 1000)) {
      errors.unit = "Units should be between 50 to 1000";
    }

    // if (!values.birthday) {
    //   errors.birthday = "Birthday is required";
    // }

    return errors;
  };

  const handleSubmit = async (values) => {
    let donationData;
    if (isCreateDonor) {
      setLoading(true);
      try {
        const donorData = await donorService.createDonor(values);
        console.log("values.donated - ", values.donated);
        if (donorData.status === 200) {
          setAlertMsg({
            type: "SUCCESS",
            message: donorData.statusMsg,
            display: true,
          });
          if (values.donated) {
            donationData = await donationHistoryService.createDonation({
              donorNic: values.donorNic,
              donationDate: new Date().toISOString(),
              quantity: values.unit,
            });
            if (donationData.status === 200) {
              console.log("donationData - ", donationData);

              setAlertMsg({
                type: "SUCCESS",
                message: donationData.statusMsg,
                display: true,
              });
            } else {
              setAlertMsg({
                type: "ERROR",
                message: donationData.statusMsg,
                display: true,
              });
            }
          } else {
            setAlertMsg({
              type: "ERROR",
              message: donationData.statusMsg,
              display: true,
            });
          }
        } else {
          setAlertMsg({
            type: "ERROR",
            message: donorData.statusMsg,
            display: true,
          });
        }
      } catch (e) {
        setAlertMsg({ type: "ERROR", message: "ERROR: " + e, display: true });
      } finally {
        setLoading(false);
        formChanged();
      }
    } else {
      // UPDATE DONOR
      setLoading(true);
      try {
        const updatedDonor = await donorService.updateDonor(values);
        if (updatedDonor.status === 200) {
          setAlertMsg({
            type: "SUCCESS",
            message: updatedDonor.statusMsg,
            display: true,
          });
        } else {
          setAlertMsg({
            type: "ERROR",
            message: updatedDonor.statusMsg,
            display: true,
          });
        }
      } catch (e) {
        setAlertMsg({ type: "ERROR", message: "ERROR: " + e, display: true });
      } finally {
        setLoading(false);
        formChanged();
      }
    }
  };

  const handleNICValidation = async (value) => {
    try {
      if (value && value !== donor.donorNic) {
        const response = await donorService.getDonorByNic(value);

        if (Object.keys(response).length > 0) {
          setIsNICAlreadyExisting(true);
        } else {
          setIsNICAlreadyExisting(false);
        }
      }
    } catch (e) {
      console.log("response of donor by nic error");
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
                className={[formStyles.groupInputs, formStyles.input50].join(
                  " "
                )}
              >
                <CustomInput
                  placeHolder={"Donor Nic"}
                  id={"donorNic"}
                  name={"donorNic"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("donorNic", value);
                  }}
                  default={values.donorNic ?? ""}
                  error={errors.donorNic}
                  type={"text"}
                  touched={(value) => setFieldTouched("donorNic", value)}
                  inputValueChnaged={(value) => handleNICValidation(value)}
                />
                <span>{touched.donorNic ? errors.donorNic : ""}</span>
                <span>
                  {!errors.donorNic && isNICAlreadyExisting
                    ? "NIC already exists"
                    : ""}
                </span>
              </div>
              <div
                className={
                  !values.organization
                    ? [formStyles.groupInputs, formStyles.input50].join(" ")
                    : [formStyles.groupInputs, formStyles.input30].join(" ")
                }
              >
                <CustomInput
                  placeHolder={"Contact No"}
                  id={"contactNo"}
                  name={"contactNo"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("contactNo", value);
                  }}
                  default={values.contactNo ?? ""}
                  error={errors.contactNo}
                  type={"text"}
                  touched={(value) => setFieldTouched("contactNo", value)}
                />
                <span>{touched.contactNo ? errors.contactNo : ""}</span>
              </div>
            </div>
            {/* {JSON.stringify(errors)} */}
            <div className={formStyles.inputWrapper}>
              <div
                className={[formStyles.groupInputs, formStyles.input50].join(
                  " "
                )}
              >
                <CustomInput
                  placeHolder={"First Name"}
                  id={"firstName"}
                  name={"firstName"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("firstName", value);
                  }}
                  default={values.firstName ?? ""}
                  error={errors.firstName}
                  type={"text"}
                  touched={(value) => setFieldTouched("firstName", value)}
                />
                <span>{touched.firstName ? errors.firstName : ""}</span>
              </div>

              <div
                className={[formStyles.groupInputs, formStyles.input50].join(
                  " "
                )}
              >
                <CustomInput
                  placeHolder={"Last Name"}
                  id={"lastName"}
                  name={"lastName"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("lastName", value);
                  }}
                  default={values.lastName ?? ""}
                  error={errors.lastName}
                  type={"text"}
                  touched={(value) => setFieldTouched("lastName", value)}
                />
                <span>{touched.lastName ? errors.lastName : ""}</span>
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <div
                className={[
                  formStyles.d_flex,
                  formStyles.align_items_center,
                  formStyles.space_between,
                  formStyles.mtb_5,
                ].join(" ")}
              >
                <div className={[style.groupInputs, style.input30].join(" ")}>
                  <div className={style.dateDiv}>
                    <CustomDropdown
                      dataset={gender}
                      placeHolder={"Select Gender"}
                      id={"gender"}
                      name={"gender"}
                      disabled={false}
                      defaultValue={initialValues.gender}
                      getValue={(value) => {
                        setFieldValue("gender", value);
                      }}
                      touched={(value) => setFieldTouched("gender", value)}
                    />
                    <span>{touched.gender ? errors.gender : ""}</span>
                  </div>
                </div>

                <div className={[style.groupInputs, style.input30].join(" ")}>
                  <div className={style.dateDiv}>
                    <CustomDropdown
                      dataset={bloodTypes}
                      placeHolder={"Select Blood Type"}
                      id={"bloodType"}
                      name={"bloodType"}
                      disabled={false}
                      defaultValue={initialValues.bloodType}
                      getValue={(value) => {
                        setFieldValue("bloodType", value);
                      }}
                      touched={(value) => setFieldTouched("bloodType", value)}
                    />
                    <span>{touched.bloodType ? errors.bloodType : ""}</span>
                  </div>
                </div>
                <div className={[style.groupInputs, style.input30].join(" ")}>
                  <div className={style.dateDiv}>
                    <CustomDatePicker
                      placeholder={"Birthday"}
                      onDateChange={(date) => {
                        setFieldValue("birthday", date);
                      }}
                      touched={(value) => setFieldTouched("birthday", value)}
                      defaultDate={initialValues.birthday}
                    />
                    <span>{touched.birthday ? errors.birthday : ""}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={formStyles.inputWrapper}>
              <div
                className={[formStyles.groupInputs, formStyles.input30].join(
                  " "
                )}
              >
                <CustomInput
                  placeHolder={"street No"}
                  id={"streetNo"}
                  name={"streetNo"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("streetNo", value);
                  }}
                  default={values.streetNo ?? ""}
                  error={errors.streetNo}
                  type={"text"}
                  touched={(value) => setFieldTouched("streetNo", value)}
                />
                <span>{touched.streetNo ? errors.streetNo : ""}</span>
              </div>
              <div
                className={[formStyles.groupInputs, formStyles.input30].join(
                  " "
                )}
              >
                <CustomInput
                  placeHolder={"Street"}
                  id={"street"}
                  name={"street"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("street", value);
                  }}
                  default={values.street ?? ""}
                  error={errors.street}
                  type={"text"}
                  touched={(value) => setFieldTouched("street", value)}
                />
                <span>{touched.street ? errors.street : ""}</span>
              </div>
              <div
                className={[formStyles.groupInputs, formStyles.input30].join(
                  " "
                )}
              >
                <CustomInput
                  placeHolder={"City"}
                  id={"city"}
                  name={"city"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("city", value);
                  }}
                  default={values.city ?? ""}
                  error={errors.city}
                  type={"text"}
                  touched={(value) => setFieldTouched("city", value)}
                />
                <span>{touched.city ? errors.city : ""}</span>
              </div>
            </div>
            {/* {JSON.stringify(values.donated)} */}
            {isCreateDonor ? (
              <div
                className={formStyles.inputWrapper}
                style={{ marginBottom: "12px" }}
              >
                <div
                  className={[formStyles.groupInputs, formStyles.input50].join(
                    " "
                  )}
                >
                  <div className={styles.checkboxWrapper}>
                    <input
                      type="checkbox"
                      id="donated"
                      checked={values.donated}
                      onChange={(e) =>
                        setFieldValue("donated", e.target.checked)
                      }
                    />
                    <label className={styles.checkboxLabel}>Donated</label>
                  </div>
                </div>
              </div>
            ) : null}
            {values.donated ? (
              <div className={formStyles.inputWrapper}>
                <div
                  className={[formStyles.groupInputs, formStyles.input30].join(
                    " "
                  )}
                >
                  <CustomInput
                    placeHolder={"Units : ml"}
                    id={"unit"}
                    name={"unit"}
                    disabled={false}
                    getValue={(value) => {
                      setFieldValue("unit", value);
                    }}
                    default={values.unit ?? ""}
                    error={errors.unit}
                    type={"text"}
                    touched={(value) => setFieldTouched("unit", value)}
                  />
                  <span>{touched.unit ? errors.unit : ""}</span>
                </div>
              </div>
            ) : null}
            <div
              className={[
                formStyles.submitBtnWrapper,
                formStyles.groupBtnsWrapper,
              ].join(" ")}
            >
              <CustomButton
                buttonText={"Save"}
                buttonType={"submit"}
                isDisabled={
                  Object.keys(errors).length !== 0 ||
                  loading ||
                  isNICAlreadyExisting
                }
                active={true}
                onClick={() => handleSubmit(values)}
              />

              {!isCreateDonor ? (
                <>
                  {isAllowedFullAccess ? (
                    <div style={commonStyle.deletRemoveBtnsWrapper}>
                      {showConfirmation ? (
                        <DeletePopUp
                          isActionProceed={() => handleDeleteClick(values)}
                        />
                      ) : (
                        ""
                      )}
                      <CustomButton
                        buttonText={"Delete"}
                        buttonType={"DELETE"}
                        isDisabled={false}
                        active={true}
                        onClick={() => setshowConfirmation(true)}
                      />
                    </div>
                  ) : (
                    <div
                      className={[
                        commonStyle.d_flex,
                        commonStyle.align_items_center,
                        commonStyle.space_between,
                      ].join(" ")}
                    >
                      <div style={commonStyle.deletRemoveBtnsWrapper}>
                        {showConfirmation ? (
                          <DeletePopUp
                            popupMessage={
                              "Are you sure you want to remove this donor from stock? "
                            }
                            subMessage={
                              "You can re-add the donor by going back to the previous step and clicking the 'Add Donor' button."
                            }
                            isActionProceed={() => handleRemoveClick(values)}
                          />
                        ) : (
                          ""
                        )}
                        <CustomButton
                          buttonText={"Remove From Stock"}
                          buttonType={"DELETE"}
                          isDisabled={false}
                          active={true}
                          onClick={() => setshowConfirmation(true)}
                        />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                ""
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default DonorForm;
