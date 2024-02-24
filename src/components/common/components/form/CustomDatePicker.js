import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./CustomDatePicker.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ placeholder, onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isBirthdaySelecting, setisBirthdaySelecting] = useState(false);

  useEffect(() => {
    onDateChange(selectedDate);
  }, [selectedDate]);

  return (
    <div className={styles.customDatePickerWrapper}>
      <div className={styles.datepicker}>
        <label
          className={
            isBirthdaySelecting || selectedDate
              ? [styles.placeholder, styles.onHoldPlaceHolder].join(" ")
              : styles.placeholder
          }
        >
          {placeholder}
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          onFocus={() => setisBirthdaySelecting(true)}
          onBlur={() => setisBirthdaySelecting(false)}
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;
