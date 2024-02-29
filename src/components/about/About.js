import React from "react";
import Styles from "./About.module.scss";
import aboutUsBanner from "../images/aboutUsBanner.jpeg";
import icon1 from "../images/blood.png";

const About = ({ name, age }) => {
  return (
    <div>
      {/* Banner */}
      <div className={Styles.bannerImagWrapper}>
        <div>
          <h4>Heading Title</h4>
          <p>Some Random Text</p>
        </div>
        <div>
          <img
            className={Styles.bannerImage}
            src={aboutUsBanner}
            alt="banner"
          />
        </div>
      </div>

      {/* Our vision */}
      <div className={Styles.visionMainBox}>
        <div className={Styles.visionMissionBox}>
          <h2>
            OUR <span className={Styles.colorTxt}>VISION</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna.
          </p>
        </div>
      </div>

      {/* Our mission */}
      <div className={Styles.missionMainBox}>
        <div className={Styles.visionMissionBox}>
          <h2>
            OUR <span className={Styles.colorTxt}>MISSION</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna. <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className={Styles.servicesMainBox}>
        <div className={Styles.servicesBox}>
          <h2>
            OUR <span className={Styles.colorTxt}>SERVICES</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna.
          </p>

          <div className={Styles.servicesLinkBox}>
            <div className={Styles.serviceBoxes}>
              <div className={Styles.serviceImg}>
                <img className={Styles.serviceIcon} src={icon1} alt="icon" />
              </div>
              <div className={Styles.serviceDesc}>
                <h4>Medical Checkup</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className={Styles.serviceBoxes}>
              <div className={Styles.serviceImg}>
                <img className={Styles.serviceIcon} src={icon1} alt="icon" />
              </div>
              <div className={Styles.serviceDesc}>
                <h4>Medical Checkup</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className={Styles.serviceBoxes}>
              <div className={Styles.serviceImg}>
                <img className={Styles.serviceIcon} src={icon1} alt="icon" />
              </div>
              <div className={Styles.serviceDesc}>
                <h4>Medical Checkup</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
