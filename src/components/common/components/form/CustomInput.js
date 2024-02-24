import React, { useState, useEffect } from "react";
import styles from "./CustomInput.module.scss";

const CustomInput = ({ placeHolder, disabled, name, id, getValue }) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (inputValue) {
      setInputFocus(true);
    }
  }, []); // Run only once when the component mounts

  console.log("inputValue - ", inputValue);
  return (
    <div
      className={
        inputFocus || inputValue
          ? [styles.inputWrapper, styles.inputWrapperOnFocus].join(" ")
          : styles.inputWrapper
      }
    >
      <label>{placeHolder}</label>
      <input
        id={id ?? "input"}
        name={name ?? "input"}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        onChange={(e) => {
          setInputValue(e.target.value);
          getValue(e.target.value);
        }}
        onInput={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default CustomInput;
