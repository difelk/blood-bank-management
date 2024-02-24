import React, { useEffect, useRef, useState } from "react";
import Styles from "./custome.module.scss";
import ArrowDownIcon from "../../../assets/icons/svgs/ArrowIcon";
const NavCustomeDropdown = ({ getDropdownValue, dataset, icon, defultTxt }) => {
  const [selectedValue, setSelectedValue] = useState(defultTxt ?? "");
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDropDownItemClick = (item) => {
    getDropdownValue(item);
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={Styles.dropdownWrapper} ref={dropdownRef}>
      <button
        className={Styles.dropdown}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <p className={Styles.dropdownDispalyTxt}>{selectedValue}</p>
        <div className={Styles.dropdownIcon}>{icon}</div>
        {showDropdown ? (
          <div className={Styles.dropdownList}>
            {dataset.map((item) => (
              <button
                className={Styles.dropdownItem}
                onClick={() => handleDropDownItemClick(item)}
              >
                {item.value}
              </button>
            ))}
          </div>
        ) : (
          ""
        )}
      </button>
    </div>
  );
};
export default NavCustomeDropdown;
