import React, { useState } from "react";
import Styles from "./custome.module.scss";
// import ArrowDownIcon from "../../../assets/icons/svgs/ArrowIcon";
const CustomButton = ({
  buttonType,
  buttonText,
  iconsLeft,
  iconsRight,
  isDisabled,
}) => {
  // const [selectedValue, setSelectedValue] = useState(defultTxt ?? "");

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  //   return getDropdownValue(selectedValue);
  // };
  const getBtnStyle = () => {
    switch (buttonType) {
      case "primary":
        return Styles.primaryBtn;
      case "secondary":
        return Styles.secondaryBtn;
      default:
        return Styles.primaryBtn;
    }
  };
  const handleButtonClick = () => {};

  return (
    <button
      className={[Styles.customBtnWrapper, getBtnStyle()].join(" ")}
      onClick={handleButtonClick}
      disabled={isDisabled}
    >
      <div className={Styles.btnIconLeft}></div>
      <div>{buttonText ?? "click"}</div>
      <div className={Styles.btnIconRight}></div>
    </button>
  );
};
export default CustomButton;
