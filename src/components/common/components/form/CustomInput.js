import React, { useEffect, useState } from "react";
import { useField, useFormikContext } from "formik";
import styles from "./CustomInput.module.scss";

const CustomInput = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props.name);
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");

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
        type={props.type ?? "text"}
        {...field}
        onChange={(e) => {
          handleInputChange(e);
          setInputValue(e.target.value);
        }}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        value={field.value ?? ""}
        disabled={props.disabled}
        className={meta.touched && meta.error ? styles.error : ""}
      />
    </div>
  );
};

export default CustomInput;
