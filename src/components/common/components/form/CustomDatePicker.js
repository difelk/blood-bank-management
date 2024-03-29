import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./CustomDatePicker.module.scss";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({
  placeholder,
  onDateChange,
  touched,
  defaultDate,
}) => {
  const [selectedDate, setSelectedDate] = useState(
    defaultDate ? new Date(defaultDate) : null
  );
  const [isBirthdaySelecting, setisBirthdaySelecting] = useState(false);

  useEffect(() => {
    onDateChange(selectedDate);
  }, [selectedDate]);

  return (
    <div className={styles.customDatePickerWrapper}>
      <div
        className={
          isBirthdaySelecting || selectedDate || defaultDate
            ? [styles.datepicker, styles.datepickerFocus].join(" ")
            : styles.datepicker
        }
      >
        <label
          className={
            isBirthdaySelecting || selectedDate || defaultDate
              ? [styles.placeholder, styles.onHoldPlaceHolder].join(" ")
              : styles.placeholder
          }
          htmlFor={"birthday"}
        >
          {placeholder}
        </label>
        <DatePicker
          id="birthday"
          selected={selectedDate ?? defaultDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          onFocus={() => {
            setisBirthdaySelecting(true);
            touched(true);
          }}
          onBlur={() => setisBirthdaySelecting(false)}
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;
