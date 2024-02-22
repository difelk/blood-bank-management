import React, { useState } from "react";
import Styles from "./custome.module.scss";
import ArrowDownIcon from "../../../assets/icons/svgs/ArrowIcon";
const CustomeDropdown = ({ getDropdownValue, dataset, icon, defultTxt }) => {
  const [selectedValue, setSelectedValue] = useState(defultTxt ?? "");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    return getDropdownValue(selectedValue);
  };

  return (
    <div className={Styles.dropdownWrapper}>
      <p className={Styles.dropdownDispalyTxt}>{selectedValue}</p>
      <div className={Styles.dropdownIcon}>{icon}</div>
      {/* <select
        value={selectedValue}
        onChange={handleChange}
        className={Styles.customDropdownDrop}
      > */}
      {/* <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option> */}
      {/* </select> */}
    </div>
  );
};
export default CustomeDropdown;
