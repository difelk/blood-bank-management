import React, { useEffect, useState } from "react";
import styles from "./ExchangeAndReceive.module.scss";
import styles2 from "../../../../../share/formComponents/userRegistrationForm/UserRegistrationForm.module.scss";
import formStyles from "../../form/CustomForm.module.scss";
import CustomButton from "../../customButton";
import EditIcon from "../../../../../assets/icons/svgs/EditIcon";
import { Form, Formik } from "formik";
import CustomInput from "../../form/CustomInput";
import Accordian from "../../accordian/Accordian";
import SearchTableData from "../../Filters/Search/SearchTableData";
import Filter from "../../Filters/Filter/Filter";
import NoteIcon from "../../../../../assets/icons/svgs/NoteIcon";
import AttachmentIcon from "../../../../../assets/icons/svgs/AttachmentIcon";
import NoteModal from "../../modal/noteModal/NoteModal";
import AttachmentModal from "../../modal/attachmentModal/AttachmentModal";
import CloseIcon from "../../../../../assets/icons/svgs/Close";
const SendForm = ({
  data,
  isSetToUpdate,
  enableFormEdit,
  addRequest,
  step,
  addNewRequest,
}) => {
  const [currentFormState, setCurrentFormState] = useState(1);
  const [showNote, setShowNote] = useState(false);
  const [showAttachments, setShowAttachments] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
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

  useEffect(() => {
    if (isSetToUpdate) {
      step(2.3);
    }
  }, [isSetToUpdate]);

  return (
    <>
      {!enableFormEdit && !addRequest ? (
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
            <p>Status:</p>
            <p>Pending</p>
          </div>
          <div className={styles.basicInfoSection}>
            <p>Qunatitiy:</p>
            <ul>
              <li>Blood Group A+ : 100Ml</li>
              <li>Blood Group B- : 100Ml</li>
            </ul>
          </div>
          {!enableFormEdit && !addRequest ? (
            <div className={styles.updateBtnWrapper}>
              <CustomButton
                buttonText={"Update"}
                buttonType={"submit"}
                active={true}
                isDisabled={false}
                optionalTextColor={"WHITE"}
                // iconsLeft={<EditIcon size={15} color={"#ffffff"} />}
                onClick={() => {
                  isSetToUpdate(true);
                  setIsUpdate(true);
                }}
              />
            </div>
          ) : (
            ""
          )}
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
                  {currentFormState === 1 ? (
                    <div
                      className={[styles2.groupInputs, styles2.input100].join(
                        " "
                      )}
                    >
                      <div className={styles.formWrapper}>
                        <h6 className={styles.headerTextLB}>
                          Select Blood Type and Quantity
                        </h6>

                        <div className={styles.checkBoxWInp}>
                          <div className={styles.selectionWrap}>
                            <div className={styles.checkboxWrapper}>
                              <input
                                type="checkbox"
                                id="bloodAPluesCheck"
                                checked={values.bloodAPluesCheck}
                                onChange={(e) =>
                                  setFieldValue(
                                    "bloodAPluesCheck",
                                    e.target.checked
                                  )
                                }
                              />
                              <label>Blood Group A+</label>
                            </div>
                            {values.bloodAPluesCheck && (
                              <div className={styles.bloodGropQtyInp}>
                                <CustomInput
                                  placeHolder={"Qunatitiy of Blood A+"}
                                  id={"bloodAPluesQty"}
                                  name={"bloodAPluesQty"}
                                  disabled={false}
                                  getValue={(value) => {
                                    setFieldValue("bloodAPluesQty", value);
                                  }}
                                  default={values.bloodAPluesQty ?? ""}
                                  error={errors.bloodAPluesQty}
                                  type={"number"}
                                  touched={(value) =>
                                    setFieldTouched("bloodAPluesQty", value)
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </div>

                        <div className={styles.checkBoxWInp}>
                          <div className={styles.selectionWrap}>
                            <div className={styles.checkboxWrapper}>
                              <input
                                type="checkbox"
                                id="bloodANegCheck"
                                checked={values.bloodANegCheck}
                                onChange={(e) =>
                                  setFieldValue(
                                    "bloodANegCheck",
                                    e.target.checked
                                  )
                                }
                              />
                              <label>Blood Group A-</label>
                            </div>
                            {values.bloodANegCheck && (
                              <div className={styles.bloodGropQtyInp}>
                                <CustomInput
                                  placeHolder={"Qunatitiy of Blood A-"}
                                  id={"bloodANegQty"}
                                  name={"bloodANegQty"}
                                  disabled={false}
                                  getValue={(value) => {
                                    setFieldValue("bloodANegQty", value);
                                  }}
                                  default={values.bloodANegQty ?? ""}
                                  error={errors.bloodANegQty}
                                  type={"text"}
                                  touched={(value) =>
                                    setFieldTouched("bloodANegQty", value)
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className={styles.checkBoxWInp}>
                          <div className={styles.selectionWrap}>
                            <div className={styles.checkboxWrapper}>
                              <input
                                type="checkbox"
                                id="bloodBpluesCheck"
                                checked={values.bloodBpluesCheck}
                                onChange={(e) =>
                                  setFieldValue(
                                    "bloodBpluesCheck",
                                    e.target.checked
                                  )
                                }
                              />
                              <label>Blood Group B+</label>
                            </div>
                            {values.bloodBpluesCheck && (
                              <div className={styles.bloodGropQtyInp}>
                                <CustomInput
                                  placeHolder={"Qunatitiy of Blood B+"}
                                  id={"bloodBpluesQty"}
                                  name={"bloodBpluesQty"}
                                  disabled={false}
                                  getValue={(value) => {
                                    setFieldValue("bloodBpluesQty", value);
                                  }}
                                  default={values.bloodBpluesQty ?? ""}
                                  error={errors.bloodBpluesQty}
                                  type={"text"}
                                  touched={(value) =>
                                    setFieldTouched("bloodBpluesQty", value)
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className={styles.checkBoxWInp}>
                          <div className={styles.selectionWrap}>
                            <div className={styles.checkboxWrapper}>
                              <input
                                type="checkbox"
                                id="bloodBNegCheck"
                                checked={values.bloodBNegCheck}
                                onChange={(e) =>
                                  setFieldValue(
                                    "bloodBNegCheck",
                                    e.target.checked
                                  )
                                }
                              />
                              <label>Blood Group B-</label>
                            </div>
                            {values.bloodBNegCheck && (
                              <div className={styles.bloodGropQtyInp}>
                                <CustomInput
                                  placeHolder={"Qunatitiy of Blood B-"}
                                  id={"bloodBNegQty"}
                                  name={"bloodBNegQty"}
                                  disabled={false}
                                  getValue={(value) => {
                                    setFieldValue("bloodBNegQty", value);
                                  }}
                                  default={values.bloodBNegQty ?? ""}
                                  error={errors.bloodBNegQty}
                                  type={"text"}
                                  touched={(value) =>
                                    setFieldTouched("bloodBNegQty", value)
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className={styles.checkBoxWInp}>
                          <div className={styles.selectionWrap}>
                            <div className={styles.checkboxWrapper}>
                              <input
                                type="checkbox"
                                id="bloodOPlusCheck"
                                checked={values.bloodOPlusCheck}
                                onChange={(e) =>
                                  setFieldValue(
                                    "bloodOPlusCheck",
                                    e.target.checked
                                  )
                                }
                              />
                              <label>Blood Group O+</label>
                            </div>
                            {values.bloodOPlusCheck && (
                              <div className={styles.bloodGropQtyInp}>
                                <CustomInput
                                  placeHolder={"Qunatitiy of Blood O+"}
                                  id={"bloodOPlusQty"}
                                  name={"bloodOPlusQty"}
                                  disabled={false}
                                  getValue={(value) => {
                                    setFieldValue("bloodOPlusQty", value);
                                  }}
                                  default={values.bloodOPlusQty ?? ""}
                                  error={errors.bloodOPlusQty}
                                  type={"text"}
                                  touched={(value) =>
                                    setFieldTouched("bloodOPlusQty", value)
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className={styles.checkBoxWInp}>
                          <div className={styles.selectionWrap}>
                            <div className={styles.checkboxWrapper}>
                              <input
                                type="checkbox"
                                id="bloodONegCheck"
                                checked={values.bloodONegCheck}
                                onChange={(e) =>
                                  setFieldValue(
                                    "bloodONegCheck",
                                    e.target.checked
                                  )
                                }
                              />
                              <label>Blood Group O-</label>
                            </div>
                            {values.bloodONegCheck && (
                              <div className={styles.bloodGropQtyInp}>
                                <CustomInput
                                  placeHolder={"Qunatitiy of Blood O-"}
                                  id={"bloodONegQty"}
                                  name={"bloodONegQty"}
                                  disabled={false}
                                  getValue={(value) => {
                                    setFieldValue("bloodONegQty", value);
                                  }}
                                  default={values.bloodONegQty ?? ""}
                                  error={errors.bloodONegQty}
                                  type={"text"}
                                  touched={(value) =>
                                    setFieldTouched("bloodONegQty", value)
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className={styles.checkBoxWInp}>
                          <div className={styles.selectionWrap}>
                            <div className={styles.checkboxWrapper}>
                              <input
                                type="checkbox"
                                id="bloodABPlusCheck"
                                checked={values.bloodABPlusCheck}
                                onChange={(e) =>
                                  setFieldValue(
                                    "bloodABPlusCheck",
                                    e.target.checked
                                  )
                                }
                              />
                              <label>Blood Group AB+</label>
                            </div>
                            {values.bloodABPlusCheck && (
                              <div className={styles.bloodGropQtyInp}>
                                <CustomInput
                                  placeHolder={"Qunatitiy of Blood AB+"}
                                  id={"bloodABPlusQty"}
                                  name={"bloodABPlusQty"}
                                  disabled={false}
                                  getValue={(value) => {
                                    setFieldValue("bloodABPlusQty", value);
                                  }}
                                  default={values.bloodABPlusQty ?? ""}
                                  error={errors.bloodABPlusQty}
                                  type={"text"}
                                  touched={(value) =>
                                    setFieldTouched("bloodABPlusQty", value)
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        <div className={styles.checkBoxWInp}>
                          <div className={styles.selectionWrap}>
                            <div className={styles.checkboxWrapper}>
                              <input
                                type="checkbox"
                                id="bloodABNegCheck"
                                checked={values.bloodABNegCheck}
                                onChange={(e) =>
                                  setFieldValue(
                                    "bloodABNegCheck",
                                    e.target.checked
                                  )
                                }
                              />
                              <label>Blood Group AB-</label>
                            </div>
                            {values.bloodABNegCheck && (
                              <div className={styles.bloodGropQtyInp}>
                                <CustomInput
                                  placeHolder={"Qunatitiy of Blood AB-"}
                                  id={"bloodABNegQty"}
                                  name={"bloodABNegQty"}
                                  disabled={false}
                                  getValue={(value) => {
                                    setFieldValue("bloodABNegQty", value);
                                  }}
                                  default={values.bloodABNegQty ?? ""}
                                  error={errors.bloodABNegQty}
                                  type={"text"}
                                  touched={(value) =>
                                    setFieldTouched("bloodABNegQty", value)
                                  }
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.hsptlSelection}>
                      <CustomButton
                        buttonType={"CARE_BEAR"}
                        onClick={() => console.log("care bear cliked")}
                        buttonText={""}
                      />
                      <div className={styles.title}>
                        <h6>
                          Available Hospital(s) According to stock selections
                        </h6>
                        <div className={styles.SelectedStockItems}>
                          <div className={styles.selectedQty}>
                            <p>
                              <span
                                className={styles.bloodGroupListItem}
                              ></span>
                              Blood Group A+{" "}
                              <span className={styles.qtyCount}>
                                &nbsp;&nbsp;120Ml
                              </span>
                            </p>
                          </div>
                          {/* <div className={styles.selectedQty}>
                            <p>
                              <span
                                className={styles.bloodGroupListItem}
                              ></span>
                              Blood Group A-
                              <span className={styles.qtyCount}>
                                {" "}
                                &nbsp;&nbsp;120Ml
                              </span>
                            </p>
                          </div> */}
                          {/* <div className={styles.selectedQty}>
                            <p>
                              <span
                                className={styles.bloodGroupListItem}
                              ></span>
                              Blood Group B+
                              <span className={styles.qtyCount}>
                                {" "}
                                &nbsp;&nbsp;120Ml
                              </span>
                            </p>
                          </div> */}
                          <div className={styles.selectedQty}>
                            <p>
                              <span
                                className={styles.bloodGroupListItem}
                              ></span>
                              Blood Group B-
                              <span className={styles.qtyCount}>
                                {" "}
                                &nbsp;&nbsp;120Ml
                              </span>
                            </p>
                          </div>
                          {/* <div className={styles.selectedQty}>
                            <p>
                              <span
                                className={styles.bloodGroupListItem}
                              ></span>
                              Blood Group O+
                              <span className={styles.qtyCount}>
                                {" "}
                                &nbsp;&nbsp;120Ml
                              </span>
                            </p>
                          </div> */}
                          {/* <div className={styles.selectedQty}>
                            <p>
                              <span
                                className={styles.bloodGroupListItem}
                              ></span>
                              Blood Group O-
                              <span className={styles.qtyCount}>
                                {" "}
                                &nbsp;&nbsp;120Ml
                              </span>
                            </p>
                          </div> */}
                          <div className={styles.selectedQty}>
                            <p>
                              <span
                                className={styles.bloodGroupListItem}
                              ></span>
                              Blood Group AB+
                              <span className={styles.qtyCount}>
                                {" "}
                                &nbsp;&nbsp;120Ml
                              </span>
                            </p>
                          </div>
                          <div className={styles.selectedQty}>
                            <p>
                              <span
                                className={styles.bloodGroupListItem}
                              ></span>
                              Blood Group AB-
                              <span className={styles.qtyCount}>
                                {" "}
                                &nbsp;&nbsp;120Ml
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.searchWrap}>
                        <Filter
                          filterOptions={[]}
                          getFilterOption={(value) => console.log(value)}
                        />
                        <SearchTableData
                          name={"Search"}
                          // placeholder={""}
                          getOnChangeSearchValue={(value) => console.log(value)}
                          getOnClickedSearchValue={(value) =>
                            console.log(value)
                          }
                        />
                      </div>
                      <Accordian
                        headerText={"Asiri Hospital - Colombo"}
                        checkEnable={true}
                      >
                        <div className={styles.wrapperHospitalForm}>
                          <div className={styles.hospitalBloddGroups}>
                            <div className={styles.selectionWrap}>
                              <div className={styles.checkboxWrapper}>
                                <input
                                  type="checkbox"
                                  id="bloodAPluesCheck"
                                  checked={values.bloodAPluesCheck}
                                  onChange={(e) =>
                                    setFieldValue(
                                      "bloodAPluesCheck",
                                      e.target.checked
                                    )
                                  }
                                />
                                <label>Blood Group A+</label>
                              </div>
                              {values.bloodAPluesCheck && (
                                <div className={styles.bloodGropQtyInp}>
                                  <CustomInput
                                    placeHolder={"QTY"}
                                    id={"bloodAPluesQty"}
                                    name={"bloodAPluesQty"}
                                    disabled={false}
                                    getValue={(value) => {
                                      setFieldValue("bloodAPluesQty", value);
                                    }}
                                    default={values.bloodAPluesQty ?? ""}
                                    error={errors.bloodAPluesQty}
                                    type={"number"}
                                    touched={(value) =>
                                      setFieldTouched("bloodAPluesQty", value)
                                    }
                                  />
                                </div>
                              )}
                            </div>

                            <div className={styles.checkBoxWInp}>
                              <div className={styles.selectionWrap}>
                                <div
                                  className={
                                    true
                                      ? [
                                          styles.checkboxWrapper,
                                          styles.checkboxWrapperDisabled,
                                        ].join(" ")
                                      : styles.checkboxWrapper
                                  }
                                >
                                  <input
                                    type="checkbox"
                                    id="bloodANegCheck"
                                    checked={values.bloodANegCheck}
                                    onChange={(e) =>
                                      setFieldValue(
                                        "bloodANegCheck",
                                        e.target.checked
                                      )
                                    }
                                    disabled={true}
                                  />
                                  <label>Blood Group A-</label>
                                </div>
                                {values.bloodANegCheck && (
                                  <div className={styles.bloodGropQtyInp}>
                                    <CustomInput
                                      placeHolder={"QTY"}
                                      id={"bloodANegQty"}
                                      name={"bloodANegQty"}
                                      disabled={false}
                                      getValue={(value) => {
                                        setFieldValue("bloodANegQty", value);
                                      }}
                                      default={values.bloodANegQty ?? ""}
                                      error={errors.bloodANegQty}
                                      type={"text"}
                                      touched={(value) =>
                                        setFieldTouched("bloodANegQty", value)
                                      }
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className={styles.checkBoxWInp}>
                              <div className={styles.selectionWrap}>
                                <div
                                  className={
                                    true
                                      ? [
                                          styles.checkboxWrapper,
                                          styles.checkboxWrapperDisabled,
                                        ].join(" ")
                                      : styles.checkboxWrapper
                                  }
                                >
                                  <input
                                    type="checkbox"
                                    id="bloodBpluesCheck"
                                    checked={values.bloodBpluesCheck}
                                    onChange={(e) =>
                                      setFieldValue(
                                        "bloodBpluesCheck",
                                        e.target.checked
                                      )
                                    }
                                    disabled={true}
                                  />
                                  <label>Blood Group B+</label>
                                </div>
                                {values.bloodBpluesCheck && (
                                  <div className={styles.bloodGropQtyInp}>
                                    <CustomInput
                                      placeHolder={"QTY"}
                                      id={"bloodBpluesQty"}
                                      name={"bloodBpluesQty"}
                                      disabled={false}
                                      getValue={(value) => {
                                        setFieldValue("bloodBpluesQty", value);
                                      }}
                                      default={values.bloodBpluesQty ?? ""}
                                      error={errors.bloodBpluesQty}
                                      type={"text"}
                                      touched={(value) =>
                                        setFieldTouched("bloodBpluesQty", value)
                                      }
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className={styles.checkBoxWInp}>
                              <div className={styles.selectionWrap}>
                                <div className={styles.checkboxWrapper}>
                                  <input
                                    type="checkbox"
                                    id="bloodBNegCheck"
                                    checked={values.bloodBNegCheck}
                                    onChange={(e) =>
                                      setFieldValue(
                                        "bloodBNegCheck",
                                        e.target.checked
                                      )
                                    }
                                  />
                                  <label>Blood Group B-</label>
                                </div>
                                {values.bloodBNegCheck && (
                                  <div className={styles.bloodGropQtyInp}>
                                    <CustomInput
                                      placeHolder={"QTY"}
                                      id={"bloodBNegQty"}
                                      name={"bloodBNegQty"}
                                      disabled={false}
                                      getValue={(value) => {
                                        setFieldValue("bloodBNegQty", value);
                                      }}
                                      default={values.bloodBNegQty ?? ""}
                                      error={errors.bloodBNegQty}
                                      type={"text"}
                                      touched={(value) =>
                                        setFieldTouched("bloodBNegQty", value)
                                      }
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className={styles.checkBoxWInp}>
                              <div className={styles.selectionWrap}>
                                <div
                                  className={
                                    true
                                      ? [
                                          styles.checkboxWrapper,
                                          styles.checkboxWrapperDisabled,
                                        ].join(" ")
                                      : styles.checkboxWrapper
                                  }
                                >
                                  <input
                                    type="checkbox"
                                    id="bloodOPlusCheck"
                                    checked={values.bloodOPlusCheck}
                                    onChange={(e) =>
                                      setFieldValue(
                                        "bloodOPlusCheck",
                                        e.target.checked
                                      )
                                    }
                                    disabled={true}
                                  />
                                  <label>Blood Group O+</label>
                                </div>
                                {values.bloodOPlusCheck && (
                                  <div className={styles.bloodGropQtyInp}>
                                    <CustomInput
                                      placeHolder={"QTY"}
                                      id={"bloodOPlusQty"}
                                      name={"bloodOPlusQty"}
                                      disabled={false}
                                      getValue={(value) => {
                                        setFieldValue("bloodOPlusQty", value);
                                      }}
                                      default={values.bloodOPlusQty ?? ""}
                                      error={errors.bloodOPlusQty}
                                      type={"text"}
                                      touched={(value) =>
                                        setFieldTouched("bloodOPlusQty", value)
                                      }
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className={styles.checkBoxWInp}>
                              <div className={styles.selectionWrap}>
                                <div
                                  className={
                                    true
                                      ? [
                                          styles.checkboxWrapper,
                                          styles.checkboxWrapperDisabled,
                                        ].join(" ")
                                      : styles.checkboxWrapper
                                  }
                                >
                                  <input
                                    type="checkbox"
                                    id="bloodONegCheck"
                                    checked={values.bloodONegCheck}
                                    onChange={(e) =>
                                      setFieldValue(
                                        "bloodONegCheck",
                                        e.target.checked
                                      )
                                    }
                                    disabled={true}
                                  />
                                  <label>Blood Group O-</label>
                                </div>
                                {values.bloodONegCheck && (
                                  <div className={styles.bloodGropQtyInp}>
                                    <CustomInput
                                      placeHolder={"QTY"}
                                      id={"bloodONegQty"}
                                      name={"bloodONegQty"}
                                      disabled={false}
                                      getValue={(value) => {
                                        setFieldValue("bloodONegQty", value);
                                      }}
                                      default={values.bloodONegQty ?? ""}
                                      error={errors.bloodONegQty}
                                      type={"text"}
                                      touched={(value) =>
                                        setFieldTouched("bloodONegQty", value)
                                      }
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className={styles.checkBoxWInp}>
                              <div className={styles.selectionWrap}>
                                <div className={styles.checkboxWrapper}>
                                  <input
                                    type="checkbox"
                                    id="bloodABPlusCheck"
                                    checked={values.bloodABPlusCheck}
                                    onChange={(e) =>
                                      setFieldValue(
                                        "bloodABPlusCheck",
                                        e.target.checked
                                      )
                                    }
                                  />
                                  <label>Blood Group AB+</label>
                                </div>
                                {values.bloodABPlusCheck && (
                                  <div className={styles.bloodGropQtyInp}>
                                    <CustomInput
                                      placeHolder={"QTY"}
                                      id={"bloodABPlusQty"}
                                      name={"bloodABPlusQty"}
                                      disabled={false}
                                      getValue={(value) => {
                                        setFieldValue("bloodABPlusQty", value);
                                      }}
                                      default={values.bloodABPlusQty ?? ""}
                                      error={errors.bloodABPlusQty}
                                      type={"text"}
                                      touched={(value) =>
                                        setFieldTouched("bloodABPlusQty", value)
                                      }
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className={styles.checkBoxWInp}>
                              <div className={styles.selectionWrap}>
                                <div className={styles.checkboxWrapper}>
                                  <input
                                    type="checkbox"
                                    id="bloodABNegCheck"
                                    checked={values.bloodABNegCheck}
                                    onChange={(e) =>
                                      setFieldValue(
                                        "bloodABNegCheck",
                                        e.target.checked
                                      )
                                    }
                                  />
                                  <label>Blood Group AB-</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.additionalWrp}>
                            <div className={styles.noteArea}>
                              <CustomButton
                                buttonType={"LEFT_ICON_CENTER_TEXT"}
                                iconsLeft={
                                  <NoteIcon size={30} color={"#ffffff"} />
                                }
                                buttonText={"add a Note"}
                                isDisabled={false}
                                active={true}
                                onClick={() => setShowNote(true)}
                              />
                            </div>
                            <div className={styles.docUpLoad}>
                              <CustomButton
                                buttonType={"LEFT_ICON_CENTER_TEXT"}
                                iconsLeft={
                                  <AttachmentIcon size={30} color={"#ffffff"} />
                                }
                                buttonText={"add an Attachments"}
                                isDisabled={false}
                                active={true}
                                onClick={() => setShowAttachments(true)}
                              />
                            </div>
                          </div>
                          {isUpdate && (
                            <div className={styles.controller}>
                              <CustomButton
                                buttonType={"DELETE"}
                                buttonText={"Delete Request"}
                                isDisabled={false}
                                active={true}
                                onClick={() => setShowAttachments(true)}
                              />
                            </div>
                          )}
                        </div>
                      </Accordian>
                      {showNote && (
                        <NoteModal
                          modalVisibility={showNote}
                          setModalVisibility={setShowNote}
                          getNoteValue={(value) =>
                            console.log("note value - ", value)
                          }
                        />
                      )}
                      {showAttachments && (
                        <AttachmentModal
                          modalVisibility={showAttachments}
                          setModalVisibility={setShowAttachments}
                          getNoteValue={(value) =>
                            console.log("note value - ", value)
                          }
                        />
                      )}
                      <Accordian
                        headerText={"Asiri Hospital - Colombo"}
                        checkEnable={true}
                      />
                    </div>
                  )}
                </div>
                {/* <CustomInput
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
                </div> */}

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
                {(currentFormState === 2 || !addRequest) && !isUpdate ? (
                  <div className={styles2.submitBtnWrapper}>
                    {currentFormState === 2 ? (
                      <>
                        {" "}
                        <CustomButton
                          buttonText={"Back"}
                          buttonType={"PREV"}
                          isDisabled={false}
                          active={true}
                          onClick={() => {
                            setCurrentFormState(1);
                            // step(1.2);
                            step(2.3);
                          }}
                        />
                        <div className={styles.mrgBtw4} />
                      </>
                    ) : null}
                    <CustomButton
                      buttonText={"Save"}
                      buttonType={"submit"}
                      isDisabled={false}
                      active={true}
                      onClick={() => handleSubmit(values)}
                    />
                  </div>
                ) : (
                  <div className={styles2.submitBtnWrapper}>
                    <>
                      <CustomButton
                        buttonText={"Next"}
                        buttonType={"button"}
                        isDisabled={false}
                        active={true}
                        onClick={() => {
                          setCurrentFormState(2);
                          // step(1);
                        }}
                      />
                    </>
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

export default SendForm;
