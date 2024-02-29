import React from "react";
import styles from "../userRegistrationForm/UserRegistrationForm.module.scss";
import formStyles from "../../../components/common/components/form/CustomForm.module.scss";
import CustomButton from "../../../components/common/components/customButton";
import { Form, Formik } from "formik";
import CustomInput from "../../../components/common/components/form/CustomInput";
import CustomDropdown from "../../../components/common/components/form/CustomDropdown";
import CustomDatePicker from "../../../components/common/components/form/CustomDatePicker";
import CustomPasswordInput from "../../../components/common/components/form/CustomPasswordInput";

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

const userTypes = [
  { key: 1, value: "Admin" },
  { key: 2, value: "User" },
];

const UserRegistrationForm = ({ user, isAllowedFullAccess, isCreateUser }) => {
  const initialValues = {
    nic: "",
    first_name: "",
    last_name: "",
    contact_no: "",
    bloodType: "",
    no: "",
    street: "",
    city: "",
    birthday: "",
    userType: "",
    user_name: "",
    temp_pw: "",
    confirm_temp_pw: "",
    recovery_email: "",
  };

  const validation = (values) => {
    const errors = {};

    if (!values.first_name) {
      errors.first_name = "First Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(values.first_name)) {
      errors.first_name = "First Name must contain only letters and spaces";
    }

    if (!values.last_name) {
      errors.last_name = "Last Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(values.last_name)) {
      errors.last_name = "Last Name must contain only letters and spaces";
    }

    if (!values.contact_no) {
      errors.contact_no = "Contact Number is required";
    } else if (!/^(0\d{9})$/.test(values.contact_no)) {
      errors.contact_no = "Invalid Contact Number";
    }

    if (!values.nic) {
      errors.nic = "NIC is required";
    } else {
      if (!/^[0-9]{9}[vVxX]$/.test(values.nic.toString().toUpperCase())) {
        if (!/^[0-9]{12}$/.test(values.nic)) {
          errors.nic = "Invalid NIC";
        }
      }
    }

    if (!values.no) {
      errors.no = "Address No is required";
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

    if (!values.birthday) {
      errors.birthday = "Birthday is required";
    }

    return errors;
  };

  const handleSubmit = (values) => {
    console.log("values - ", values);
    setTimeout(() => {}, 400);
  };

  return (
    <div className={formStyles.basicDataFormWrapper}>
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
                  placeHolder={"User NIC"}
                  id={"nic"}
                  name={"nic"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("nic", value);
                  }}
                  default={values.nic ?? ""}
                  error={errors.nic}
                  type={"text"}
                  touched={(value) => setFieldTouched("nic", value)}
                />
                <span>{touched.nic ? errors.nic : ""}</span>
              </div>

              <div
                className={[formStyles.groupInputs, formStyles.input50].join(
                  " "
                )}
              >
                <CustomInput
                  placeHolder={"User Name"}
                  id={"user_name"}
                  name={"user_name"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("user_name", value);
                  }}
                  default={values.user_name ?? ""}
                  error={errors.user_name}
                  type={"text"}
                  touched={(value) => setFieldTouched("user_name", value)}
                />
                <span>{touched.user_name ? errors.user_name : ""}</span>
              </div>
            </div>

            <div className={formStyles.inputWrapper}>
              <div
                className={[formStyles.groupInputs, formStyles.input50].join(
                  " "
                )}
              >
                <CustomInput
                  placeHolder={"First Name"}
                  id={"first_name"}
                  name={"first_name"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("first_name", value);
                  }}
                  default={values.first_name ?? ""}
                  error={errors.first_name}
                  type={"text"}
                  touched={(value) => setFieldTouched("first_name", value)}
                />
                <span>{touched.first_name ? errors.first_name : ""}</span>
              </div>

              <div
                className={[formStyles.groupInputs, formStyles.input50].join(
                  " "
                )}
              >
                <CustomInput
                  placeHolder={"Last Name"}
                  id={"last_name"}
                  name={"last_name"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("last_name", value);
                  }}
                  default={values.last_name ?? ""}
                  error={errors.last_name}
                  type={"text"}
                  touched={(value) => setFieldTouched("last_name", value)}
                />
                <span>{touched.last_name ? errors.last_name : ""}</span>
              </div>
            </div>

            <div className={styles.inputWrapper}>
              {/* <div
                className={[
                  formStyles.d_flex,
                  formStyles.align_items_center,
                  formStyles.space_between,
                  formStyles.mtb_5,
                ].join(" ")}
              > */}
              <div
                className={[formStyles.groupInputs, formStyles.input30].join(
                  " "
                )}
              >
                <div className={styles.dateDiv}>
                  <CustomDropdown
                    dataset={userTypes}
                    placeHolder={"Select User Type"}
                    id={"userType"}
                    name={"userType"}
                    disabled={false}
                    defaultValue={initialValues.userType}
                    getValue={(value) => {
                      setFieldValue("userType", value);
                    }}
                    touched={(value) => setFieldTouched("userType", value)}
                  />
                  <span>{touched.userType ? errors.userType : ""}</span>
                </div>
              </div>

              <div
                className={[formStyles.groupInputs, formStyles.input30].join(
                  " "
                )}
              >
                <div className={styles.dateDiv}>
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
              <div className={[styles.groupInputs, styles.input30].join(" ")}>
                <div className={styles.dateDiv}>
                  <CustomDatePicker
                    placeholder={"Birthday"}
                    onDateChange={(date) => {
                      setFieldValue("birthday", date);
                    }}
                    touched={(value) => setFieldTouched("birthday", value)}
                  />
                  <span>{touched.birthday ? errors.birthday : ""}</span>
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
                  placeHolder={"Street No"}
                  id={"no"}
                  name={"no"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("no", value);
                  }}
                  default={values.no ?? ""}
                  error={errors.no}
                  type={"text"}
                  touched={(value) => setFieldTouched("no", value)}
                />
                <span>{touched.no ? errors.no : ""}</span>
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

            <div className={formStyles.inputWrapper}>
              <div
                className={[formStyles.groupInputs, formStyles.input50].join(
                  " "
                )}
              >
                <CustomPasswordInput
                  placeHolder={"Temporary Password"}
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

              <div
                className={[formStyles.groupInputs, formStyles.input50].join(
                  " "
                )}
              >
                <CustomPasswordInput
                  placeHolder={"Confirm Temporary Password"}
                  id={"confirm_temp_pw"}
                  name={"confirm_temp_pw"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("confirm_temp_pw", value);
                  }}
                  default={values.confirm_temp_pw ?? ""}
                  error={errors.confirm_temp_pw}
                  type={"password"}
                  touched={(value) => setFieldTouched("confirm_temp_pw", value)}
                />
                <span>
                  {touched.confirm_temp_pw ? errors.confirm_temp_pw : ""}
                </span>
              </div>
            </div>

            <div className={formStyles.inputWrapper}>
              <div
                className={[formStyles.groupInputs, formStyles.input50].join(
                  " "
                )}
              >
                <CustomInput
                  placeHolder={"Recovery Email"}
                  id={"recovery_email"}
                  name={"recovery_email"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("recovery_email", value);
                  }}
                  default={values.recovery_email ?? ""}
                  error={errors.recovery_email}
                  type={"text"}
                  touched={(value) => setFieldTouched("recovery_email", value)}
                />
                <span>
                  {touched.recovery_email ? errors.recovery_email : ""}
                </span>
              </div>
              <div
                className={[formStyles.groupInputs, formStyles.input50].join(
                  " "
                )}
              >
                <CustomInput
                  placeHolder={"Contact No"}
                  id={"contact_no"}
                  name={"contact_no"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("contact_no", value);
                  }}
                  default={values.contact_no ?? ""}
                  error={errors.contact_no}
                  type={"text"}
                  touched={(value) => setFieldTouched("contact_no", value)}
                />
                <span>{touched.contact_no ? errors.contact_no : ""}</span>
              </div>
            </div>

            <div
              className={[
                formStyles.submitBtnWrapper,
                formStyles.groupBtnsWrapper,
              ].join(" ")}
            >
              <CustomButton
                buttonText={"Save"}
                buttonType={"submit"}
                isDisabled={false}
                active={true}
                onClick={() => handleSubmit(values)}
              />
              {!isCreateUser ? (
                <>
                  {isAllowedFullAccess ? (
                    <CustomButton
                      buttonText={"Delete"}
                      buttonType={"DELETE"}
                      isDisabled={false}
                      active={true}
                      onClick={() => handleSubmit(values)}
                    />
                  ) : (
                    ""
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
export default UserRegistrationForm;
