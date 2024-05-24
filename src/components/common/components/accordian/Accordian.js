import React, { Children, useEffect, useState } from "react";
import styles from "./Accordian.module.scss";

const Accordian = ({
  children,
  width,
  headerColor,
  bodyColor,
  checkEnable,
  iconEnable,
  headerText,
  icon,
}) => {
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClickHeader = () => {
    if (checkEnable) {
      if (isCheckBoxChecked) {
        setIsExpanded(true);
        return;
      } else {
        setIsExpanded(false);
        return;
      }
    }
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (checkEnable) {
      if (isCheckBoxChecked) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    }
  }, [isCheckBoxChecked]);

  return (
    <>
      <div className={styles.wrapperComp}>
        <button
          className={styles.headerSection}
          style={{ backgroundColor: headerColor ?? "#ffffff" }}
          onClick={handleClickHeader}
        >
          <div className={styles.leftside}>
            {checkEnable && (
              <div>
                <input
                  type="checkbox"
                  id="bloodABNegCheck"
                  checked={isCheckBoxChecked}
                  onChange={(e) => setIsCheckBoxChecked(e.target.checked)}
                />
              </div>
            )}
            <div className={styles.headerTxt}>
              <p>{headerText}</p>
            </div>
          </div>
          <div className={styles.rightSide}>{iconEnable ?? icon ?? ""}</div>
        </button>
        <div
          className={
            isExpanded
              ? [styles.BodySection, styles.BodySectionOpen].join(" ")
              : styles.BodySection
          }
        >
          <div className={styles.bodyCont}>{children}</div>
        </div>
      </div>
    </>
  );
};
export default Accordian;
