import React, { useEffect, useState } from "react";
// import styles from "../userTables/UserTable.module.scss";
// import formStyles from "../../form/CustomForm.module.scss";
import styles from "../../../../../share/formComponents/userRegistrationForm/UserRegistrationForm.module.scss";
import commonStyle from "../../../../../styles/common.module.scss";
import formStyles from "../../form/CustomForm.module.scss";
import modalStyle from "../../../components/modal/CustomModal.module.scss";
import CustomButton from "../../customButton";
import CustomInput from "../../form/CustomInput";
import { Form, Formik } from "formik";
import CustomDropdown from "../../form/CustomDropdown";
import CustomDatePicker from "../../form/CustomDatePicker";
import CustomPasswordInput from "../../form/CustomPasswordInput";
import DeletePopUp from "../../modal/popups/DeletePopUp";
import UserService from "../../../../../api/services/userService";
import AlertBox from "../../../../../share/Alerts/AlertBox";
import CustomModal from "../../modal/CustomModal";
import PasswordReset from "../../form/passwordReset/PasswordReset";
import MyLoader from "../../loaders/MyLoader";
import ContentLoader from "react-content-loader";
import AttachmentModal from "../../modal/attachmentModal/AttachmentModal";
import FolderFillIcon from "../../../../../assets/icons/svgs/FolderFillIcon";

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

const userTypes = [
  { key: 1, value: "Admin" },
  { key: 2, value: "User" },
];

const hospitalType = [
  { key: 1, value: "Hospital1" },
  { key: 2, value: "Hospital2" },
];

const organizationTypes = [
  { key: 1, value: "Blood Bank" },
  { key: 2, value: "Hospital" },
];

