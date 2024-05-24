import React, { useEffect, useState } from "react";
import styles from "./StockReceive.module.scss";
import CustomButton from "../../../common/components/customButton";
import AddIcon from "../../../../assets/icons/svgs/AddIcon";
import ReceiveTable from "../../../common/components/other/ExchangeAndReceive/ReceiveTable";

const StockReceive = ({ step, stepName, addNewRequest }) => {
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
