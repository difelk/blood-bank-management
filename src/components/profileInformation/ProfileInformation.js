import React from "react";
import CustomInput from "../common/components/form/CustomInput";
import styles from "./ProfileInformation.module.scss";
import { Formik, Form } from "formik";
import CustomButton from "../common/components/customButton";
import CustomDropdown from "../common/components/form/CustomDropdown";

const sampleDropdownData = [
  { key: 1, value: "somthing 1" },
  { key: 2, value: "apple" },
];

const ProfileInformation = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    gender: "",
  };

  const validate = (values) => {
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

    return errors;
  };

  const handleSubmit = (values) => {
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
              </div>
            </div>
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
