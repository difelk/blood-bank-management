import React, { useState } from "react";
import styles from "./SearchTableData.module.scss";

const SearchTableData = ({
  placeholder,
  getOnChangeSearchValue,
  getOnClickedSearchValue,
  disabledSearch,
  disabledButton,
  name,
}) => {
  const [searchValue, setSearchValue] = useState("");
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
        />
        <button onClick={sendBackSearchValueOnClick} disabled={disabledButton}>
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchTableData;
