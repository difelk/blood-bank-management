import React from "react";
import Styles from "./Home.module.scss";
import homeBanner from "../images/homeBanner.png";
import { Link, Route, Routes } from "react-router-dom";
import About from "../about/About";
import aboutUsHomeImg from "../images/aboutUsHomeImg.png";
import Events from "../events/Events";
import event1 from "../images/event1.png";
import event2 from "../images/event2.png";
import event3 from "../images/event3.png";
import event4 from "../images/event4.png";
import hospitalImg from "../images/hospital.png";
import donorImg from "../images/donor.png";
import bloodImg from "../images/blood.png";
import calendarImg from "../images/calendar.png";

const Home = ({}) => {
  return (
    <div>
      {/* Banner */}
      <div>
        <img className={Styles.bannerImage} src={homeBanner} alt="banner" />
      </div>
      {/* About us intro view */}
      <div className={`${Styles.aboutUsBox}  mt-5`}>
        <div className={Styles.aboutUsContent}>
          <h2>
            WELCOME TO{" "}
            <span className={Styles.colorTxt}>BLOODCENTRAL NETWORK</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          {/* About us button div */}
          <div className={Styles.aboutUsBtnBox}>
            <Link to="/about">
              <button className={Styles.aboutUsBtn}>ABOUT US</button>
            </Link>
            <Routes>
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
        {/* About us image - right side */}
        <div className={Styles.imgContent}>
          <img className={Styles.image} src={aboutUsHomeImg} alt="aboutUs" />
        </div>
      </div>

      {/* Recent events */}
      <div className={Styles.recentEventsBox}>
        <h2>
          RECENT <span className={Styles.colorTxt}>EVENTS</span>
        </h2>

        {/* Event images div */}
        <div className={Styles.eventImgBox}>
          {/* Left image div */}
          <div className={Styles.leftEventBox}>
            <img className={Styles.image} src={event1} alt="event1" />
            <div className={Styles.topText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>

          {/* Middle image div */}
          <div className={Styles.middleEventBox}>
            {/* Top image div */}
            <div className={Styles.upperImg}>
              <img className={Styles.image} src={event2} alt="event2" />
              <div className={Styles.topText}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
            {/* Bottom image div */}
            <div className={Styles.bottomImg}>
              <img className={Styles.image} src={event3} alt="event3" />
              <div className={Styles.topText}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
          </div>

          {/* Right image div */}
          <div className={Styles.rightEventBox}>
            <img className={Styles.image} src={event4} alt="event4" />
            <div className={Styles.topText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>
        </div>

        {/* Events View More Button */}
        <div className={Styles.viewMoreBtnBox}>
          <Link to="/events">
            <button className={Styles.viewMoreBtn}>VIEW MORE</button>
          </Link>
          <Routes>
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      </div>

      {/* Our achievments */}
      <div className={Styles.ourAchieveBox}>
        <h2>
        <span style={{ color: 'white' }}>OUR</span> <span className={Styles.colorTxt}>ACHIEVEMENTS</span>
        </h2>

        <div className={Styles.mainContainer}>
          <div className={Styles.contentBox}>
            <div className={Styles.imgBox}>
              <img
                className={Styles.achieveImages}
                src={hospitalImg}
                alt="hospital"
              />
            </div>
            <div className={Styles.txtBox}>
              <p>12</p>
              <p>REGISTERED HOSPITALS</p>
            </div>
          </div>

          <div className={Styles.contentBox}>
            <div className={Styles.imgBox}>
              <img
                className={Styles.achieveImages}
                src={donorImg}
                alt="donor"
              />
            </div>
            <div className={Styles.txtBox}>
              <p>126</p>
              <p>REGISTERED DONORS</p>
            </div>
          </div>

          <div className={Styles.contentBox}>
            <div className={Styles.imgBox}>
              <img
                className={Styles.achieveImages}
                src={bloodImg}
                alt="blood"
              />
            </div>
            <div className={Styles.txtBox}>
              <p>1.5</p>
              <p>BLOOD LITERS</p>
            </div>
          </div>

          <div className={Styles.contentBox}>
            <div className={Styles.imgBox}>
              <img
                className={Styles.achieveImages}
                src={calendarImg}
                alt="calendar"
              />
            </div>
            <div className={Styles.txtBox}>
              <p>25</p>
              <p>AVERAGE EVENTS PER YEAR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
