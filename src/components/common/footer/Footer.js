import React from "react";
import Styles from "./Footer.module.scss";
import userIconImg from "../../images/user.png";
import twitterIconImg from "../../images/twitter.png";
import instaIconImg from "../../images/insta.png";
import fbIconImg from "../../images/fb.png";
import logo from "../../images/bloodLogo.png";
import CustomInput from "../components/form/CustomInput";

const Footer = () => {
  return (
    // Full Footer
    <div className={Styles.footer}>
      <div className={Styles.footerItemsWrapper}>
        <div className={Styles.footerMainLogo}>
          <img src={logo} alt="logo" />
          <p>BloodCentral Network</p>
        </div>
        <div className={Styles.linksList}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div>
            <p>All rights reserved</p>
          </div>
        </div>
        <div className={Styles.linksList}>
          <div className={Styles.subscriptWrapper}>
            {/* <ul>
              <li>
                <a href="#">
                  {" "}
                  <img src={twitterIconImg} alt="twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src={instaIconImg} alt="insta" />
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <img src={fbIconImg} alt="facebook" />
                </a>
              </li>
            </ul> */}
            <input placeholder="Enter your email" />
            <button>Submit</button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
