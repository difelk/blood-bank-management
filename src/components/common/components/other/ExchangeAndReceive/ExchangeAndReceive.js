import React from "react";
import styles from "./ExchangeAndReceive.module.scss";
import CustomButton from "../../customButton";
import ReceiveIcon from "../../../../../assets/icons/svgs/ReceiveIcon";
import SendIcon from "../../../../../assets/icons/svgs/SendIcon";

const ExchangeAndReceive = () => {
  return (
    <div className={styles.wrapperComp}>
      <div className={styles.btnWrapper}>
        <CustomButton
          buttonType={"BORDER_ONLY"}
          //   iconsLeft={<ReceiveIcon size={100} color={"#5C38FF"} />}
          buttonStyles={{
            backgroundColor: "transparent",
            padding: "12px",
            border: "1px solid #5C38FF",
            borderRadius: "4px",
          }}
          onClick={() => console.log("")}
        />
        <span>Received</span>
      </div>
      <div className={styles.btnWrapper}>
        <CustomButton
          buttonType={"BORDER_ONLY"}
          //   iconsLeft={<SendIcon size={100} color={"#5C38FF"} />}
          buttonStyles={{
            backgroundColor: "transparent",
            padding: "12px",
            border: "1px solid #5C38FF",
            borderRadius: "4px",
          }}
          onClick={() => console.log("")}
        />
        <span>Send</span>
      </div>
    </div>
  );
};
export default ExchangeAndReceive;
