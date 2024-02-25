import React, { useEffect, useState } from "react";
import styles from "./CustomDropdown.module.scss";
import ArrowIcon from "../../../../assets/icons/svgs/ArrowIcon";
import { useFormikContext } from "formik";

const CustomDropdown = ({ placeHolder, dataset, name, defaultValue }) => {
  const { setFieldValue } = useFormikContext();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [filteredDataSet, setFilteredDataSet] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedDropdownItem, setSelectedDropdownItem] = useState("");

  console.log("defaultValue - ", defaultValue);

  const filterData = () => {
    if (!searchValue) {
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
        <label className={styles.dropdownPlaceHolder}>{placeHolder}</label>
        <input
          onFocus={() => {
            setIsDropdownVisible(true);
            setSearchValue(undefined);
          }}
          onBlur={() => setIsDropdownVisible(false)}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          defaultValue={defaultValue ?? ""}
        />
        <label className={styles.dropdownArrow}>
          <ArrowIcon size={12} color={"#909090"} />
        </label>

        <div
          className={
            filteredDataSet && isDropdownVisible
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
