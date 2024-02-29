import React, { useState, forwardRef, useImperativeHandle } from "react";
import styles from "./Filter.module.scss";
import commonStyles from "../../../../../styles/common.module.scss";
import FilterIcon from "../../../../../assets/icons/svgs/FilterIcon";
import CloseIcon from "../../../../../assets/icons/svgs/Close";

const Filter = forwardRef(({ filterOptions, getFilterOption }, ref) => {
  const [isFilterSelected, setIsFilterSelected] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleFilterItemClick = (value) => {
    setSelectedValue(value.value);
    setIsFilterSelected(false);
    getFilterOption(value);
  };
  useImperativeHandle(ref, () => ({
    resetFilter() {
      setSelectedValue("");
      setIsFilterSelected(false);
      getFilterOption({});
    },
  }));

  const reset = () => {
    setSelectedValue("");
    setIsFilterSelected(false);
    getFilterOption({});
  };

  return (
    <div className={styles.filterWrapper}>
      <div
        className={[commonStyles.d_flex, commonStyles.align_item_center].join(
          " "
        )}
      >
        <button
          className={styles.filterBtn}
          onClick={() => {
            setIsFilterSelected(!isFilterSelected);
          }}
        >
          <div
            className={[commonStyles.d_flex, commonStyles.space_between].join(
              " "
            )}
          >
            <p>Filter</p>
            <FilterIcon size={14} color={"#90A4AE"} />
          </div>
        </button>
        {selectedValue ? (
          <div
            className={[
              commonStyles.d_flex,
              commonStyles.space_between,
              styles.filteredValue,
            ].join(" ")}
          >
            <button onClick={() => reset({})}>
              <CloseIcon size={18} color={"#68B4CA"} />
            </button>
            <span>{selectedValue}</span>
          </div>
        ) : (
          ""
        )}
      </div>
      {isFilterSelected ? (
        <div className={styles.filterDropdown}>
          {filterOptions.map((option, index) => (
            <button onClick={() => handleFilterItemClick(option)} key={index}>
              {option.value}
            </button>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
});

export default Filter;
