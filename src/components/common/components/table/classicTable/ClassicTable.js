import React from "react";
import styles from "./ClassicTable.module.scss";
const ClassicTable = ({ tableHeader, dataset, actions, getSelected }) => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            {tableHeader.map((head) => (
              <th style={{ width: head.width }}>{head.name}</th>
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
    </>
  );
};

export default ClassicTable;
