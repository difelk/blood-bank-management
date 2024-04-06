import React, { useEffect, useState } from "react";
import styles from "./StockDetails.module.scss";
import CustomButton from "../../customButton";
import ViewMoreIcon from "../../../../../assets/icons/svgs/ViewMore";
import CustomModal from "../../modal/CustomModal";
import ClassicTable from "../classicTable/ClassicTable";
import EditIcon from "../../../../../assets/icons/svgs/EditIcon";
import StockBasicDataForm from "./StockBasicDataForm";
import DonorForm from "../donorTables/DonorForm";
import BackArrowIcon from "../../../../../assets/icons/svgs/BackArrowIcon";
import AddIcon from "../../../../../assets/icons/svgs/AddIcon";
import AddIcon2 from "../../../../../assets/icons/svgs/AddIcon2";
import donorService from "../../../../../api/services/donorService";
import DonorHistoryTable from "../donorTables/DonorHistoryTable";
import donationHistoryService from "../../../../../api/services/donationHistoryServic";
import NextIcon from "../../../../../assets/icons/svgs/NextIcon";
import PreviousIcon from "../../../../../assets/icons/svgs/PreviousIcon";

const StockDetails = ({ tableHeader, dataset, actionType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [editModeType, setEditModeType] = useState("");
  const [selectedDonor, setSelectedDonor] = useState({});
  const [stockDonors, setStockDonors] = useState([]);
  const [donors, setDonors] = useState([]);
  const [showDataSet, setShowDataSet] = useState([]);
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [paginationStat, setPaginationStat] = useState({
    startingPosition: 0,
    endPosition: 5,
  });

  const tableHeaderForDonor = [
    { name: "Donor NIC", width: "20%" },
    { name: "First Name", width: "20%" },
    { name: "Last Name", width: "20%" },
    { name: "Blood Type", width: "20%" },
    { name: "Qty", width: "20%" },

    // { name: "Action", width: "25%" },
  ];
  const datasetforDonor = [
    {
      nic: 12345798,
      firstName: "John",
      lastName: "Doe",
      bloodType: "O+",
      qty: "50%",
    },
    {
      nic: 98754321,
      firstName: "Ilmee",
      lastName: "desilva",
      bloodType: "A-",
      qty: "30%",
    },
    {
      nic: 98754321,
      firstName: "ranil",
      lastName: "wickramasinghe",
      bloodType: "A+",
      qty: "45%",
    },
  ];

  /** <td>123456789</td>
            <td>John Dsssssssssoe</td>
            <td>O+</td>
            <td>50%</td> */

  const getStockDonors = async (stockDate) => {
    console.log("stockDate - ", stockDate);

    const donationHistoryData =
      await donationHistoryService.getDonationHistoryByDate(stockDate);

    if (donationHistoryData && donationHistoryData.length) {
      let donorsOfTheStock = [];
      let donorData = [];
      let allDonors = [];
      await Promise.all(
        donationHistoryData.map(async (donor) => {
          donorData = await donorService.getDonorByNic(donor.donorNic);
          allDonors.push(donorData);
          donorsOfTheStock.push({
            nic: donorData.donorNic,
            firstName: donorData.firstName,
            lastName: donorData.lastName,
            bloodType: donorData.bloodType,
            qty: donationHistoryData.find(
              (items) => items.donorNic === donorData.donorNic
            ).quantity,
          });
        })
      );
      setDonors(allDonors);

      setStockDonors(donorsOfTheStock);
      console.log("donorsOfTheStock - ", donorsOfTheStock);
    }

    //pass nics to donor table and get donor details
  };

  const getStatusColor = (value) => {
    if (value <= 20) {
      return styles.codeRed;
    } else if (value > 20 && value <= 40) {
      return styles.codeOrange;
    } else if (value > 40 && value <= 60) return styles.codeBlue;
    else if (value > 60 && value < 80) {
      return styles.codeLightBlue;
    } else {
      return styles.codeIdeal;
    }
  };

  const getBloodType = (value) => {
    switch (value) {
      case "APLUS":
        return "A+";
      case "AMINUS":
        return "A-";
      case "BPLUS":
        return "B+";
      case "BMINUS":
        return "B-";
      case "OPLUS":
        return "0+";
      case "OMINUS":
        return "0-";
      case "ABPLUS":
        return "AB+";
      case "ABMINUS":
        return "AB-";
      default:
        return value;
    }
  };

  useEffect(() => {}, []);

  const ScrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    ScrollToTopButton();
  }, [isModalOpen]);

  const getTotalQty = (
    type1,
    type2,
    type3,
    type4,
    type5,
    type6,
    type7,
    type8
  ) => {
    return type1 + type2 + type3 + type4 + type5 + type6 + type7 + type8;
  };

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

  useEffect(() => {
    handleDataShow(paginationStat.startingPosition, paginationStat.endPosition);
  }, [paginationStat]);

  useEffect(() => {
    setShowDataSet(dataset);
    handleDataShow(0, 5);
    setPaginationNumber(1);
    setPaginationStat({
      startingPosition: 0,
      endPosition: 5,
    });
  }, [dataset]);

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
          <div className={styles.tableData} key={index + item.stockDate}>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[0].width }}
            >
              <p>{item.stockDate}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[1].width }}
            >
              <p>{item.category}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[2].width }}
            >
              <p
                className={[
                  styles.groupdataItem,
                  getStatusColor(item.aPositive),
                ].join(" ")}
                key={index + item.stockDate}
              >
                {getBloodType("APLUS")} {item.aPositive}
              </p>
              <p
                className={[
                  styles.groupdataItem,
                  getStatusColor(item.aNegative),
                ].join(" ")}
                key={index}
              >
                {getBloodType("AMINUS")} {item.aNegative}
              </p>
              <p
                className={[
                  styles.groupdataItem,
                  getStatusColor(item.bPositive),
                ].join(" ")}
                key={index}
              >
                {getBloodType("BPLUS")} {item.bPositive}
              </p>
              <p
                className={[
                  styles.groupdataItem,
                  getStatusColor(item.bNegative),
                ].join(" ")}
                key={index}
              >
                {getBloodType("BMINUS")} {item.bNegative}
              </p>
              <p
                className={[
                  styles.groupdataItem,
                  getStatusColor(item.oPositive),
                ].join(" ")}
                key={index}
              >
                {getBloodType("OPLUS")} {item.oPositive}
              </p>
              <p
                className={[
                  styles.groupdataItem,
                  getStatusColor(item.oNegative),
                ].join(" ")}
                key={index}
              >
                {getBloodType("OMINUS")} {item.oNegative}
              </p>
              <p
                className={[
                  styles.groupdataItem,
                  getStatusColor(item.abPositive),
                ].join(" ")}
                key={index}
              >
                {getBloodType("ABPLUS")} {item.abPositive}
              </p>
              {/* <p
                className={[
                  styles.groupdataItem,
                  getStatusColor("ABMINUS")
                ].join(" ")}
                key={index}
              >
                {getBloodType("ABMINUS")} {item.stock[bloodGroup]}
              </p> */}
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[3].width }}
            >
              <p>
                {getTotalQty(
                  item.aPositive,
                  item.aNegative,
                  item.bPositive,
                  item.bNegative,
                  item.oPositive,
                  item.oNegative,
                  item.abPositive,
                  0
                )}
              </p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[4].width }}
            >
              <CustomButton
                buttonType={"ICON"}
                iconsLeft={<ViewMoreIcon size={18} color={"#BBB6B4"} />}
                onClick={() => {
                  setIsModalOpen(true);
                  setSelectedItem(item);
                  getStockDonors(item.stockDate);
                  setEditModeType("");
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {isModalOpen ? (
        <CustomModal open={setIsModalOpen} title={"Stock Details"} width={600}>
          <div className={styles.hospitalData}>
            {!editModeType ? (
              <>
                <div className={styles.controllerBtns}>
                  <CustomButton
                    buttonText={"Edit Basic Data"}
                    buttonType={"EDIT_MODE"}
                    active={true}
                    isDisabled={true}
                    optionalTextColor={"WHITE"}
                    iconsLeft={<EditIcon size={15} color={"#ffffff"} />}
                    onClick={() => {
                      setEditModeType("BASIC");
                      setSelectedDonor({});
                    }}
                  />

                  <CustomButton
                    buttonText={"Edit Donor Data"}
                    buttonType={"EDIT_MODE"}
                    active={true}
                    isDisabled={true}
                    optionalTextColor={"WHITE"}
                    iconsLeft={<EditIcon size={15} color={"#ffffff"} />}
                    onClick={() => {
                      setEditModeType("DONOR");
                      setSelectedDonor({});
                    }}
                  />

                  <CustomButton
                    buttonText={"Add Donor"}
                    buttonType={"EDIT_MODE"}
                    active={true}
                    isDisabled={true}
                    optionalTextColor={"WHITE"}
                    iconsLeft={<AddIcon2 size={15} color={"#ffffff"} />}
                    onClick={() => {
                      setEditModeType("ADD");
                      setSelectedDonor({});
                    }}
                  />
                </div>
                <div className={styles.hospitalBasicData}>
                  <div className={styles.dflexRow}>
                    <p>Stock ID:</p>
                    <p>
                      {selectedItem.category.substring(0, 3) +
                        selectedItem.stockDate.replaceAll("-", "") ??
                        "10254784"}
                    </p>
                  </div>
                  <div className={styles.dflexRow}>
                    <p>Date:</p>
                    <p>{selectedItem.stockDate}</p>
                  </div>
                  <div className={styles.dflexRow}>
                    <p>Category:</p>
                    <p>{selectedItem.category ?? "Regular"}</p>
                  </div>
                  <div className={styles.dflexRow}>
                    <p>location:</p>
                    <p>{selectedItem.location ?? "Blood Bank Center"}</p>
                  </div>
                  <div className={styles.dflexRow}>
                    <p>qty:</p>
                    <p>
                      {getTotalQty(
                        selectedItem.aPositive,
                        selectedItem.aNegative,
                        selectedItem.bPositive,
                        selectedItem.bNegative,
                        selectedItem.oPositive,
                        selectedItem.oNegative,
                        selectedItem.abPositive,
                        0
                      ) + "ml" ?? "0"}
                    </p>
                  </div>
                </div>
                <div className={styles.centerText}>Donors List</div>
                <ClassicTable
                  tableHeader={tableHeaderForDonor}
                  dataset={stockDonors}
                  getSelected={(value) => {
                    setSelectedDonor(value);
                    setEditModeType("DONOR");
                  }}
                />
                {/* <div className={styles.hospitalBasicData}>
              {Object.keys(selectedHospital.stock).map(
                (bloodGroup, subIndex) => (
                  <div className={styles.dflexRow}>
                    <p>Blood Group</p>
                    <p>{selectedHospital.stock[bloodGroup]}</p>
                  </div>
                )
              )}
            </div> */}
              </>
            ) : (
              <div className={styles.subForm}>
                <div className={styles.subFormBtns}>
                  <CustomButton
                    buttonText={""}
                    buttonType={"EDIT_MODE"}
                    active={true}
                    isDisabled={false}
                    optionalTextColor={"WHITE"}
                    iconsLeft={<BackArrowIcon size={15} color={"#ffffff"} />}
                    onClick={() => setEditModeType("")}
                  />
                </div>

                {editModeType === "BASIC" ? (
                  <>
                    <StockBasicDataForm />
                  </>
                ) : editModeType === "ADD" ? (
                  <DonorForm
                    donor={[]}
                    isCreateDonor={true}
                    isAllowedFullAccess={false}
                  />
                ) : (
                  <>
                    {Object.keys(selectedDonor).length === 0 ? (
                      <div>
                        <p>Select a Donor to Edit</p>
                        <ClassicTable
                          tableHeader={tableHeaderForDonor}
                          dataset={datasetforDonor}
                          getSelected={(value) => setSelectedDonor(value)}
                        />
                      </div>
                    ) : (
                      <DonorForm donor={donors} />
                    )}
                  </>
                )}
              </div>
            )}
          </div>
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
export default StockDetails;
