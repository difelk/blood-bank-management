import React from "react";
import Styles from "./Dashboard.module.scss";
import bloodDropdIcon from "../../../assets/img/bloodIcon.png";
import workingTasks from "../../../assets/img/work-order.png";
import CustomButton from "../../common/components/customButton";
import { BUTTONTYPES } from "../../../share/enums";

const Content = ({ selectedPage }) => {
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
                onClick={(e) => console.log(e)}
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
      </div>
    </div>
  );
};

export default Content;
