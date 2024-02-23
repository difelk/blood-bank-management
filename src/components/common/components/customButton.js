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
      case "secondaryRound":
        return Styles.secondaryBtnsemiRound;
      case "white":
        return Styles.whiteBtn;
      case "ghost":
        return Styles.ghostBtn;
      case "ICON":
        return Styles.iconBtn;
      case "SQicon":
        return Styles.SQiconBtn;
      default:
        return Styles.primaryBtn;
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
    >
      {iconsLeft ? <div className={Styles.btnIconLeft}>{iconsLeft}</div> : ""}
      {buttonText ? (
        <div
          className={
            active
              ? [Styles.activeBtnTxt, Styles.btnText].join(" ")
              : [Styles.btnText, Styles.deActiveBtnTxt].join(" ")
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
