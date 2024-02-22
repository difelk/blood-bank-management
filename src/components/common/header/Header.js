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

const Header = ({ isAdmin }) => {
  const location = useLocation();
  const [isAdminPanel, setisAdminPanel] = useState(false);
  useEffect(() => {
    const path = location.pathname;
    if (path.includes("admin")) {
      setisAdminPanel(true);
    } else {
      setisAdminPanel(false);
    }
  }, []);
  return (
    // Full header
    <div className={Styles.header}>
      {/* Login header box (Dark Green) */}
      {!isAdminPanel ? (
        <div className={Styles.loginHeader}>
          {/* Left box - with phone and email */}
          <div className={Styles.leftBox}>
            <div className={Styles.phoneBox}>
              <img className={Styles.image} src={phoneIconImg} alt="phone" />
              <p>+94011234567</p>
            </div>
            <div className={Styles.emailBox}>
              <img className={Styles.image} src={emailIconImg} alt="email" />
              <p>emailaddress@domain.lk</p>
            </div>
          </div>
          {/* Right box - with login/register and social media links images */}
          <div className={Styles.rightBox}>
            <div className={Styles.loginBox}>
              <img className={Styles.image} src={userIconImg} alt="pic" />
              <p>Login/Register</p>
            </div>
            <div className={Styles.socialMediaBox}>
              <a href="https://example.com">
                <img
                  className={Styles.image}
                  src={twitterIconImg}
                  alt="twitter"
                />
              </a>
              <a href="https://example.com">
                <img className={Styles.image} src={instaIconImg} alt="insta" />
              </a>
              <a href="https://example.com">
                <img className={Styles.image} src={fbIconImg} alt="fb" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* Pages links div */}
      {!isAdminPanel ? (
        <div className={Styles.pagesLinkHeader}>
          {/* Left div - logo */}
          <div className={Styles.leftLogoBox}>
            <img className={Styles.logoImage} src={logo} alt="Logo" />
            <p>BloodCentral Network</p>
          </div>
          {/* Right div - Links */}
          <div className={Styles.rightLinkBox}>
            <ul>
              <a href="/">Home</a>

              <a href="/events">Events</a>

              <a href="/news">News</a>

              <a href="/about">About</a>

              {isAdmin ? <a href="/admin">Admin</a> : ""}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
