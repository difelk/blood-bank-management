import React, { useEffect, useState } from "react";
import CustomModal from "../../modal/CustomModal";
import CustomButton from "../../customButton";
import EditIcon from "../../../../../assets/icons/svgs/EditIcon";
import ClassicTable from "../classicTable/ClassicTable";
import BackArrowIcon from "../../../../../assets/icons/svgs/BackArrowIcon";
import DonorForm from "./DonorForm";
import styles from "./DonorHistoryTable.module.scss";
import AddIcon2 from "../../../../../assets/icons/svgs/AddIcon2";

const DonorHistoryTable = ({ tableHeader, donor, dataset }) => {
  const [selectedDonor, setSelectedDonor] = useState([]);

  // const tableHeaderForDonor = [
  //   { name: "Donor NIC", width: "20%" },
  //   { name: "First Name", width: "20%" },
  //   { name: "Last Name", width: "20%" },
  //   { name: "Blood Type", width: "20%" },
  //   { name: "Quantity", width: "20%" },
  // ];

useEffect(()=>{

  // donor's donation history - logic here

},[])

// console.log("donor - ", donor);
  return (
    <div>
      <ClassicTable
        tableHeader={tableHeader}
        dataset={selectedDonor}
        getSelected={(value) => setSelectedDonor(value)}
      />
      
    </div>
  );
};

export default DonorHistoryTable;
