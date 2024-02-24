import React, { useState } from "react";
import CustomInput from "../common/components/form/CustomInput";
import styles from "./ProfileInformation.module.scss";
import { Formik, Form } from "formik";
import CustomButton from "../common/components/customButton";
import CustomDropdown from "../common/components/form/CustomDropdown";
import CustomDatePicker from "../common/components/form/CustomDatePicker";

const sampleDropdownData = [
  { key: 1, value: "somthing 1" },
  { key: 2, value: "apple" },
];

const ProfileInformation = () => {
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

  const validate = (values) => {
    const errors = {};

    console.log("values - ", values);

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
    <div>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
        validateOnBlur
      >
        {({ isSubmitting, values, errors, touched, setFieldValue }) => (
          <Form>
            <div className={styles.inputWrapper}>
              <div className={[styles.groupInputs, styles.input50].join(" ")}>
                <CustomInput
                  placeHolder={"First Name"}
                  id={"first_name"}
                  name={"first_name"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("first_name", value);
                  }}
                  default={initialValues.first_name ?? ""}
                  error={errors.first_name}
                  type={"text"}
                  touched={touched}
                />
                <span>{errors.first_name}</span>
              </div>
              <div className={[styles.groupInputs, styles.input50].join(" ")}>
                <CustomInput
                  placeHolder={"Last Name"}
                  id={"last_name"}
                  name={"last_name"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("last_name", value);
                  }}
                  default={initialValues.last_name ?? ""}
                  error={errors.last_name}
                  type={"text"}
                  touched={touched}
                />
                <span>{errors.last_name}</span>
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
                  default={initialValues.contact_no ?? ""}
                  error={errors.contact_no}
                  type={"text"}
                  touched={touched}
                />
                <span>{errors.contact_no}</span>
              </div>
              <div className={[styles.groupInputs, styles.input50].join(" ")}>
                <CustomInput
                  placeHolder={"NIC"}
                  id={"nic"}
                  name={"nic"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("nic", value);
                  }}
                  default={initialValues.nic ?? ""}
                  error={errors.nic}
                  type={"text"}
                  touched={touched}
                />
                <span>{errors.nic}</span>
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <div className={[styles.groupInputs, styles.input40].join(" ")}>
                <CustomInput
                  placeHolder={"No"}
                  id={"no"}
                  name={"no"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("no", value);
                  }}
                  default={initialValues.no ?? ""}
                  error={errors.no}
                  type={"text"}
                  touched={touched}
                />
                <span>{errors.no}</span>
              </div>
              <div className={[styles.groupInputs, styles.input40].join(" ")}>
                <CustomInput
                  placeHolder={"Street"}
                  id={"street"}
                  name={"street"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("street", value);
                  }}
                  default={initialValues.street ?? ""}
                  error={errors.street}
                  type={"text"}
                  touched={touched}
                />
                <span>{errors.street}</span>
              </div>
              <div className={[styles.groupInputs, styles.input40].join(" ")}>
                <CustomInput
                  placeHolder={"City"}
                  id={"city"}
                  name={"city"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("city", value);
                  }}
                  default={initialValues.city ?? ""}
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

export default ProfileInformation;
