import React, { useEffect, useState } from "react";
import styles from "./DonorTable.module.scss";
import CustomButton from "../../customButton";
import ViewMoreIcon from "../../../../../assets/icons/svgs/ViewMore";
import CustomModal from "../../modal/CustomModal";
import DonorForm from "./DonorForm";
import HistoryIcon from "../../../../../assets/icons/svgs/HistoryIcon";
// import ClassicTable from "../classicTable/ClassicTable";
import AddDonorIcon from "../../../../../assets/icons/svgs/AddDonorIcon";
import DonationForm from "./DonationForm";
// import DonationUnits from "../../form/donatedUnits/DonationUnits";
import DonorHistoryTable from "./DonorHistoryTable";
import DonationUnits from "../../form/donatedUnits/DonationUnits";
import PreviousIcon from "../../../../../assets/icons/svgs/PreviousIcon";
import NextIcon from "../../../../../assets/icons/svgs/NextIcon";

const donorHistorytableHeader = [
  // { name: "Donor NIC", width: "20%" },
  // { name: "First Name", width: "20%" },
  // { name: "Last Name", width: "20%" },
  { name: "Donation Date", width: "50%" },
  { name: "Quantity (ML)", width: "50%" },
];

const DonorTable = ({
  tableHeader,
  dataset,
  actionType,
  isAllowedFullAccess,
  formChanged,
}) => {
  const [modalType, setModalType] = useState("");
  const [selectedDonor, setSelectedDonor] = useState({});
  const [showDataSet, setShowDataSet] = useState([]);
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [paginationStat, setPaginationStat] = useState({
    startingPosition: 0,
    endPosition: 5,
  });
  const ScrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (modalType) {
      ScrollToTopButton();
    }
  }, [modalType]);

  useEffect(() => {
    setShowDataSet(dataset);
    handleDataShow(0, 5);
  }, []);

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
    <div className={styles.tableWrapper}>
      <div className={styles.tableHeader}>
        {tableHeader.map((header, index) => (
          <div
            className={styles.tableHeaderItem}
            style={{ width: header.width }}
            key={index}
          >
            <p>{header.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.tableBody}>
        {showDataSet.map((item, index) => (
          <div className={styles.tableData} key={index}>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[0].width }}
            >
              <p>{item.donorNic}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[1].width }}
            >
              <p>{item.firstName}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[2].width }}
            >
              <p>{item.lastName}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[3].width }}
            >
              <p>{item.bloodType}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[4].width }}
            >
              <CustomButton
                buttonType={"ICON"}
                iconsLeft={<ViewMoreIcon size={18} color={"#BBB6B4"} />}
                onClick={() => {
                  setModalType("VIEW");
                  setSelectedDonor(item);
                }}
              />
              <div />
              <CustomButton
                buttonType={"ICON"}
                iconsLeft={<HistoryIcon size={20} color={"#BBB6B4"} />}
                onClick={() => {
                  setModalType("HISTORY");
                  setSelectedDonor(item);
                }}
              />
              <div />
              <CustomButton
                buttonType={"ICON"}
                iconsLeft={<AddDonorIcon size={20} color={"#BBB6B4"} />}
                onClick={() => {
                  setModalType("DONATION");
                  setSelectedDonor(item);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {modalType === "VIEW" ? (
        <CustomModal open={setModalType} title={"Donor Details"}>
          <div className={styles.hospitalData}>
            <DonorForm
              donor={selectedDonor}
              isAllowedFullAccess={isAllowedFullAccess}
              formChanged={formChanged}
              isCreateDonor={false}
            />
          </div>
        </CustomModal>
      ) : modalType === "HISTORY" ? (
        <CustomModal
          open={setModalType}
          title={selectedDonor.firstName + " " + selectedDonor.lastName}
          width={600}
        >
          <DonorHistoryTable
            tableHeader={donorHistorytableHeader}
            donor={selectedDonor}
          />

          {/* <div className={styles.hospitalData}>
            <ClassicTable
              tableHeader={donorHistorytableHeader}
              dataset={[]}
              getSelected={() => {}}
            />
          </div> */}
        </CustomModal>
      ) : modalType === "DONATION" ? (
        <CustomModal
          open={setModalType}
          title={selectedDonor.firstName + " " + selectedDonor.lastName}
          width={300}
          height={430}
        >
          {/* <div className={styles.hospitalData}>
            <DonationForm data={selectedDonor}/>
          </div> */}

          <DonationUnits donor={selectedDonor} formChanged={formChanged} />
          {/* <div className={styles.hospitalData}>
            <ClassicTable
              tableHeader={donorHistorytableHeader}
              dataset={[]}
              getSelected={() => {}}
            />
          </div> */}
        </CustomModal>
      ) : (
        ""
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
    </div>
  );
};
export default DonorTable;
