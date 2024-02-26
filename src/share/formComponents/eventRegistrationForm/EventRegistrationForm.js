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

    if (!values.contact_no) {
      errors.contact_no = "Contact Number is required";
    } else if (!/^(0\d{9})$/.test(values.contact_no)) {
      errors.contact_no = "Invalid Contact Number";
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

    if (!values.event_name) {
      errors.event_name = "Event Name is required";
    } else if (!/^[^\d\s]{2,}/.test(values.event_name)) {
      errors.event_name = "Event Name should contain at least 2 letters";
    }

    if (!values.organization_name) {
      errors.organization_name = "Organization Name is required";
    } else if (!/^[^\d\s]{2,}/.test(values.organization_name)) {
      errors.organization_name =
        "Organization Name should contain at least 2 letters";
    }

    if (!values.venue) {
      errors.venue = "Venue is required";
    } else if (!/^[^\d\s]{3,}/.test(values.venue)) {
      errors.venue = "Venue contain at least 3 letters";
    }

    if (!values.start_date) {
      errors.start_date = "Start Date is required";
    } else {
      if (new Date(values.start_date) <= new Date()) {
        errors.start_date = "Start Date cannot be today or a past date";
      }
    }

    if (!values.end_date) {
      errors.end_date = "End Date is required";
    } else {
      if (new Date(values.end_date) < new Date(values.start_date)) {
        errors.end_date = "End Date must be same or after the Start Date";
      } else if (new Date(values.end_date) <= new Date()) {
        errors.end_date = "End Date cannot be today or a past date";
      }
    }

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
        {({
          isSubmitting,
          values,
          errors,
          touched,
          setFieldValue,
          setFieldTouched,
        }) => (
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
                  touched={(value) => setFieldTouched("event_name", value)}
                />
                <span>{touched.event_name ? errors.event_name : ""}</span>
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
                  touched={(value) =>
                    setFieldTouched("organization_name", value)
                  }
                />
                <span>
                  {touched.organization_name ? errors.organization_name : ""}
                </span>
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
                  touched={(value) => setFieldTouched("contact_no", value)}
                />
                <span>{touched.contact_no ? errors.contact_no : ""}</span>
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
                  touched={(value) => setFieldTouched("venue", value)}
                />
                <span>{touched.venue ? errors.venue : ""}</span>
              </div>
              <div className={[styles.groupInputs, styles.input30].join(" ")}>
                <div className={styles.dateDiv}>
                  <CustomDatePicker
                    placeholder={"Start Date"}
                    onDateChange={(date) => {
                      setFieldValue("start_date", date);
                    }}
                    touched={(value) => setFieldTouched("start_date", value)}
                  />
                  <span>{touched.start_date ? errors.start_date : ""}</span>
                </div>
              </div>
              <div className={[styles.groupInputs, styles.input30].join(" ")}>
                <div className={styles.dateDiv}>
                  <CustomDatePicker
                    placeholder={"End Date"}
                    onDateChange={(date) => {
                      setFieldValue("end_date", date);
                    }}
                    touched={(value) => setFieldTouched("end_date", value)}
                  />
                  <span>{touched.end_date ? errors.end_date : ""}</span>
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
                  touched={(value) => setFieldTouched("no", value)}
                />
                <span>{touched.no ? errors.no : ""}</span>
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
                  touched={(value) => setFieldTouched("street", value)}
                />
                <span>{touched.street ? errors.street : ""}</span>
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
                  touched={(value) => setFieldTouched("city", value)}
                />
                <span>{touched.city ? errors.city : ""}</span>
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
