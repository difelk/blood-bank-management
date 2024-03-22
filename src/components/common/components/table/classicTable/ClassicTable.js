import React from "react";
import styles from "./ClassicTable.module.scss";
import EmptyMessage from "../../../../../share/empty/Empty";
const ClassicTable = ({ tableHeader, dataset, actions, getSelected, form }) => {
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
            {dataset.map((donor, index) => (
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
    </>
  );
};

export default ClassicTable;
