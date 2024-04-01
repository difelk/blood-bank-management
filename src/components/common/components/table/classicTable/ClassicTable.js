import React, { useEffect, useState } from "react";
import styles from "./ClassicTable.module.scss";
import EmptyMessage from "../../../../../share/empty/Empty";
import NextIcon from "../../../../../assets/icons/svgs/NextIcon";
import PreviousIcon from "../../../../../assets/icons/svgs/PreviousIcon";
const ClassicTable = ({ tableHeader, dataset, actions, getSelected, form }) => {
  const [showDataSet, setShowDataSet] = useState([]);
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [paginationStat, setPaginationStat] = useState({
    startingPosition: 0,
    endPosition: 5,
  });

  useEffect(() => {
    setShowDataSet(dataset);
    handleDataShow(0, 5);
    setPaginationNumber(1);
    setPaginationStat({
      startingPosition: 0,
      endPosition: 5,
    });
  }, [dataset]);

  const handlePagination = (values) => {
    if (values === 1) {
      setPaginationStat((prevState) => ({
        ...prevState,
        startingPosition: prevState.startingPosition + 5,
        endPosition: prevState.endPosition + 5,
      }));
    } else if (values === -1) {
      setPaginationStat((prevState) => ({
        ...prevState,
        startingPosition: prevState.startingPosition - 5,
        endPosition: prevState.endPosition - 5,
      }));
    }

    setPaginationNumber((prev) => prev + values);
  };

  useEffect(() => {
    handleDataShow(paginationStat.startingPosition, paginationStat.endPosition);
  }, [paginationStat]);

  const handleDataShow = (starting, end) => {
    console.log("starting - ", starting);
    console.log("end - ", end);
    let newDataSet = [];
    for (let i = starting; i < end; i++) {
      if (dataset[i]) {
        newDataSet.push(dataset[i]);
      }
    }

    setShowDataSet(newDataSet);
  };

  return (
    <>
      {dataset.length ? (
        <table className={styles.table}>
          <thead>
            <tr>
              {tableHeader.map((head, index) => (
                <th style={{ width: head.width }} key={index}>
                  {head.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {showDataSet.map((donor, index) => (
              <tr key={index}>
                {Object.keys(donor).map((key) => (
                  <td key={key}>
                    <button
                      className={styles.noStylesBtn}
                      onClick={() => getSelected(donor)}
                    >
                      {donor[key]}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <EmptyMessage />
      )}
      <div className={styles.paginationWrapper}>
        <button
          className={styles.nextprevPagbtns}
          onClick={() => handlePagination(-1)}
          disabled={paginationNumber <= 1}
        >
          <PreviousIcon
            size={25}
            color={paginationNumber <= 1 ? "#BBB6B4" : "#2196F3"}
          />
        </button>
        <div
          // onClick={() => handlePagination()}
          className={styles.paginationNumberDisplay}
        >
          {paginationNumber}
        </div>
        <button
          className={styles.nextprevPagbtns}
          onClick={() => handlePagination(1)}
          disabled={dataset.length / 5 < paginationNumber}
        >
          <NextIcon
            size={25}
            color={
              dataset.length / 5 < paginationNumber ? "#BBB6B4" : "#2196F3"
            }
          />
        </button>
      </div>
    </>
  );
};

export default ClassicTable;
