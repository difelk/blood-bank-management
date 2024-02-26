import React, { useState } from "react";
import Styles from "./custome.module.scss";
// import ArrowDownIcon from "../../../assets/icons/svgs/ArrowIcon";
const CustomButton = ({
  buttonType,
  buttonText,
  iconsLeft,
  iconsRight,
  active,
  isDisabled,
  onClick,
  optionalTextColor,
  optionalBackgroundColor,
}) => {
  // const [selectedValue, setSelectedValue] = useState(defultTxt ?? "");

  console.log("optionalBackgroundColor  = ", optionalBackgroundColor);
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
      case "submit":
        return Styles.submitBtn;
      case "DELETE":
        return Styles.deleteBtn;
      case "secondaryRound":
        return Styles.secondaryBtnsemiRound;
      case "white":
        return Styles.whiteBtn;
      case "ghost":
        return Styles.ghostBtn;
      case "BORDER_ONLY":
        return Styles.borderOnlyBtn;
      case "ICON":
        return Styles.iconBtn;
      case "CLOSE":
        return Styles.closeBtn;
      case "EDIT_MODE":
        return Styles.editModeBtn;
      case "SQicon":
        return Styles.SQiconBtn;
      default:
        return Styles.primaryBtn;
    }
  };

  const getTextColorClass = () => {
    switch (optionalTextColor) {
      case "WHITE":
        return Styles.whieText;
      default:
        return Styles.textNoraml;
    }
  };

  return (
    <button
      className={[
        active
          ? [Styles.customBtnWrapper, getBtnStyle(), Styles.active].join(" ")
          : Styles.customBtnWrapper,
        getBtnStyle(),
        Styles.deActive,
      ].join(" ")}
      onClick={(event) => onClick(event)}
      disabled={isDisabled}
      type={buttonType === "submit" ? "submit" : "button"}
      style={{ backgroundColor: optionalBackgroundColor ?? "" }}
    >
      {iconsLeft ? <div className={Styles.btnIconLeft}>{iconsLeft}</div> : ""}
      {buttonText ? (
        <div
          className={
            active
              ? [Styles.activeBtnTxt, Styles.btnText, getTextColorClass()].join(
                  " "
                )
              : [
                  Styles.btnText,
                  Styles.deActiveBtnTxt,
                  getTextColorClass(),
                ].join(" ")
          }
        >
          {buttonText ?? ""}
        </div>
      ) : (
        ""
      )}
      {iconsRight ? (
        <div className={Styles.btnIconRight}>
          <img src={iconsRight} alt="btn icon" />
        </div>
      ) : (
        ""
      )}
    </button>
  );
};
export default CustomButton;
