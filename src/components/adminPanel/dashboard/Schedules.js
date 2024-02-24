import React, { useState } from "react";
import Styles from "./Dashboard.module.scss";
import CustomeDropdown from "../../common/components/customDropdown";
import ArrowDownIcon from "../../../assets/icons/svgs/ArrowIcon";
// import MailIcon from "../../../assets/icons/svgs/MailIcon";
import NotificationIcon from "../../../assets/icons/svgs/NotificationIcon";
import NoteIcon from "../../../assets/icons/svgs/NoteIcon";
import CustomModal from "../../common/components/modal/CustomModal";

const Schedules = () => {
  const [selectedDropdown, setSelectedDropdown] = useState("");

  const getUserProfileDrodown = (value) => {
    setSelectedDropdown(value);
    console.log("sehedules value - ", value);
  };

  const profileData = [{ key: "profile", value: "View Profile" }];
  const notifications = [
    { key: "profile", value: "new request from this hospital" },
    { key: "profile", value: "new request from this hospital 02" },
    { key: "profile", value: "new request from this hospital 03" },
  ];
  const noteDropdown = [{ key: "addNote", value: "Create Note" }];

  return (
    <>
      {selectedDropdown ? (
        <CustomModal
          open={setSelectedDropdown}
          title={selectedDropdown.value}
        />
      ) : (
        ""
      )}
      <div className={Styles.schedulesBarWrapper}>
        <div className={Styles.topProfileSection}>
          <div className={Styles.notificationDropdown1}>
            <CustomeDropdown
              getDropdownValue={getUserProfileDrodown}
              dataset={notifications}
              icon={<NotificationIcon size={20} color={"#4F50CB"} />}
              defultTxt={""}
            />
            <CustomeDropdown
              getDropdownValue={getUserProfileDrodown}
              dataset={noteDropdown}
              icon={<NoteIcon size={20} color={"#4F50CB"} />}
              defultTxt={""}
            />
          </div>
          <div className={Styles.profileNameDisplay}>
            {/* <p className={Styles.userName}>Mr. JOHN DOE</p> */}
            <div className={Styles.viewPrfilDet}>
              <CustomeDropdown
                getDropdownValue={getUserProfileDrodown}
                dataset={profileData}
                icon={<ArrowDownIcon size={12} color={"#fd4f86"} />}
                defultTxt={"Mr. JOHN DOE"}
              />
              {/* <p  className={Styles.user}>johndo@domain.com</p> */}
            </div>
          </div>
        </div>

        <div className={Styles.schCardWrapper}>
          <div className={Styles.eventsSummery}>
            <div
              className={[
                Styles.summeryChartTitle,
                Styles.ml_1,
                Styles.noMgn,
              ].join(" ")}
            >
              <h4>Event Summery</h4>
            </div>
            <div className={Styles.eventCardWrapper}>
              <div className={Styles.eventCard}>
                <h5>Event Name</h5>
                <div className={Styles.subDetails}>
                  <p> colombo 07</p>
                  <p>12-Dec-2024 08:30AM</p>
                </div>
              </div>
            </div>
            <div className={Styles.eventCardWrapper}>
              <div className={Styles.eventCard}>
                <h5>Event Name</h5>
                <div className={Styles.subDetails}>
                  <p>colombo 07</p>
                  <p>12-Dec-2024 08:30AM</p>
                </div>
              </div>
            </div>
            <div className={Styles.eventCardWrapper}>
              <div className={Styles.eventCard}>
                <h5>Event Name</h5>
                <div className={Styles.subDetails}>
                  <p>colombo 07</p>
                  <p>12-Dec-2024 08:30AM</p>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.stockSummery}>
            <div
              className={[
                Styles.summeryChartTitle,
                Styles.column,
                Styles.txtAlnLft,
              ].join(" ")}
            >
              <h4>Stock Summery</h4>
              <div className={Styles.stockWrapper}>
                <div className={Styles.stockItem}>
                  <div className={Styles.stockItemName}>A+</div>
                  <div className={Styles.stockItemGraph}>
                    <div className={Styles.graphBck}></div>
                    <div className={Styles.width90}></div>
                  </div>
                  <div className={Styles.stockItemPerc}>97%</div>
                </div>
                <div className={Styles.stockItem}>
                  <div className={Styles.stockItemName}>A-</div>
                  <div className={Styles.stockItemGraph}>
                    <div className={Styles.graphBck}></div>
                    <div className={Styles.width80}></div>
                  </div>
                  <div className={Styles.stockItemPerc}>82%</div>
                </div>
                <div className={Styles.stockItem}>
                  <div className={Styles.stockItemName}>B+</div>
                  <div className={Styles.stockItemGraph}>
                    <div className={Styles.graphBck}></div>
                    <div className={Styles.width90}></div>
                  </div>
                  <div className={Styles.stockItemPerc}>97%</div>
                </div>
                <div className={Styles.stockItem}>
                  <div className={Styles.stockItemName}>A+</div>
                  <div className={Styles.stockItemGraph}>
                    <div className={Styles.graphBck}></div>
                    <div className={Styles.width90}></div>
                  </div>
                  <div className={Styles.stockItemPerc}>97%</div>
                </div>
                <div className={Styles.stockItem}>
                  <div className={Styles.stockItemName}>A-</div>
                  <div className={Styles.stockItemGraph}>
                    <div className={Styles.graphBck}></div>
                    <div className={Styles.width80}></div>
                  </div>
                  <div className={Styles.stockItemPerc}>82%</div>
                </div>
                <div className={Styles.stockItem}>
                  <div className={Styles.stockItemName}>B+</div>
                  <div className={Styles.stockItemGraph}>
                    <div className={Styles.graphBck}></div>
                    <div className={Styles.width90}></div>
                  </div>
                  <div className={Styles.stockItemPerc}>97%</div>
                </div>

                <div className={Styles.stockItem}>
                  <div className={Styles.stockItemName}>A-</div>
                  <div className={Styles.stockItemGraph}>
                    <div className={Styles.graphBck}></div>
                    <div className={Styles.width80}></div>
                  </div>
                  <div className={Styles.stockItemPerc}>82%</div>
                </div>
                <div className={Styles.stockItem}>
                  <div className={Styles.stockItemName}>B+</div>
                  <div className={Styles.stockItemGraph}>
                    <div className={Styles.graphBck}></div>
                    <div className={Styles.width90}></div>
                  </div>
                  <div className={Styles.stockItemPerc}>97%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedules;
