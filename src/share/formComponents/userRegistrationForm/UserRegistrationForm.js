import React from "react";
import styles from "../userRegistrationForm/UserRegistrationForm.module.scss";
import formStyles from "../../../components/common/components/form/CustomForm.module.scss";
import CustomButton from "../../../components/common/components/customButton";
import { Form, Formik } from "formik";
import CustomInput from "../../../components/common/components/form/CustomInput";
import CustomDropdown from "../../../components/common/components/form/CustomDropdown";
import CustomDatePicker from "../../../components/common/components/form/CustomDatePicker";
import CustomPasswordInput from "../../../components/common/components/form/CustomPasswordInput";
import AuthService from "../../../api/services/authService";

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

const organizationTypes = [
  { key: 1, value: "Blood Bank" },
  { key: 2, value: "Hospital" },
];

const hospitalType = [
  { key: 1, value: "Hospital1" },
  { key: 2, value: "Hospital2" },
];

const UserRegistrationForm = ({ user, isAllowedFullAccess, isCreateUser }) => {
  const initialValues = {
    nic: "",
    firstName: "",
    lastName: "",
    contact_no: "",
    bloodType: "",
    no: "",
    street: "",
    city: "",
    birthday: "",
    role: "",
    username: "",
    temp_pw: "",
    password: "",
    recovery_email: "",
    organization: "",
    organizationType: "",
  };

  const validation = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Username is required";
    } else if (!/^[A-Za-z0-9]{3,8}$/.test(values.username)) {
      errors.username =
        "Username must be 3-8 characters long and contain only letters and numbers";
    }

    if (!values.firstName) {
      errors.firstName = "First Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(values.firstName)) {
      errors.firstName = "First Name must contain only letters and spaces";
    } else if (values.firstName.length < 2 || values.firstName.length > 50) {
      errors.firstName = "First Name must be between 2 and 50 characters";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(values.lastName)) {
      errors.lastName = "Last Name must contain only letters and spaces";
    } else if (values.lastName.length < 2 || values.lastName.length > 50) {
      errors.lastName = "Last Name must be between 2 and 50 characters";
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
    } else if (values.no.length < 1 || values.no.length > 10) {
      errors.no = "Address No must be between 1 and 10 characters";
    }

    if (!values.street) {
      errors.street = "Street address is required";
    } else if (!/^[^\d\s]{2,}/.test(values.street)) {
      errors.street = "Street address should contain at least 2 letters";
    } else if (values.street.length < 2 || values.street.length > 50) {
      errors.street = "Street address must be between 2 and 50 characters";
    }

    if (!values.city) {
      errors.city = "City is required";
    } else if (!/^[^\d\s]{3,}/.test(values.city)) {
      errors.city = "City should contain at least 3 letters";
    } else if (values.city.length < 3 || values.city.length > 50) {
      errors.city = "City must be between 3 and 50 characters";
    }

    if (!values.temp_pw) {
      errors.temp_pw = "Password is required";
    } else if (values.temp_pw.length < 4 || values.temp_pw.length > 12) {
      errors.temp_pw = "Password must be between 4 and 12 characters";
    } else if (/\s/.test(values.temp_pw)) {
      errors.temp_pw = "Password must not contain whitespaces";
    }

    if (!values.password) {
      errors.password = "Confirmation Password is required";
    } else if (values.password !== values.temp_pw) {
      errors.password = "Passwords do not match";
    }
    if (!values.role) {
      errors.role = "User Role is required";
    }
    if (!values.bloodType) {
      errors.bloodType = "Blood Type is required";
    }
    if (!values.organization) {
      errors.organization = "Organization Type is required";
    }
    if (values.organization && !values.organizationType) {
      errors.organizationType = "Organization is required";
    }

    if (!values.birthday) {
      errors.birthday = "Birthday is required";
    } else {
      const birthday = new Date(values.birthday);
      const ageDifference = Date.now() - birthday.getTime();
      const ageDate = new Date(ageDifference);
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);

      if (age < 18) {
        errors.birthday = "Age must be at least 18 years old";
      }
    }

    return errors;
  };

  const handleSubmit = async (values) => {
    const response = await AuthService.registration(values);
    console.log("response - ", response);
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
                  id={"username"}
                  name={"username"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("username", value);
                  }}
                  default={values.username ?? ""}
                  error={errors.username}
                  type={"text"}
                  touched={(value) => setFieldTouched("username", value)}
                />
                <span>{touched.username ? errors.username : ""}</span>
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
                    id={"role"}
                    name={"role"}
                    disabled={false}
                    defaultValue={initialValues.role}
                    getValue={(value) => {
                      setFieldValue("role", value);
                    }}
                    touched={(value) => setFieldTouched("role", value)}
                  />
                  <span>{touched.role ? errors.role : ""}</span>
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
              </div>
            </div>

            <div className={formStyles.inputWrapper}>
              <div
                className={
                  !values.organization
                    ? [formStyles.groupInputs, formStyles.input50].join(" ")
                    : [formStyles.groupInputs, formStyles.input30].join(" ")
                }
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
              <div
                className={
                  !values.organization
                    ? [formStyles.groupInputs, formStyles.input50].join(" ")
                    : [formStyles.groupInputs, formStyles.input30].join(" ")
                }
              >
                <div className={styles.dateDiv}>
                  <CustomDropdown
                    dataset={organizationTypes}
                    placeHolder={"Select Organization type"}
                    id={"organization"}
                    name={"organization"}
                    disabled={false}
                    defaultValue={initialValues.organization}
                    getValue={(value) => {
                      setFieldValue("organization", value);
                    }}
                    touched={(value) => setFieldTouched("organization", value)}
                  />
                </div>
                <span>{touched.organization ? errors.organization : ""}</span>
              </div>
              {values.organization ? (
                <div
                  className={[formStyles.groupInputs, formStyles.input30].join(
                    " "
                  )}
                >
                  <div className={styles.dateDiv}>
                    <CustomDropdown
                      dataset={hospitalType}
                      placeHolder={"Select Organization"}
                      id={"organizationType"}
                      name={"organizationType"}
                      disabled={false}
                      defaultValue={initialValues.organization}
                      getValue={(value) => {
                        setFieldValue("organizationType", value);
                      }}
                      touched={(value) =>
                        setFieldTouched("organizationType", value)
                      }
                    />
                    <span>
                      {touched.organizationType ? errors.organizationType : ""}
                    </span>
                  </div>
                </div>
              ) : (
                ""
              )}
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
                isDisabled={Object.keys(errors).length !== 0}
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
