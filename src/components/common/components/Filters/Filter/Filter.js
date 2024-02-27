import React, { useState } from "react";
import styles from "./Filter.module.scss";
import commonStyles from "../../../../../styles/common.module.scss";
import FilterIcon from "../../../../../assets/icons/svgs/FilterIcon";
import CloseIcon from "../../../../../assets/icons/svgs/Close";

const Filter = ({ filterOptions, getFilterOption }) => {
  const [isFilterSelected, setIsFilterSelected] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleFilterItemClick = (value) => {
    setSelectedValue(value.value);
    setIsFilterSelected(false);
    getFilterOption(value);
  };

  const resetFilter = () => {
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
            <button onClick={() => resetFilter({})}>
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
          {filterOptions.map((option) => (
            <button onClick={() => handleFilterItemClick(option)}>
              {option.value}
            </button>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Filter;
