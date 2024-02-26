import React, { useState } from "react";

import styles from "../eventRegistrationForm/EventRegistrationForm.module.scss";
import { Formik, Form } from "formik";

import CustomInput from "../../../components/common/components/form/CustomInput";
import CustomButton from "../../../components/common/components/customButton";
import CustomDropdown from "../../../components/common/components/form/CustomDropdown";
import CustomDatePicker from "../../../components/common/components/form/CustomDatePicker";

const sampleDropdownData = [
  { key: 1, value: "Government" },
  { key: 2, value: "Private" },
  { key: 3, value: "Semi-Government" },
];

const EventRegistrationForm = ({isAllowedFullAccess}) => {


  const InitialValues = {
    contact_no: "",
    no: "",
    street: "",
    city: "",
    hospital_location: "",
    hospital_name: "",
  };

  const validate = (values) => {
    const errors = {};

    return errors;
  };

  const handleSubmit = (values) => {
    console.log("values - ", values);
    setTimeout(() => {}, 400);
  };

  return (
    <div>
      <Formik
        initialValues={InitialValues}
        validate={validate}
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
                <div className={styles.mgn12}>
                  <CustomDropdown
                    dataset={sampleDropdownData}
                    placeHolder={"Select Sector"}
                    id={"sector"}
                    name={"sector"}
                    disabled={false}
                    getValue={(value) => {
                    //   console.log("drop - ", value);
                      setFieldValue("sector", value);
                    }}
                  />
                  <span>{errors.sector}</span>
                </div>
                {/* <div>
                  <CustomDatePicker
                    placeholder={"Birthday"}
                    onDateChange={(date) => {
                      setFieldValue("birthday", date);
                    }}
                  />
                  <span>{errors.birthday}</span>
                </div> */}
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

            
            <div
              className={[
                styles.submitBtnWrapper,
                styles.groupBtnsWrapper,
              ].join(" ")}
            >
              <CustomButton
                buttonText={"Save"}
                buttonType={"submit"}
                isDisabled={false}
                active={true}
                onClick={() => handleSubmit(values)}
              />
              {/* {isAllowedFullAccess ? (
                <CustomButton
                  buttonText={"Delete"}
                  buttonType={"DELETE"}
                  isDisabled={false}
                  active={true}
                  onClick={() => handleSubmit(values)}
                />
              ) : (
                ""
              )} */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EventRegistrationForm;
