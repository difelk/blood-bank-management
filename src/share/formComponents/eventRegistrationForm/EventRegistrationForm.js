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

const EventRegistrationForm = ({ isAllowedFullAccess }) => {
  const InitialValues = {
    event_name: "",
    organization_name: "",
    contact_no: "",
    venue: "",
    start_date: "",
    end_date: "",
    no: "",
    street: "",
    city: "",
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
                  placeHolder={"Event Name"}
                  id={"event_name"}
                  name={"event_name"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("event_name", value);
                  }}
                  default={values.event_name ?? ""}
                  error={errors.event_name}
                  type={"text"}
                  touched={touched}
                />
                <span>{errors.event_name}</span>
              </div>
            </div>

            <div className={styles.inputWrapper}>
              <div className={[styles.groupInputs, styles.input50].join(" ")}>
                <CustomInput
                  placeHolder={"Organization Name"}
                  id={"organization_name"}
                  name={"organization_name"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("organization_name", value);
                  }}
                  default={values.organization_name ?? ""}
                  error={errors.organization_name}
                  type={"text"}
                  touched={touched}
                />
                <span>{errors.organization_name}</span>
              </div>
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
            </div>
            <div className={styles.inputWrapper}>
              <div className={[styles.groupInputs, styles.input30].join(" ")}>
                <CustomInput
                  placeHolder={"Venue"}
                  id={"venue"}
                  name={"venue"}
                  disabled={false}
                  getValue={(value) => {
                    setFieldValue("venue", value);
                  }}
                  default={values.venue ?? ""}
                  error={errors.venue}
                  type={"text"}
                  touched={touched}
                />
                <span>{errors.venue}</span>
              </div>
              <div className={[styles.groupInputs, styles.input30].join(" ")}>
                <div className={styles.dateDiv}>
                  <CustomDatePicker
                    placeholder={"Start Date"}
                    onDateChange={(date) => {
                      setFieldValue("start_date", date);
                    }}
                  />
                  <span>{errors.start_date}</span>
                </div>
              </div>
              <div className={[styles.groupInputs, styles.input30].join(" ")}>
                <div className={styles.dateDiv}>
                  <CustomDatePicker
                    placeholder={"End Date"}
                    onDateChange={(date) => {
                      setFieldValue("end_date", date);
                    }}
                  />
                  <span>{errors.end_date}</span>
                </div>
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
