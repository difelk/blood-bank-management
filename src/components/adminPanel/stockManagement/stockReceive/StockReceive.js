import React, { useContext, useEffect, useState } from "react";
import styles from "./StockReceive.module.scss";
import CustomButton from "../../../common/components/customButton";
import AddIcon from "../../../../assets/icons/svgs/AddIcon";
import ReceiveTable from "../../../common/components/other/ExchangeAndReceive/ReceiveTable";
import { GlobalContext } from "../../../../contexts/ContextsProvider";

const StockReceive = ({ step, stepName, addNewRequest }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setTheStockShareStep, getTheStockShareStep } =
    useContext(GlobalContext);

  useEffect(() => {
    if (!isModalOpen) {
      step(1);
    }
  }, [isModalOpen]);

  return (
    <>
      <div className={styles.wrapperComp}>
        {stepName === 1 || stepName === 2 ? (
          <div className={styles.modalAddBtnModal}>
            <CustomButton
              buttonType={"CIRCLE_ACTIONS"}
              iconsLeft={<AddIcon size={12} color={"#FE5987"} />}
              onClick={() => {
                addNewRequest(true);
                step(1.3);
                setTheStockShareStep(1.2, "CREATE");
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
