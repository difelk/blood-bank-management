import React, { useEffect, useState } from "react";
import { useField, useFormikContext } from "formik";
import styles from "./CustomInput.module.scss";

const CustomInput = ({ name, id, placeHolder, type, touched, disabled }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setFieldValue(name, e.target.value);
    // field.onChange(e);
  };

  useEffect(() => {
    if (inputValue) {
      setInputFocus(true);
    }
  }, []);

  // useEffect(() => {
  //   props.onInputChange(inputValue);
  // }, [inputValue]);

  return (
    <div
      className={
        inputFocus || inputValue || field.value
          ? [styles.inputWrapper, styles.inputWrapperOnFocus].join(" ")
          : styles.inputWrapper
      }
    >
      <label htmlFor={id ?? "input"}>{placeHolder}</label>
      <input
        id={id ?? "input"}
        name={name ?? "input"}
        type={type ?? "text"}
        {...field}
        onChange={(e) => {
          handleInputChange(e);
          setInputValue(e.target.value);
        }}
        onFocus={() => {
          setInputFocus(true);
          touched(true);
        }}
        onBlur={() => setInputFocus(false)}
        value={field.value ?? ""}
        disabled={disabled}
        className={meta.touched && meta.error ? styles.error : ""}
        autoComplete={name.includes("Username") ? "username" : ""}
      />
    </div>
  );
};

export default CustomInput;
