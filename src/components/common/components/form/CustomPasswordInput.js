import React, { useEffect, useState } from "react";
import { useField, useFormikContext } from "formik";
import styles from "./CustomPasswordInput.module.scss";

const CustomPasswordInput = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props.name);
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFieldValue(props.name, e.target.value);
    // field.onChange(e);
  };

  useEffect(() => {
    if (inputValue) {
      setInputFocus(true);
    }
  }, []);

  return (
    <div
      className={
        inputFocus || inputValue || field.value
          ? [styles.inputWrapper, styles.inputWrapperOnFocus].join(" ")
          : styles.inputWrapper
      }
    >
      <label>{props.placeHolder}</label>
      <input
        id={props.id ?? "input"}
        name={props.name ?? "input"}
        type={props.type ?? (showPassword ? "text" : "password")}
        {...field}
        onChange={(e) => {
          handleInputChange(e);
          setInputValue(e.target.value);
        }}
        onFocus={() => {
          setInputFocus(true);
          props.touched(true);
        }}
        onBlur={() => setInputFocus(false)}
        value={field.value ?? ""}
        disabled={props.disabled}
        className={meta.touched && meta.error ? styles.error : ""}
      />
    </div>
  );
};

export default CustomPasswordInput;