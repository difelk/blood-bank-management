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
import News from "../news/News";
import news1 from "../images/newsImg.png";
import news2 from "../images/newsImg.png";
import news3 from "../images/newsImg.png";

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
          <span style={{ color: "white" }}>OUR</span>{" "}
          <span className={Styles.colorTxt}>ACHIEVEMENTS</span>
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

      {/* Latest News */}
      <div className={Styles.recentNewsBox}>
        <h2>
          LATEST <span className={Styles.colorTxt}>NEWS</span>
        </h2>

        {/* New images div */}
        <div className={Styles.newsImgBox}>
          {/* Left image div */}
          <div className={Styles.leftNewsBox}>
            <img className={Styles.image} src={news1} alt="news1" />
            <div className={Styles.newsTxtBox}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <div className={Styles.dateAndBtnBox}>
                <p className={Styles.dateTag}>2024/01/28</p>
                <div className={Styles.linkBox}>
                  <a href="/news">Read More</a>
                </div>
              </div>
            </div>
          </div>

          {/* Middle image div */}
          <div className={Styles.middleNewsBox}>
            <img className={Styles.image} src={news2} alt="news2" />
            <div className={Styles.newsTxtBox}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <div className={Styles.dateAndBtnBox}>
                <p className={Styles.dateTag}>2024/01/28</p>
                <div className={Styles.linkBox}>
                  <a href="/news">Read More</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right image div */}
          <div className={Styles.rightNewsBox}>
            <img className={Styles.image} src={news3} alt="news3" />
            <div className={Styles.newsTxtBox}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
              <div className={Styles.dateAndBtnBox}>
                <p className={Styles.dateTag}>2024/01/28</p>
                <div className={Styles.readMoreBtnBox}>
                  <div className={Styles.linkBox}>
                    <a href="/news">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Read More Button */}
        <div className={Styles.readMoreBtnBox}>
          <Link to="/news">
            <button className={Styles.readMoreBtn}>READ MORE</button>
          </Link>
          <Routes>
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
