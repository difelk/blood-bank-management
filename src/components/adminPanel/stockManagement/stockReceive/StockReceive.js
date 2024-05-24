import React, { useEffect, useState } from "react";
import styles from "./StockReceive.module.scss";
import CustomButton from "../../../common/components/customButton";
import AddIcon from "../../../../assets/icons/svgs/AddIcon";
import ReceiveTable from "../../../common/components/other/ExchangeAndReceive/ReceiveTable";
import StockSend from "../stockSend/StockSend";
import ReceiveForm from "../../../common/components/other/ExchangeAndReceive/ReceiveForm";
import CustomModal from "../../../common/components/modal/CustomModal";
// import ReceivedIcon from "../../../../../assets/img/Received.png";
// import SendIcon from "../../../../../assets/img/Send.png";
// import CustomModal from "../../modal/CustomModal";
// import ExchangeTable from "./ExchangeTable";
// import ReceiveTable from "./ReceiveTable";
// import ReceiveIcon from "../../../../../assets/icons/svgs/ReceiveIcon";
// import SendIcon from "../../../../../assets/icons/svgs/SendIcon";
const StockReceive = ({ step, stepName, addNewRequest }) => {
  const [modalType, setModalType] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      step(1);
    }
  }, [isModalOpen]);

  return (
    <>
      {console.log("stepName - ", stepName)}
      <div className={styles.wrapperComp}>
        {stepName === 1 || stepName === 2 ? (
          <div className={styles.modalAddBtnModal}>
            <CustomButton
              buttonType={"CIRCLE_ACTIONS"}
              iconsLeft={<AddIcon size={12} color={"#FE5987"} />}
              onClick={() => {
                addNewRequest(true);
                step(1.3);
              }}
              optionalBackgroundColor={"#5585CC"}
            />
          </div>
        ) : (
          ""
        )}

        <div>
          <ReceiveTable step={step} addNewRequest={addNewRequest} />
        </div>
      </div>
    </>
  );
};
export default StockReceive;
