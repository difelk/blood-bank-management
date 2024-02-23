import React, { useState } from "react";
import Styles from "./Dashboard.module.scss";
import bloodDropdIcon from "../../../assets/img/bloodIcon.png";
import workingTasks from "../../../assets/img/work-order.png";
import CustomButton from "../../common/components/customButton";
import { BUTTONTYPES } from "../../../share/enums";
import CustomTable from "../../common/components/table/CustomTable";
import HospitalSummeryTable from "../../common/components/table/HospitalSummeryTable";
import CustomModal from "../../common/components/modal/CustomModal";

const TABLEHEADER = ["Hospital Name", "City", "Stock"];
const TABLEBODY = [
  {
    hospitalName: "Hospital 001",
    city: "Colombo",
    stock: {
      APLUS: 70,
      AMINUS: 88,
      BPLUS: 50,
      BMINUS: 87,
      OPLUS: 20,
      OMINUS: 43,
      ABPLUS: 38,
      ABMINUS: 78,
    },
  },
  {
    hospitalName: "Hospital 002",
    city: "Kandy",
    stock: {
      APLUS: 60,
      AMINUS: 75,
      BPLUS: 40,
      BMINUS: 65,
      OPLUS: 30,
      OMINUS: 35,
      ABPLUS: 25,
      ABMINUS: 60,
    },
  },
  {
    hospitalName: "Hospital 003",
    city: "Galle",
    stock: {
      APLUS: 80,
      AMINUS: 90,
      BPLUS: 55,
      BMINUS: 75,
      OPLUS: 25,
      OMINUS: 50,
      ABPLUS: 40,
      ABMINUS: 70,
    },
  },
  {
    hospitalName: "Hospital 004",
    city: "Jaffna",
    stock: {
      APLUS: 50,
      AMINUS: 70,
      BPLUS: 45,
      BMINUS: 60,
      OPLUS: 15,
      OMINUS: 30,
      ABPLUS: 30,
      ABMINUS: 55,
    },
  },
  {
    hospitalName: "Hospital 005",
    city: "Matara",
    stock: {
      APLUS: 65,
      AMINUS: 80,
      BPLUS: 60,
      BMINUS: 70,
      OPLUS: 30,
      OMINUS: 40,
      ABPLUS: 35,
      ABMINUS: 65,
    },
  },
];

const Content = ({ selectedPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={Styles.contentWrapper}>
      <div className={Styles.dashboardTitle}>
        <h4>{selectedPage}</h4>
      </div>
      <div className={Styles.displayChartTaskSch}>
        <div className={Styles.taskSummeryWrapper}>
          <div className={Styles.desc}>
            <h3>Hello there!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do et
              dolore magna aliqua.{" "}
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <div className={Styles.mt_5}>
              <CustomButton
                buttonType={"primary"}
                buttonText={"check out the requests"}
                iconsLeft={null}
                iconsRight={null}
                isDisabled={false}
                active={true}
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
          <div className={Styles.descImg}>
            <img src={workingTasks} alt="btn text" />
          </div>
        </div>
      </div>
      <div className={Styles.summeryChart}>
        <div className={Styles.summeryChartTitle}>
          <h4>Hospital Summery</h4>
          <CustomButton
            buttonType={"secondaryRound"}
            buttonText={"View All"}
            iconsLeft={null}
            iconsRight={null}
            isDisabled={false}
            active={true}
            onClick={(e) => console.log(e)}
          />
        </div>
        <div className={Styles.summeryTabelWrapper}>
          {/* <CustomTable
            headers={TABLEHEADER}
            datasets={TABLEBODY}
            actions={"VIEW_MORE"}
          /> */}
          <HospitalSummeryTable
            headers={TABLEHEADER}
            datasets={TABLEBODY}
            actions={"VIEW_MORE"}
          />
        </div>
      </div>
      {isModalOpen ? (
        <CustomModal open={setIsModalOpen} title={"Pending Requestes"} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Content;
