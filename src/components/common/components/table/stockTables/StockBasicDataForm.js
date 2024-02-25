import React from "react";
import styles2 from "./StockDetails.module.scss";
import styles from "../../../../../styles/form.module.scss";

import CustomButton from "../../customButton";
import CustomInput from "../../form/CustomInput";
import { Form, Formik } from "formik";

const StockBasicDataForm = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    contact_no: "",
    nic: "",
    no: "",
    street: "",
    city: "",
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
      if (!/^[0-9]{9}[vVxX]$/.test(values.nic.toUpperCase())) {
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

    // if (!values.birthday) {
    //   errors.birthday = "Birthday is required";
    // }

    return errors;
  };

  const handleSubmit = (values) => {
    console.log("values - ", values);
    setTimeout(() => {}, 400);
  };

  return (
    <div className={styles2.basicDataFormWrapper}>
      <Formik
        initialValues={initialValues}
        validate={validation}
        onSubmit={handleSubmit}
        validateOnBlur
      >
        {({ isSubmitting, values, errors, touched, setFieldValue }) => (
          <Form>
            <div className={styles.inputWrapper}>
              <div className={[styles.groupInputs, styles.input100].join(" ")}>
                <CustomInput
                  placeHolder={"Hospital Name"}
                  id={"hospital_name"}
                  name={"hospital_name"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("hospital_name", value);
                  }}
                  default={values.hospital_name ?? ""}
                  error={errors.hospital_name}
                  type={"text"}
                  touched={touched}
                />
                <span>{errors.hospital_name}</span>
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <div className={[styles.groupInputs, styles.input50].join(" ")}>
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
                  touched={touched}
                />
                <span>{errors.contact_no}</span>
              </div>

              <div className={[styles.groupInputs, styles.input50].join(" ")}>
                <CustomInput
                  placeHolder={"Main Location"}
                  id={"hospital_location"}
                  name={"hospital_location"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("hospital_location", value);
                  }}
                  default={values.hospital_location ?? ""}
                  error={errors.hospital_location}
                  type={"text"}
                  touched={touched}
                />
                <span>{errors.hospital_location}</span>
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <div className={[styles.groupInputs, styles.input30].join(" ")}>
                <CustomInput
                  placeHolder={"No"}
                  id={"no"}
                  name={"no"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("no", value);
                  }}
                  default={values.no ?? ""}
                  error={errors.no}
                  type={"text"}
                  touched={touched}
                />
                <span>{errors.no}</span>
              </div>
              <div className={[styles.groupInputs, styles.input30].join(" ")}>
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
                  touched={touched}
                />
                <span>{errors.street}</span>
              </div>
              <div className={[styles.groupInputs, styles.input30].join(" ")}>
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
                  touched={touched}
                />
                <span>{errors.city}</span>
              </div>
            </div>

            {/* <div className={styles.inputWrapper}>
              <div className={[styles.groupInputs, styles.input50].join(" ")}>
                <div className={styles.mgn12}>
                  <CustomDropdown
                    dataset={sampleDropdownData}
                    placeHolder={"Select Gender"}
                    id={"gender"}
                    name={"gender"}
                    disabled={false}
                    getValue={(value) => {
                      console.log("drop - ", value);
                      setFieldValue("gender", value);
                    }}
                  />
                  <span>{errors.gender}</span>
                </div>
                <div>
                  <CustomDatePicker
                    placeholder={"Birthday"}
                    onDateChange={(date) => {
                      setFieldValue("birthday", date);
                    }}
                  />
                  <span>{errors.birthday}</span>
                </div>
              </div>
            </div> */}
            <div className={styles.submitBtnWrapper}>
              <CustomButton
                buttonText={"Save"}
                buttonType={"submit"}
                isDisabled={false}
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
export default StockBasicDataForm;
