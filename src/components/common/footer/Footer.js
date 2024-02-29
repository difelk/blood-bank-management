import React from "react";
import Styles from "./Footer.module.scss";
import userIconImg from "../../images/user.png";
import twitterIconImg from "../../images/twitter.png";
import instaIconImg from "../../images/insta.png";
import fbIconImg from "../../images/fb.png";
import logo from "../../images/bloodLogo.png";

const Footer = () => {
  return (
    // Full Footer
    <div className={Styles.footer}>
      {/* Upper div with logo, page links, login and social media */}
      <div className={Styles.pagesLinkHeader}>
        {/* Left div - logo */}
        <div className={Styles.leftLogoBox}>
          <img className={Styles.logoImage} src={logo} alt="Logo" />
          <p>BloodCentral Network</p>
        </div>

        {/* Middle div - Links */}
        <div className={Styles.middleLinkBox}>
          <ul>
            <a href="/">Home</a>

            <a href="/events">Events</a>

            <a href="/news">News</a>

            <a href="/about">About</a>
          </ul>
        </div>

        {/* Right div - with login/register and social media links images */}
        <div className={Styles.rightBox}>
          <div className={Styles.loginBox}>
            <img className={Styles.image} src={userIconImg} alt="pic" />
            <p>Login</p>
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

      {/* Bottom div with contact details and news letter submission */}
      <div className={Styles.bottomBox}>
        <div className={Styles.contactDetailsBox}>
          <p>Address</p>
          <p>Contact Number</p>
          <p>0777777123</p>
          <p>Email: email@gmail.com</p>
        </div>

        <div className={Styles.newsLetterBox}>
          <p>SUBMIT TO NEWSLETTER</p>
          <div className={Styles.searchBox}>
            <input type="text" className={Styles.searchInput} />
            <button type="submit" className={Styles.submitBtn}>
              SUBMIT
            </button>
          </div>
        </div>
        <div style={{ width: "25%" }}></div>
      </div>
      <div className={Styles.bottomLineBox}></div>
    </div>
  );
};

export default Footer;
