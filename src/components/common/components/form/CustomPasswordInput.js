import React, { useEffect, useState } from "react";
import { useField, useFormikContext } from "formik";
import styles from "./CustomPasswordInput.module.scss";
import EyeIcon from "../../../../assets/icons/svgs/EyeIcon";

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
      <label htmlFor={props.id ?? "input"}>{props.placeHolder}</label>
      <input
        id={props.id ?? "input"}
        name={props.name ?? "input"}
        type={showPassword ? "text" : "password"}
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
      <label
        htmlFor={props.id ?? "input"}
        className={styles.eyeIcond}
        onClick={() => {
          setShowPassword(!showPassword);
          console.log("clicking");
        }}
      >
        <EyeIcon size={20} color={"#a2a2a2"} />
      </label>
    </div>
  );
};

export default CustomPasswordInput;
