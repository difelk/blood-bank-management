import React, { useState } from "react";
import styles from "./ExchangeAndReceive.module.scss";
import styles2 from "../../../../../share/formComponents/userRegistrationForm/UserRegistrationForm.module.scss";
import formStyles from "../../form/CustomForm.module.scss";
import CustomButton from "../../customButton";
import EditIcon from "../../../../../assets/icons/svgs/EditIcon";
import { Form, Formik } from "formik";
import CustomInput from "../../form/CustomInput";
const ReceiveForm = ({ data }) => {
  const [showForm, setShowForm] = useState(false);

  const initialValues = {
    nic: "",
    first_name: "",
    last_name: "",
    contact_no: "",
    bloodType: "",
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
  };

  return (
    <>
      {!showForm ? (
        <div className={styles.updateBtnWrapper}>
          <CustomButton
            buttonText={"Update"}
            buttonType={"EDIT_MODE"}
            active={true}
            isDisabled={false}
            optionalTextColor={"WHITE"}
            iconsLeft={<EditIcon size={15} color={"#ffffff"} />}
            onClick={() => {
              setShowForm(true);
            }}
          />
        </div>
      ) : (
        ""
      )}
      {!showForm ? (
        <div className={styles.formWrapper}>
          <div className={styles.basicInfo}>
            <p>Stock ID:</p>
            <p>0141454745</p>
          </div>
          <div className={styles.basicInfo}>
            <p>Hospital:</p>
            <p>{data.Hospital}</p>
          </div>
          <div className={styles.basicInfo}>
            <p>Requested Date:</p>
            <p>{data.RequestedDate}</p>
          </div>
          <div className={styles.basicInfo}>
            <p>Received Date:</p>
            <p>{data.ReceiveDate}</p>
          </div>
          <div className={styles.basicInfo}>
            <p>qty:</p>
            <p>{data.Qty}</p>
          </div>
        </div>
      ) : (
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
                <div className={styles2.inputWrapper}>
                  <div
                    className={[styles2.groupInputs, styles2.input100].join(
                      " "
                    )}
                  >
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
                      touched={(value) =>
                        setFieldTouched("hospital_name", value)
                      }
                    />
                    <span>
                      {touched.hospital_name ? errors.hospital_name : ""}
                    </span>
                  </div>
                </div>

                <div className={styles2.inputWrapper}>
                  <div
                    className={[styles2.groupInputs, styles2.input50].join(" ")}
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
                    className={[styles2.groupInputs, styles2.input50].join(" ")}
                  >
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
                      touched={(value) =>
                        setFieldTouched("hospital_location", value)
                      }
                    />
                    <span>
                      {touched.hospital_location
                        ? errors.hospital_location
                        : ""}
                    </span>
                  </div>
                </div>

                <div className={styles2.inputWrapper}>
                  <div
                    className={[styles2.groupInputs, styles2.input30].join(" ")}
                  >
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
                  <div
                    className={[styles2.groupInputs, styles2.input30].join(" ")}
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
                    className={[styles2.groupInputs, styles2.input30].join(" ")}
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
                <div className={styles2.submitBtnWrapper}>
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
      )}
    </>
  );
};

export default ReceiveForm;
