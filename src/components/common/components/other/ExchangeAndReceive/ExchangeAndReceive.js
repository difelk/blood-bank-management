import React, { useEffect, useState } from "react";
import styles from "./ExchangeAndReceive.module.scss";
// import ReceivedIcon from "../../../../../assets/img/Received.png";
// import SendIcon from "../../../../../assets/img/Send.png";
import CustomModal from "../../modal/CustomModal";
import ExchangeTable from "./ExchangeTable";
import ReceiveTable from "./ReceiveTable";
import ReceiveIcon from "../../../../../assets/icons/svgs/ReceiveIcon";
import SendIcon from "../../../../../assets/icons/svgs/SendIcon";
import StockReceive from "../../../../adminPanel/stockManagement/stockReceive/StockReceive";
import CustomButton from "../../customButton";
import BackArrowIcon from "../../../../../assets/icons/svgs/BackArrowIcon";
import StockSend from "../../../../adminPanel/stockManagement/stockSend/StockSend";
const ExchangeAndReceive = ({ step, stepName, addNewRequest }) => {
  const [exchangeReceiveType, setExchangeReceiveType] = useState("");

  useEffect(() => {
    console.log("stepName - ", stepName);
    if (stepName === 1.2) {
      setExchangeReceiveType("RECEIVED");
    } else if (exchangeReceiveType === "RECEIVED") {
      step(1);
    } else if (exchangeReceiveType === "SEND") {
      step(2);
    } else {
      step(0);
    }
  }, [exchangeReceiveType]);

  return (
    <>
      {!exchangeReceiveType ? (
        <div className={styles.wrapperComp}>
          <div className={styles.btnWrapper}>
            <button onClick={() => setExchangeReceiveType("RECEIVED")}>
              {/* <img src={ReceivedIcon} alt="Received Icon" /> */}
              <ReceiveIcon size={50} color={"#7880A1"} />
              <span>Received</span>
            </button>
          </div>
          <div className={styles.btnWrapper}>
            <button onClick={() => setExchangeReceiveType("SEND")}>
              <SendIcon size={50} color={"#7880A1"} />
              <span>Send</span>
            </button>
          </div>
          {/* {exchangeReceiveType ? (
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
              <StockReceive />
            ) : (
              <ExchangeTable />
            )}
          </CustomModal>
        ) : (
          ""
        )} */}
        </div>
      ) : (
        <div>
          <div className={styles.goBackIcon}>
            <CustomButton
              buttonType={"ICON"}
              iconsLeft={<BackArrowIcon size={15} color={"#696969"} />}
              onClick={() => setExchangeReceiveType("")}
            />
          </div>

          {exchangeReceiveType === "RECEIVED" ? (
            <StockReceive
              step={step}
              stepName={stepName}
              addNewRequest={addNewRequest}
            />
          ) : (
            <StockSend step={step} stepName={stepName} />
          )}
        </div>
      )}
    </>
  );
};
export default ExchangeAndReceive;
