import React from "react";
import styles from "./DonorTable.module.scss";
import formStyles from "../../form/CustomForm.module.scss";
import CustomButton from "../../customButton";
import CustomInput from "../../form/CustomInput";
import { Form, Formik } from "formik";
import CustomDropdown from "../../form/CustomDropdown";
import CustomDatePicker from "../../form/CustomDatePicker";

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

const DonorForm = ({ donor, isAllowedFullAccess }) => {
  console.log("donor - ", donor);
  const initialValues = {
    nic: donor.nic ?? "",
    first_name: donor.firstName ?? "",
    last_name: donor.lastName ?? "",
    contact_no: donor.contactNo ?? "",
    bloodType: donor.bloodType ?? "",
    no: donor.streetNo ?? "",
    street: donor.streetName ?? "",
    city: donor.city ?? "",
    // gender: "",
    // birthday: "",
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
                className={[formStyles.groupInputs, formStyles.input100].join(
                  " "
                )}
              >
                <CustomInput
                  placeHolder={"Donor Nic"}
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
              <div
                className={[
                  formStyles.d_flex,
                  formStyles.align_items_center,
                  formStyles.space_between,
                  formStyles.mtb_5,
                ].join(" ")}
              >
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

            <div className={formStyles.inputWrapper}>
              <div
                className={[formStyles.groupInputs, formStyles.input30].join(
                  " "
                )}
              >
                <CustomInput
                  placeHolder={"street No"}
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
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default DonorForm;
