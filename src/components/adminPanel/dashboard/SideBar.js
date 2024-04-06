import React, { useEffect, useState } from "react";
import Styles from "./Dashboard.module.scss";
import siteLogo from "../../images/bloodLogo.png";
import CustomButton from "../../common/components/customButton";
import { BUTTONTYPES, TAB } from "../../../share/enums";
import DashboardIcon from "../../../assets/icons/svgs/DashboardIcon";
import HomeIcon from "../../../assets/icons/svgs/HomeIcon";
import CustomModal from "../../common/components/modal/CustomModal";
import StockIcon from "../../../assets/icons/svgs/StockIcon";
import HospitalIcon from "../../../assets/icons/svgs/HospitalIcon";
import DonorIcon from "../../../assets/icons/svgs/DonorIcon";
import EventIcon from "../../../assets/icons/svgs/EventIcon";
import UserIcon from "../../../assets/icons/svgs/UserIcon";
import LogoutIcon from "../../../assets/icons/svgs/LogoutIcon";
import { useNavigate } from "react-router-dom";
import Logout from "../../login/Logout";
import { useHistory } from "react-router-dom";

const SideBar = ({ setCurrentPage }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage("Dashboard");
  }, []);

  const getSelectedNavigationOption = (value) => {
    setActiveTab(value);
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

  function redirectToHome() {
    navigate("/");
  }

  return (
    <>
      {isModalOpen ? (
        <CustomModal open={setIsModalOpen} title={"Logout"}>
          <Logout openModal={setIsModalOpen} />
        </CustomModal>
      ) : (
        ""
      )}
      <div className={Styles.sidebarContainer}>
        <div className={Styles.sidebarWrapper}>
          <div className={Styles.logowrapper}>
            <img src={siteLogo} alt="logo" />
            <p>BloodCentral Network</p>
          </div>
          {/* <div>
        <button>Registor</button>
      </div> */}
          <div className={Styles.navlinksWrapper}>
            <ul>
              <CustomButton
                buttonType={
                  activeTab === TAB.DASHBOARD
                    ? BUTTONTYPES.WHITE
                    : BUTTONTYPES.GHOST
                }
                buttonText={TAB.DASHBOARD}
                iconsLeft={
                  <DashboardIcon
                    size={25}
                    color={activeTab === TAB.DASHBOARD ? "#5c5dce" : "#a6a6ed"}
                  />
                }
                iconsRight={""}
                isDisabled={false}
                active={activeTab === TAB.DASHBOARD ? true : false}
                onClick={() => {
                  getSelectedNavigationOption(TAB.DASHBOARD);
                  setCurrentPage(TAB.DASHBOARD);
                }}
              />

              <CustomButton
                buttonType={
                  activeTab === TAB.STOCK_MANAGEMENT
                    ? BUTTONTYPES.WHITE
                    : BUTTONTYPES.GHOST
                }
                buttonText={TAB.STOCK_MANAGEMENT}
                iconsLeft={
                  <StockIcon
                    size={25}
                    color={
                      activeTab === TAB.STOCK_MANAGEMENT ? "#5c5dce" : "#a6a6ed"
                    }
                  />
                }
                iconsRight={""}
                isDisabled={false}
                active={activeTab === TAB.STOCK_MANAGEMENT ? true : false}
                onClick={() => {
                  getSelectedNavigationOption(TAB.STOCK_MANAGEMENT);
                  setCurrentPage(TAB.STOCK_MANAGEMENT);
                }}
              />

              <CustomButton
                buttonType={
                  activeTab === TAB.HOSPITAL_MANAGEMENT
                    ? BUTTONTYPES.WHITE
                    : BUTTONTYPES.GHOST
                }
                buttonText={TAB.HOSPITAL_MANAGEMENT}
                iconsLeft={
                  <HospitalIcon
                    size={25}
                    color={
                      activeTab === TAB.HOSPITAL_MANAGEMENT
                        ? "#5c5dce"
                        : "#a6a6ed"
                    }
                  />
                }
                iconsRight={""}
                isDisabled={false}
                active={activeTab === TAB.HOSPITAL_MANAGEMENT ? true : false}
                onClick={() => {
                  getSelectedNavigationOption(TAB.HOSPITAL_MANAGEMENT);
                  setCurrentPage(TAB.HOSPITAL_MANAGEMENT);
                }}
              />

              <CustomButton
                buttonType={
                  activeTab === TAB.DONOR_MANAGEMENT
                    ? BUTTONTYPES.WHITE
                    : BUTTONTYPES.GHOST
                }
                buttonText={TAB.DONOR_MANAGEMENT}
                iconsLeft={
                  <DonorIcon
                    size={25}
                    color={
                      activeTab === TAB.DONOR_MANAGEMENT ? "#5c5dce" : "#a6a6ed"
                    }
                  />
                }
                iconsRight={""}
                isDisabled={false}
                active={activeTab === TAB.DONOR_MANAGEMENT ? true : false}
                onClick={() => {
                  getSelectedNavigationOption(TAB.DONOR_MANAGEMENT);
                  setCurrentPage(TAB.DONOR_MANAGEMENT);
                }}
              />

              <CustomButton
                buttonType={
                  activeTab === TAB.EVENT_MANAGEMENT
                    ? BUTTONTYPES.WHITE
                    : BUTTONTYPES.GHOST
                }
                buttonText={TAB.EVENT_MANAGEMENT}
                iconsLeft={
                  <EventIcon
                    size={25}
                    color={
                      activeTab === TAB.EVENT_MANAGEMENT ? "#5c5dce" : "#a6a6ed"
                    }
                  />
                }
                iconsRight={""}
                isDisabled={false}
                active={activeTab === TAB.EVENT_MANAGEMENT ? true : false}
                onClick={() => {
                  getSelectedNavigationOption(TAB.EVENT_MANAGEMENT);
                  setCurrentPage(TAB.EVENT_MANAGEMENT);
                }}
              />

              <CustomButton
                buttonType={
                  activeTab === TAB.USER_MANAGEMENT
                    ? BUTTONTYPES.WHITE
                    : BUTTONTYPES.GHOST
                }
                buttonText={TAB.USER_MANAGEMENT}
                iconsLeft={
                  <UserIcon
                    size={25}
                    color={
                      activeTab === TAB.USER_MANAGEMENT ? "#5c5dce" : "#a6a6ed"
                    }
                  />
                }
                iconsRight={""}
                isDisabled={false}
                active={activeTab === TAB.USER_MANAGEMENT ? true : false}
                onClick={() => {
                  getSelectedNavigationOption(TAB.USER_MANAGEMENT);
                  setCurrentPage(TAB.USER_MANAGEMENT);
                }}
              />

              {/* <CustomButton
              buttonType={
                activeTab === TAB.SETTINGS
                  ? BUTTONTYPES.WHITE
                  : BUTTONTYPES.GHOST
              }
              buttonText={TAB.SETTINGS}
              iconsLeft={
                <DashboardIcon
                  size={25}
                  color={activeTab === TAB.SETTINGS ? "#5c5dce" : "#a6a6ed"}
                />
              }
              iconsRight={""}
              isDisabled={false}
              active={activeTab === TAB.SETTINGS ? true : false}
              onClick={() => getSelectedNavigationOption(TAB.SETTINGS)}
            /> */}

              <CustomButton
                buttonType={
                  activeTab === TAB.LOGOUT
                    ? BUTTONTYPES.WHITE
                    : BUTTONTYPES.GHOST
                }
                buttonText={TAB.LOGOUT}
                iconsLeft={
                  <LogoutIcon
                    size={25}
                    color={activeTab === TAB.LOGOUT ? "#5c5dce" : "#a6a6ed"}
                  />
                }
                iconsRight={""}
                isDisabled={false}
                active={activeTab === TAB.LOGOUT ? true : false}
                onClick={() => {
                  getSelectedNavigationOption(TAB.LOGOUT);

                  setIsModalOpen(true);
                }}
              />
            </ul>
          </div>
        </div>
        <div className={Styles.homeBtn}>
          <CustomButton
            buttonType={BUTTONTYPES.SQUAREICON}
            buttonText={""}
            iconsLeft={<HomeIcon size={30} color={"#4A49B9"} />}
            iconsRight={""}
            isDisabled={false}
            active={activeTab === TAB.SETTINGS ? true : false}
            onClick={() => {
              getSelectedNavigationOption(TAB.HOME);
              redirectToHome();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SideBar;
