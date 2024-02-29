import React, { useState } from "react";
import styles from "./ExchangeAndReceive.module.scss";
import ReceivedIcon from "../../../../../assets/img/Received.png";
import SendIcon from "../../../../../assets/img/Send.png";
import CustomModal from "../../modal/CustomModal";
import ExchangeTable from "./ExchangeTable";
import ReceiveTable from "./ReceiveTable";
const ExchangeAndReceive = () => {
  const [exchangeReceiveType, setExchangeReceiveType] = useState("");

  return (
    <div className={styles.wrapperComp}>
      <div className={styles.btnWrapper}>
        <button onClick={() => setExchangeReceiveType("RECEIVED")}>
          <img src={ReceivedIcon} alt="Received Icon" />
        </button>
        <span>Received</span>
      </div>
      <div className={styles.btnWrapper}>
        <button onClick={() => setExchangeReceiveType("SEND")}>
          <img src={SendIcon} alt="Send Icon" />
        </button>
        <span>Send</span>
      </div>
      {exchangeReceiveType ? (
        <CustomModal
          open={setExchangeReceiveType}
          title={
            exchangeReceiveType === "RECEIVED"
              ? "Stock Received"
              : "Stock Exchange"
          }
          width={600}
        >
          {exchangeReceiveType === "RECEIVED" ? (
            <ReceiveTable />
          ) : (
            <ExchangeTable />
          )}
        </CustomModal>
      ) : (
        ""
      )}
    </div>
  );
};
export default ExchangeAndReceive;
