import React, { useState } from "react";
import styles from "./StockSend.module.scss";
import CustomButton from "../../../common/components/customButton";
import AddIcon from "../../../../assets/icons/svgs/AddIcon";
import ReceiveTable from "../../../common/components/other/ExchangeAndReceive/ReceiveTable";
import SendTable from "../../../common/components/other/ExchangeAndReceive/SendTable";
// import ReceivedIcon from "../../../../../assets/img/Received.png";
// import SendIcon from "../../../../../assets/img/Send.png";
// import CustomModal from "../../modal/CustomModal";
// import ExchangeTable from "./ExchangeTable";
// import ReceiveTable from "./ReceiveTable";
// import ReceiveIcon from "../../../../../assets/icons/svgs/ReceiveIcon";
// import SendIcon from "../../../../../assets/icons/svgs/SendIcon";
const StockSend = ({ step, stepName }) => {
  const [modalType, setModalType] = useState("");

  return (
    <div className={styles.wrapperComp}>
      {stepName === 1 || stepName === 2 ? (
        <div className={styles.modalAddBtnModal}>
          {/* <CustomButton
            buttonType={"CIRCLE_ACTIONS"}
            iconsLeft={<AddIcon size={12} color={"#FE5987"} />}
            onClick={() => {
              setModalType("ADD");
            }}
            optionalBackgroundColor={"#5585CC"}
          /> */}
        </div>
      ) : (
        ""
      )}
      <div>
        <SendTable step={step} />
      </div>
    </div>
  );
};
export default StockSend;
