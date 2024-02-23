import React from "react";
import styles from "./CustomTable.module.scss";
import CustomButton from "../customButton";
import ViewMoreIcon from "../../../../assets/icons/svgs/ViewMore";

const CustomTable = ({ headers, datasets }) => {
  return (
    <table>
      <thead className={styles.tableHeader}>
        <tr className={styles.tableHeaderItems}>
          {headers?.map((header, index) => (
            <th
              key={index}
              colSpan={
                header === "Stock" ? Object.keys(datasets[0].stock).length : 1
              }
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {datasets.map((item, index) => (
          <tr key={index} className={styles.tableData}>
            <td>{item.hospitalName}</td>
            <td>{item.city}</td>
            {Object.keys(item.stock).map((bloodGroup, subIndex) => (
              <td key={subIndex}>{item.stock[bloodGroup]}</td>
            ))}
            <td>
              <CustomButton
                buttonType={"ICON"}
                iconsLeft={<ViewMoreIcon size={18} color={"#BBB6B4"} />}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
