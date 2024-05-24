import React, { useContext, useEffect, useState } from "react";
import styles from "./ExchangeAndReceive.module.scss";
import ClassicTable from "../../table/classicTable/ClassicTable";
import ReceiveForm from "./ReceiveForm";
import { GlobalContext } from "../../../../../contexts/ContextsProvider";

const tableHeader = [
  { name: "Hospital/Organization", width: "25%" },
  { name: "Requested Date", width: "25%" },
  { name: "Receive Date", width: "25%" },
  { name: "Qty", width: "25%" },
  { name: "Confirmation", width: "25%" },
];

const dataSet = [
  {
    Hospital: "Hospital A",
    RequestedDate: "2024-02-27",
    ReceiveDate: "2024-03-05",
    Qty: 10,
    Confirmation: "Pending",
  },
  {
    Hospital: "Hospital B",
    RequestedDate: "2024-02-28",
    ReceiveDate: "2024-03-06",
    Qty: 15,
    Confirmation: "Pending",
  },
  {
    Hospital: "Organization X",
    RequestedDate: "2024-03-01",
    ReceiveDate: "2024-03-08",
    Qty: 20,
    Confirmation: "Done",
  },
  {
    Hospital: "Organization Y",
    RequestedDate: "2024-03-02",
    ReceiveDate: "2024-03-09",
    Qty: 0,
    Confirmation: "Pending",
  },
  {
    Hospital: "Medical Center M",
    RequestedDate: "2024-03-03",
    ReceiveDate: "2024-03-10",
    Qty: 30,
    Confirmation: "Pending",
  },
  {
    Hospital: "Clinic N",
    RequestedDate: "2024-03-04",
    ReceiveDate: "2024-03-11",
    Qty: 35,
    Confirmation: "Pending",
  },
];

const ReceiveTable = ({ step }) => {
  const [selectedStock, setSelectedStock] = useState();
  const [showForm, setShowForm] = useState(false);
  const { setTheStockShareStep, getTheStockShareStep } =
    useContext(GlobalContext);

  useEffect(() => {
    if (selectedStock) {
      setTheStockShareStep(1.3, "UPDATE");
      step(1.2);
    } else {
      step(1);
    }
  }, [selectedStock]);

  const getFormUpdateStatus = (statues) => {
    setShowForm(statues);
  };
  return (
    <div className={styles.receiveTableWrapper}>
      {!selectedStock ? (
        <ClassicTable
          tableHeader={tableHeader}
          dataset={dataSet}
          getSelected={(value) => setSelectedStock(value)}
        />
      ) : (
        <ReceiveForm
          data={selectedStock}
          step={step}
          isSetToUpdate={getFormUpdateStatus}
          enableFormEdit={showForm}
          isUpdateForm={
            (getTheStockShareStep().currentStep === 1.3 ||
              getTheStockShareStep().currentStep === 1.4) &&
            getTheStockShareStep().currentForm === "UPDATE"
          }
        />
      )}
    </div>
  );
};

export default ReceiveTable;
