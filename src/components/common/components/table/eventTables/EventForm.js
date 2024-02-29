import React, { useState } from "react";
import styles from "../../../../../share/formComponents/eventRegistrationForm/EventRegistrationForm.module.scss";
import commonStyle from "../../../../../styles/common.module.scss";
import formStyles from "../../form/CustomForm.module.scss";
import CustomButton from "../../customButton";
import CustomInput from "../../form/CustomInput";
import { Form, Formik } from "formik";
import CustomDropdown from "../../form/CustomDropdown";
import CustomDatePicker from "../../form/CustomDatePicker";
import DeletePopUp from "../../modal/popups/DeletePopUp";

const status = [
  { key: 1, value: "In progress" },
  { key: 2, value: "Done" },
  { key: 3, value: "Hold" },
  { key: 4, value: "Pending" },
];

const EventForm = ({ event, isAllowedFullAccess, isCreateEvent }) => {
  const [showConfirmation, setshowConfirmation] = useState(false);
  const handleRemoveClick = (value) => {
    setshowConfirmation(false);
  };

  const handleDeleteClick = (value) => {
    setshowConfirmation(false);
  };

  const initialValues = {
    event_name: event.event_name ?? "",
    organization_name: event.organization_name ?? "",
    status: event.status ?? "",
    contact_no: event.contactNo ?? "",
    start_date: event.start_date ?? "",
    end_date: event.end_date ?? "",
    venue: event.venue ?? "",
    no: event.no ?? "",
    street: event.streetName ?? "",
    city: event.city ?? "",
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
  console.log("isAllowedFullAccess - ", isAllowedFullAccess);

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

            <div className={formStyles.inputWrapper}>
              <div
                className={[formStyles.groupInputs, formStyles.input50].join(
                  " "
                )}
              >
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
                  touched={(value) => setFieldTouched("organization_name", value)}
                />
                <span>{touched.organization_name ? errors.organization_name : ""}</span>
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

            <div className={styles.inputWrapper}>
            <div
                className={[
                  formStyles.d_flex,
                  formStyles.align_items_center,
                  formStyles.space_between,
                  formStyles.mtb_5,
                  styles.clearMargin,
                ].join(" ")}
              >
                 <div className={[styles.dateDiv]}>
                <CustomDropdown
                  dataset={status}
                  placeHolder={"Select Status"}
                  id={"status"}
                  name={"status"}
                  disabled={false}
                  defaultValue={initialValues.status}
                  getValue={(value) => {
                    setFieldValue("status", value);
                  }}
                  touched={(value) => setFieldTouched("status", value)}
                />
                <span>{touched.status ? errors.status : ""}</span>
                </div>
              </div>
            
              <div
                className={[formStyles.groupInputs, formStyles.input50].join(
                  " "
                )}
              >
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
              <div
                className={[formStyles.groupInputs, formStyles.input50].join(
                  " "
                )}
              >
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

            <div className={formStyles.inputWrapper}>
            <div
                className={[formStyles.groupInputs, formStyles.input100].join(
                  " "
                )}
              >
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
              {!isCreateEvent ? (
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
                              "Are you sure you want to remove this event from stock? "
                            }
                            subMessage={
                              "You can re-add the event by going back to the previous step and clicking the 'Add event' button."
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
export default EventForm;
