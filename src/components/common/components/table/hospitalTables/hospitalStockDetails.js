import React, { useEffect, useState } from "react";
import styles from "./HospitalStockDetails.module.scss";
import CustomButton from "../../customButton";
import ViewMoreIcon from "../../../../../assets/icons/svgs/ViewMore";
import CustomModal from "../../modal/CustomModal";
import EditIcon from "../../../../../assets/icons/svgs/EditIcon";
import ClassicTable from "../classicTable/ClassicTable";
import BackArrowIcon from "../../../../../assets/icons/svgs/BackArrowIcon";
import DonorForm from "../donorTables/DonorForm";
import HospitalStockBasicDataForm from "./HospitalStockBasicDataForm";

const HospitalStockDetails = ({ tableHeader, dataset, actionType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState({});
  const [selectedItem, setSelectedItem] = useState({});
  const [editModeType, setEditModeType] = useState("");
  const [selectedDonor, setSelectedDonor] = useState({});

  const tableHeaderForDonor = [
    { name: "Donor NIC", width: "20%" },
    { name: "First Name", width: "20%" },
    { name: "Last Name", width: "20%" },
    { name: "Blood Type", width: "20%" },
    { name: "Quantity", width: "20%" },
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

  const ScrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    ScrollToTopButton();
  }, [isModalOpen]);

  return (
    <div className={styles.tableWrapper}>
      <div className={styles.tableHeader}>
        {tableHeader.map((header) => (
          <div
            className={styles.tableHeaderItem}
            style={{ width: header.width }}
          >
            <p>{header.name}</p>
          </div>
        ))}
      </div>
      <div className={styles.tableBody}>
        {dataset.map((item) => (
          <div className={styles.tableData}>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[0].width }}
            >
              <p>{item.date}</p>
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[1].width }}
            >
              <p>{item.category}</p>
            </div>
            {/* <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[2].width }}
            >
              <p>{item.category}</p>
            </div> */}
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[2].width }}
            >
              {Object.keys(item.stock).map((bloodGroup, subIndex) => (
                <p
                  className={[
                    styles.groupdataItem,
                    getStatusColor(item.stock[bloodGroup]),
                  ].join(" ")}
                >
                  {getBloodType(bloodGroup)} {item.stock[bloodGroup]}
                </p>
              ))}
            </div>
            <div
              className={styles.tableDataItem}
              style={{ width: tableHeader[3].width }}
            >
              <CustomButton
                buttonType={"ICON"}
                iconsLeft={<ViewMoreIcon size={18} color={"#BBB6B4"} />}
                onClick={() => {
                  setIsModalOpen(true);
                  setSelectedItem(item);
                  setEditModeType("");
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {isModalOpen ? (
        <CustomModal
          open={setIsModalOpen}
          title={"Hospital Stock Details"}
          width={600}
        >
          <div className={styles.hospitalData}>
            {!editModeType ? (
              <>
                <div className={styles.controllerBtns}>
                  <CustomButton
                    buttonText={"Edit Basic Data"}
                    buttonType={"EDIT_MODE"}
                    active={true}
                    isDisabled={false}
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
                    isDisabled={false}
                    optionalTextColor={"WHITE"}
                    iconsLeft={<EditIcon size={15} color={"#ffffff"} />}
                    onClick={() => {
                      setEditModeType("DONOR");
                      setSelectedDonor({});
                    }}
                  />
                </div>
                <div className={styles.hospitalBasicData}>
                  <div className={styles.dflexRow}>
                    <p>Stock ID:</p>
                    <p>{selectedItem.stockId ?? "10254784"}</p>
                  </div>
                  <div className={styles.dflexRow}>
                    <p>Date:</p>
                    <p>{selectedItem.date}</p>
                  </div>
                  <div className={styles.dflexRow}>
                    <p>Category:</p>
                    <p>{selectedItem.category ?? "Regular"}</p>
                  </div>
                  <div className={styles.dflexRow}>
                    <p>location:</p>
                    <p>{selectedItem.location ?? "Hospital 01"}</p>
                  </div>
                  <div className={styles.dflexRow}>
                    <p>qty:</p>
                    <p>{selectedItem.location ?? "80%"}</p>
                  </div>
                </div>
                <div className={styles.centerText}>Donors List</div>
                <ClassicTable
                  tableHeader={tableHeaderForDonor}
                  dataset={datasetforDonor}
                  getSelected={(value) => {
                    setSelectedDonor(value);
                    setEditModeType("DONOR");
                  }}
                />
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
                    <HospitalStockBasicDataForm />
                  </>
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
                      <DonorForm donor={selectedDonor} />
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
    </div>
  );
};
export default HospitalStockDetails;
