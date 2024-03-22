import React, { useEffect, useState } from "react";
import CustomModal from "../../modal/CustomModal";
import CustomButton from "../../customButton";
import EditIcon from "../../../../../assets/icons/svgs/EditIcon";
import ClassicTable from "../classicTable/ClassicTable";
import BackArrowIcon from "../../../../../assets/icons/svgs/BackArrowIcon";
import DonorForm from "./DonorForm";
import styles from "./DonorHistoryTable.module.scss";
import AddIcon2 from "../../../../../assets/icons/svgs/AddIcon2";
import donationHistoryService from "../../../../../api/services/donationHistoryServic";
import { logDOM } from "@testing-library/react";
import DonationUnits from "../../form/donatedUnits/DonationUnits";

const DonorHistoryTable = ({ tableHeader, donor }) => {
  const [donorDataSet, setDonorDataSet] = useState([]);
  const [alertMsg, setAlertMsg] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedDonor, setSelectedDonor] = useState([]);
  const [isModalOpen, setIsmodalOpen] = useState([]);

  // console.log("donorDataSet - ", donorDataSet);
  useEffect(() => {
    const getDonationHistory = async () => {
      setLoading(true);
      try {
        if (donor) {
          const donorData = await donationHistoryService.findDonationByNic(
            donor.donorNic
          );
          // console.log("donorData - ", donorData);
          // console.log("donorData.donorNic - ", donorData.donorNic);
          const newDonorDataSet = donorData.map((item) => {
            return {
              // donorNic: donorData.donorNic,
              // firstName: item.firstName,
              // lastName: item.lastName,
              // bloodType: item.bloodType,
              donationDate: item.donationDate,
              quantity: item.quantity,
            };
          });
          // console.log("newDonorDataSet - ", newDonorDataSet);
          setDonorDataSet(newDonorDataSet);
        }
      } catch (e) {
        setAlertMsg({ type: "ERROR", message: "ERROR: " + e, display: true });
      } finally {
        setLoading(false);
      }
    };

    getDonationHistory();
  }, [donor]);

  // const data = [
  //   {
  //     donorNic: donorDataSet.donorNic,
  //     firstName: donorDataSet.firstName,
  //     lastName: donorDataSet.lastName,
  //     bloodType: donorDataSet.bloodType,
  //     units: donorDataSet.units,
  //   },
  // ];

  // console.log("donor - ", donor);
  console.log("selectedDonor - ", selectedDonor);
  return (
    <div className={styles.tableWrapper}>
      {!selectedDonor.length ? (
        <ClassicTable
          tableHeader={tableHeader}
          dataset={donorDataSet}
          getSelected={(value) => setSelectedDonor([value])}
        />
      ) : (
        <DonationUnits donor={selectedDonor} 
        isUpdateform={true}/>
      )}
    </div>
  );
};

export default DonorHistoryTable;
