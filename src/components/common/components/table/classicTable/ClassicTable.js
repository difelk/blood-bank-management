import React from "react";
import styles from "./ClassicTable.module.scss";
const ClassicTable = ({ tableHeader, dataset, actions }) => {
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
                <td key={key}>{donor[key]}</td>
              ))}
              {/* Add edit and delete buttons if needed */}
              {/* <td>
                <button>Edit</button>
                <button>Delete</button>
            </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ClassicTable;