const UserForm = ({ user, isAllowedFullAccess, isCreateUser, formChanged }) => {
  const [showConfirmation, setshowConfirmation] = useState(false);
  const [alertMsg, setAlertMsg] = useState({});
  const [loading, setLoading] = useState(false);
  const [isUsernameAlreadyExisting, setIsUsernameAlreadyExisting] =
    useState(false);
  const [isNICAlreadyExisting, setIsNICAlreadyExisting] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [showAttachments, setShowAttachments] = useState(false);

  const initialValues = {
    username: user.username ?? "",
    nic: user.nic ?? "",
    firstName: user.firstName ?? "",
    lastName: user.lastName ?? "",
    contactNo: user.contactNo ?? "",
    bloodType: user.bloodType ?? "",
    addressNo: user.addressNo ?? "",
    street: user.street ?? "",
    city: user.city ?? "",
    birthday: user.birthday ?? "",
    role: user.role ?? "",
    temp_pw: user.temp_pw ?? "",
    // confirm_temp_pw: user.confirm_temp_pw ?? "",
    password: user.password,
    recovery_email: user.recovery_email ?? "",
    organization: user.organization ?? "",
    organizationType: user.organizationType ?? "",
  };

  const validation = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "First Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(values.firstName)) {
      errors.firstName = "First Name must contain only letters and spaces";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(values.lastName)) {
      errors.lastName = "Last Name must contain only letters and spaces";
    }

    if (!values.contactNo) {
      errors.contactNo = "Contact Number is required";
    } else if (!/^(0\d{9})$/.test(values.contactNo)) {
      errors.contactNo = "Invalid Contact Number";
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
    if (!values.username) {
      errors.username = "Username is required";
    } else if (values.username.includes(" ")) {
      errors.username = "Username cannot contain spaces";
    } else if (values.username.length < 3) {
      errors.username = "Username must be at least 3 characters long";
    } else if (values.username.length > 12) {
      errors.username = "Username must be at most 12 characters long";
    }

    if (!values.addressNo) {
      errors.addressNo = "Address No is required";
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
    if (!values.bloodType) {
      errors.bloodType = "Blood type is required";
    }

    return errors;
  };

  const handleDeleteClick = async (value) => {
    try {
      const deleteRespond = await UserService.deleteUser(value.nic);
      if (deleteRespond.status === 200) {
        setAlertMsg({
          type: "SUCCESS",
          message: "User delete Successful",
          display: true,
        });
      } else {
        setAlertMsg({
          type: "ERROR",
          message: "User delete failed",
          display: true,
        });
      }
    } catch (e) {
      setAlertMsg({ type: "ERROR", message: "ERROR: " + e, display: true });
    }
    formChanged();
    setshowConfirmation(false);
  };

  const handleSubmit = async (values) => {
    let data = values;
    if (!values.password) {
      data = { ...data, password: user.password };
    }
    if (values.organizationType === "Blood Bank") {
      data = { ...data, organization: "" };
    }

    setLoading(true);
    setIsUsernameAlreadyExisting(false);
    setIsNICAlreadyExisting(false);
    try {
      const response = await UserService.updateUser(data);
      setAlertMsg({
        type: "SUCCESS",
        message: "User Update Successful",
        display: true,
      });
    } catch (e) {
      console.log("registration failed with : ", e);
      setAlertMsg("User Registration Failed");
      setAlertMsg({
        type: "ERROR",
        message: "User Registration Failed",
        display: true,
      });
    } finally {
      setLoading(false);
      formChanged();
    }
  };

  const handleUsernameValidation = async (value) => {
    try {
      if (value && value !== user.username) {
        const response = await UserService.getUserByUsername(value);

        if (Object.keys(response).length > 0) {
          setIsUsernameAlreadyExisting(true);
        } else {
          setIsUsernameAlreadyExisting(false);
        }
      }
    } catch (e) {
      console.log("response of user by username error");
    }
  };

  const handleNICValidation = async (value) => {
    try {
      if (value && value !== user.nic) {
        const response = await UserService.getUserByNic(value);

        if (Object.keys(response).length > 0) {
          setIsNICAlreadyExisting(true);
        } else {
          setIsNICAlreadyExisting(false);
        }
      }
    } catch (e) {
      console.log("response of user by nic error");
    }
  };

  const handleResetPasswordModal = (userData) => {
    setIsResetModalOpen(true);
  };

  return (
    <div className={formStyles.basicDataFormWrapper}>
      <div>
        {showAttachments && (
          <AttachmentModal
            modalVisibility={showAttachments}
            setModalVisibility={setShowAttachments}
            getNoteValue={(value) => console.log("note value - ", value)}
          />
        )}
        <div className={styles.docUpLoad}>
          <CustomButton
            buttonType={"CIRCLE_ACTIONS"}
            optionalBackgroundColor={"#E7DDE6"}
            hideShadows={true}
            iconsLeft={<FolderFillIcon size={30} color={"#0058F5"} />}
            isDisabled={false}
            active={true}
            onClick={() => setShowAttachments(true)}
          />
        </div>
      </div>
      {loading ? (
        <ContentLoader viewBox="0 0 500 550">
          <rect x="0" y="40" rx="4" ry="4" width="240" height="60" />
          <rect x="260" y="40" rx="4" ry="4" width="240" height="60" />
          <rect x="0" y="130" rx="4" ry="4" width="240" height="60" />
          <rect x="260" y="130" rx="4" ry="4" width="240" height="60" />

          <rect x="0" y="220" rx="4" ry="4" width="160" height="60" />
          <rect x="170" y="220" rx="4" ry="4" width="160" height="60" />
          <rect x="340" y="220" rx="4" ry="4" width="160" height="60" />

          <rect x="0" y="310" rx="4" ry="4" width="160" height="60" />
          <rect x="170" y="310" rx="4" ry="4" width="160" height="60" />
          <rect x="340" y="310" rx="4" ry="4" width="160" height="60" />

          <rect x="0" y="400" rx="4" ry="4" width="240" height="60" />
          <rect x="260" y="400" rx="4" ry="4" width="240" height="60" />

          <rect x="0" y="490" rx="4" ry="4" width="240" height="60" />
          <rect x="260" y="490" rx="4" ry="4" width="240" height="60" />
        </ContentLoader>
      ) : (
        <>
          <div className={modalStyle.alertBoxWrapper}>
            <AlertBox
              type={alertMsg.type}
              message={alertMsg.message}
              display={alertMsg.display}
            />
          </div>
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
                    className={[
                      formStyles.groupInputs,
                      formStyles.input50,
                    ].join(" ")}
                  >
                    <CustomInput
                      placeHolder={"User NIC"}
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
                      inputValueChnaged={(value) => handleNICValidation(value)}
                    />
                    <span>{touched.nic ? errors.nic : ""}</span>
                    <span>
                      {!errors.nic && isNICAlreadyExisting
                        ? "NIC Already Exists"
                        : ""}
                    </span>
                  </div>

                  <div
                    className={[
                      formStyles.groupInputs,
                      formStyles.input50,
                    ].join(" ")}
                  >
                    <CustomInput
                      placeHolder={"Username"}
                      id={"username"}
                      name={"username"}
                      disabled={false}
                      getValue={(value) => {
                        setFieldValue("username", value);
                      }}
                      default={values.username ?? ""}
                      error={errors.username}
                      type={"text"}
                      touched={(value) => {
                        setFieldTouched("username", value);
                      }}
                      inputValueChnaged={(value) =>
                        handleUsernameValidation(value)
                      }
                    />
                    <span>{touched.username ? errors.username : ""}</span>
                    <span>
                      {!errors.username && isUsernameAlreadyExisting
                        ? "Username Already Exists"
                        : ""}
                    </span>
                  </div>
                </div>

                <div className={formStyles.inputWrapper}>
                  <div
                    className={[
                      formStyles.groupInputs,
                      formStyles.input50,
                    ].join(" ")}
                  >
                    <CustomInput
                      placeHolder={"First Name"}
                      id={"firstName"}
                      name={"firstName"}
                      disabled={false}
                      getValue={(value) => {
                        setFieldValue("firstName", value);
                      }}
                      default={values.firstName ?? ""}
                      error={errors.firstName}
                      type={"text"}
                      touched={(value) => setFieldTouched("firstName", value)}
                    />
                    <span>{touched.firstName ? errors.firstName : ""}</span>
                  </div>

                  <div
                    className={[
                      formStyles.groupInputs,
                      formStyles.input50,
                    ].join(" ")}
                  >
                    <CustomInput
                      placeHolder={"Last Name"}
                      id={"lastName"}
                      name={"lastName"}
                      disabled={false}
                      getValue={(value) => {
                        setFieldValue("lastName", value);
                      }}
                      default={values.lastName ?? ""}
                      error={errors.lastName}
                      type={"text"}
                      touched={(value) => setFieldTouched("lastName", value)}
                    />
                    <span>{touched.lastName ? errors.lastName : ""}</span>
                  </div>
                </div>

                <div className={styles.inputWrapper}>
                  {/* <div
                className={[
                  formStyles.d_flex,
                  formStyles.align_items_center,
                  formStyles.space_between,
                  formStyles.mtb_5,
                ].join(" ")}
              > */}
                  <div
                    className={[
                      formStyles.groupInputs,
                      formStyles.input30,
                    ].join(" ")}
                  >
                    <div className={styles.dateDiv}>
                      <CustomDropdown
                        dataset={userTypes}
                        placeHolder={"Select User Type"}
                        id={"role"}
                        name={"role"}
                        disabled={false}
                        defaultValue={initialValues.role}
                        getValue={(value) => {
                          setFieldValue("role", value);
                        }}
                        touched={(value) => setFieldTouched("role", value)}
                      />
                      <span>{touched.role ? errors.role : ""}</span>
                    </div>
                  </div>

                  <div
                    className={[
                      formStyles.groupInputs,
                      formStyles.input30,
                    ].join(" ")}
                  >
                    <div className={styles.dateDiv}>
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
                    </div>
                  </div>
                  <div
                    className={[styles.groupInputs, styles.input30].join(" ")}
                  >
                    <div className={styles.dateDiv}>
                      <CustomDatePicker
                        placeholder={"Birthday"}
                        onDateChange={(date) => {
                          setFieldValue("birthday", date);
                        }}
                        touched={(value) => setFieldTouched("birthday", value)}
                        defaultDate={initialValues.birthday}
                      />
                      <span>{touched.birthday ? errors.birthday : ""}</span>
                    </div>
                  </div>
                </div>

                <div className={formStyles.inputWrapper}>
                  <div
                    className={[
                      formStyles.groupInputs,
                      formStyles.input30,
                    ].join(" ")}
                  >
                    <CustomInput
                      placeHolder={"Street No"}
                      id={"addressNo"}
                      name={"addressNo"}
                      disabled={false}
                      getValue={(value) => {
                        setFieldValue("addressNo", value);
                      }}
                      default={values.addressNo ?? ""}
                      error={errors.addressNo}
                      type={"text"}
                      touched={(value) => setFieldTouched("addressNo", value)}
                    />
                    <span>{touched.addressNo ? errors.addressNo : ""}</span>
                  </div>
                  <div
                    className={[
                      formStyles.groupInputs,
                      formStyles.input30,
                    ].join(" ")}
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
                    className={[
                      formStyles.groupInputs,
                      formStyles.input30,
                    ].join(" ")}
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

                <div className={formStyles.inputWrapper}>
                  <div
                    className={
                      !values.organization
                        ? [formStyles.groupInputs, formStyles.input50].join(" ")
                        : [formStyles.groupInputs, formStyles.input30].join(" ")
                    }
                  >
                    <CustomInput
                      placeHolder={"Contact No"}
                      id={"contactNo"}
                      name={"contactNo"}
                      disabled={false}
                      getValue={(value) => {
                        setFieldValue("contactNo", value);
                      }}
                      default={values.contactNo ?? ""}
                      error={errors.contactNo}
                      type={"text"}
                      touched={(value) => setFieldTouched("contactNo", value)}
                    />
                    <span>{touched.contactNo ? errors.contactNo : ""}</span>
                  </div>
                  <div
                    className={
                      !values.organization
                        ? [formStyles.groupInputs, formStyles.input50].join(" ")
                        : [formStyles.groupInputs, formStyles.input30].join(" ")
                    }
                  >
                    <div className={styles.dateDiv}>
                      <CustomDropdown
                        dataset={organizationTypes}
                        placeHolder={"Select Organization type"}
                        id={"organizationType"}
                        name={"organizationType"}
                        disabled={false}
                        defaultValue={initialValues.organizationType}
                        getValue={(value) => {
                          setFieldValue("organizationType", value);
                        }}
                        touched={(value) =>
                          setFieldTouched("organizationType", value)
                        }
                      />
                    </div>
                    <span>
                      {touched.organization ? errors.organization : ""}
                    </span>
                  </div>

                  {values.organizationType &&
                  values.organizationType !== "Blood Bank" ? (
                    <div
                      className={[
                        formStyles.groupInputs,
                        formStyles.input30,
                      ].join(" ")}
                    >
                      <div className={styles.dateDiv}>
                        <CustomDropdown
                          dataset={hospitalType}
                          placeHolder={"Select Organization"}
                          id={"organization"}
                          name={"organization"}
                          disabled={false}
                          defaultValue={initialValues.organization}
                          getValue={(value) => {
                            setFieldValue("organization", value);
                          }}
                          touched={(value) =>
                            setFieldTouched("organization", value)
                          }
                        />
                        <span>
                          {touched.organization ? errors.organization : ""}
                        </span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className={formStyles.inputWrapper}>
                  {isCreateUser ? (
                    <>
                      {" "}
                      <div
                        className={[
                          formStyles.groupInputs,
                          formStyles.input50,
                        ].join(" ")}
                      >
                        <CustomPasswordInput
                          placeHolder={"Reset Password"}
                          id={"temp_pw"}
                          name={"temp_pw"}
                          disabled={false}
                          getValue={(value) => {
                            setFieldValue("temp_pw", value);
                          }}
                          default={values.temp_pw ?? ""}
                          error={errors.temp_pw}
                          type={"password"}
                          touched={(value) => setFieldTouched("temp_pw", value)}
                        />
                        <span>{touched.temp_pw ? errors.temp_pw : ""}</span>
                      </div>
                      <div
                        className={[
                          formStyles.groupInputs,
                          formStyles.input50,
                        ].join(" ")}
                      >
                        <CustomPasswordInput
                          placeHolder={"Confirm Reset Password"}
                          id={"password"}
                          name={"password"}
                          disabled={false}
                          getValue={(value) => {
                            setFieldValue("password", value);
                          }}
                          default={values.password ?? ""}
                          error={errors.password}
                          type={"password"}
                          touched={(value) =>
                            setFieldTouched("password", value)
                          }
                        />
                        <span>{touched.password ? errors.password : ""}</span>
                      </div>{" "}
                    </>
                  ) : (
                    <CustomButton
                      buttonType={"LINK"}
                      buttonText={"Reset Password ?"}
                      onClick={() => handleResetPasswordModal(user)}
                    />
                  )}
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
                    isDisabled={
                      Object.keys(errors).length !== 0 ||
                      loading ||
                      isNICAlreadyExisting ||
                      isUsernameAlreadyExisting
                    }
                    active={true}
                    onClick={() => handleSubmit(values)}
                  />
                  {!isCreateUser ? (
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
                        ""
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </Form>
            )}
          </Formik>

          {isResetModalOpen ? (
            <CustomModal open={setIsResetModalOpen} title={`Reset Password`}>
              <div className={styles.hospitalData}>
                <PasswordReset user={user} />
              </div>
            </CustomModal>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};
export default UserForm;
