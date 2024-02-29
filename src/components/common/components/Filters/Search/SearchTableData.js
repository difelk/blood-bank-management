import React, { useState, forwardRef, useImperativeHandle } from "react";
import styles from "./SearchTableData.module.scss";

const SearchTableData = forwardRef(
  (
    {
      placeholder,
      getOnChangeSearchValue,
      getOnClickedSearchValue,
      disabledSearch,
      disabledButton,
      name,
    },
    ref
  ) => {
    const [searchValue, setSearchValue] = useState("");

    useImperativeHandle(ref, () => ({
      handleResetFormSearch() {
        setSearchValue("");
      },
    }));

    const sendBackSearchValueOnClick = () => {
      getOnClickedSearchValue(searchValue);
    };

    return (
      <div className={styles.searchWrapper}>
        <div className={styles.searchBox}>
          <input
            name={name ?? "Search"}
            placeholder={placeholder ?? "Search..."}
            onChange={(e) => {
              getOnChangeSearchValue(e.target.value);
              setSearchValue(e.target.value);
            }}
            disabled={disabledSearch}
            value={searchValue} // Add this line to ensure the input value reflects the state
          />
          <button
            onClick={sendBackSearchValueOnClick}
            disabled={disabledButton}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
);
export default SearchTableData;
