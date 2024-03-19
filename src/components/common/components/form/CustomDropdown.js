import React, { useEffect, useState } from "react";
import styles from "./CustomDropdown.module.scss";
import ArrowIcon from "../../../../assets/icons/svgs/ArrowIcon";
import { useFormikContext } from "formik";

const CustomDropdown = ({ placeHolder, dataset, name, defaultValue }) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [filteredDataSet, setFilteredDataSet] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [dropdownBlur, setDropdownBlur] = useState(false);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState("");

  const filterData = () => {
    if (!searchValue || !dropdownBlur) {
      setFilteredDataSet(dataset);
    } else {
      setFilteredDataSet(
        dataset.filter((item) =>
          item.value.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    filterData(dataset);
  }, [dataset, searchValue]);

  useEffect(() => {
    setSearchValue(defaultValue ?? "");
  }, []);

  const handleItemClick = (item) => {
    setSelectedDropdownItem(item);
    setSearchValue(item.value);
    setIsDropdownVisible(false);
    setFieldValue(name, item.value);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <div
        className={
          isDropdownVisible || searchValue
            ? [styles.inputWrapperOnFocus, styles.dropdown].join(" ")
            : styles.dropdown
        }
      >
        <label className={styles.dropdownPlaceHolder} htmlFor={name ?? "input"}>
          {placeHolder}
        </label>
        <input
          id={name}
          type="input"
          onFocus={() => {
            setIsDropdownVisible(true);
            setDropdownBlur(false);
          }}
          onBlur={() => {
            setIsDropdownVisible(false);
            setFieldTouched(name, true);
            setDropdownBlur(true);
          }}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setDropdownBlur(true);
          }}
          value={searchValue}
        />
        <label className={styles.dropdownArrow} htmlFor={name ?? "input"}>
          <ArrowIcon size={12} color={"#909090"} />
        </label>

        <div
          className={
            filteredDataSet.length && isDropdownVisible
              ? styles.dropdownItems
              : [styles.dropdownItems, styles.dropdownItemsHide].join(" ")
          }
        >
          {filteredDataSet.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => handleItemClick(item)}
            >
              {item.value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;
