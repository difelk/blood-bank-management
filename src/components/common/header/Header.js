import React, { useEffect, useState } from "react";
import Styles from "./Header.module.scss";
import phoneIconImg from "../../images/phone.png";
import emailIconImg from "../../images/mail.png";
import userIconImg from "../../images/user.png";
import twitterIconImg from "../../images/twitter.png";
import instaIconImg from "../../images/insta.png";
import fbIconImg from "../../images/fb.png";
import logo from "../../images/bloodLogo.png";
import { useLocation } from "react-router-dom";
import CustomModal from "../components/modal/CustomModal";
import LoginForm from "../../login/Login";

const Header = ({ isLoggedIn, isAdmin }) => {
  const location = useLocation();
  const [isAdminPanel, setisAdminPanel] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  useEffect(() => {
    const path = location.pathname;
    if (path.includes("admin")) {
      setisAdminPanel(true);
    } else {
      setisAdminPanel(false);
    }
  }, []);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <div className={Styles.header}>
      {!isAdminPanel ? (
        <div className={Styles.pagesLinkHeader}>
          <div className={Styles.leftLogoBox}>
            <img className={Styles.logoImage} src={logo} alt="Logo" />
            <p>BloodCentral Network</p>
          </div>

          <div className={Styles.rightLinkBox}>
            <ul>
              <a href="/">Home</a>

              {/* <a href="/events">Events</a> */}

              <a href="/news">Contact</a>

              <a href="/about">About</a>

              {isAdmin ? (
                <a href="/admin" className={Styles.adminUserLink}>
                  HI {isLoggedIn?.lastName}
                </a>
              ) : (
                <button
                  className={Styles.logUserBtn}
                  onClick={handleLoginClick}
                >
                  Login
                </button>
              )}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
      {isLoginModalOpen ? (
        <CustomModal
          open={setIsLoginModalOpen}
          title={`Login`}
          height={"350px"}
        >
          <LoginForm ismodalOpen={setIsLoginModalOpen} />
        </CustomModal>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
