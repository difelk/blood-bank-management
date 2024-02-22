import React from "react";
import Styles from "./Events.module.scss";
import eventBanner from "../images/eventBanner.png";
import event1 from "../images/event3.png";
import { Link, Route, Routes } from "react-router-dom";

const Events = ({ name, age }) => {
  return (
    <div>
      {/* Banner */}
      <div className={Styles.bannerTop}>
        <div className={Styles.bannerTopText}>
          <h2>UPCOMING EVENTS!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
        </div>
        <div></div>
      </div>

      {/* Events Summary */}
      <div className={Styles.eventSumMainBox}>
        <div className={Styles.eventSumBox}>
          <div className={Styles.dateBox}>
            <p>8</p>
            <p>JANUARY</p>
          </div>
          <div className={Styles.imgBox}>
            <img className={Styles.image} src={event1} alt="event1" />
          </div>
          <div className={Styles.detailsBox}>
            <h3>BLOOD DONATION EVENT 01</h3>
            <p className={Styles.dateAndTimeTag}>
              8 Friday, January 2024 8.00AM - 3.00PM
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>

            <Link to="/eventDetails">
              <button className={Styles.viewMoreBtn}>VIEW MORE</button>
            </Link>
            <Routes>
              <Route path="/eventDetails" element={<Events />} />
            </Routes>
          </div>
        </div>
        <div className={Styles.eventSumBox}>
          <div className={Styles.dateBox}>
            <p>8</p>
            <p>JANUARY</p>
          </div>
          <div className={Styles.imgBox}>
            <img className={Styles.image} src={event1} alt="event1" />
          </div>
          <div className={Styles.detailsBox}>
            <h3>BLOOD DONATION EVENT 02</h3>
            <p className={Styles.dateAndTimeTag}>
              8 Friday, January 2024 8.00AM - 3.00PM
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>

            <Link to="/eventDetails">
              <button className={Styles.viewMoreBtn}>VIEW MORE</button>
            </Link>
            <Routes>
              <Route path="/eventDetails" element={<Events />} />
            </Routes>
          </div>
        </div>
        <div className={Styles.eventSumBox}>
          <div className={Styles.dateBox}>
            <p>8</p>
            <p>JANUARY</p>
          </div>
          <div className={Styles.imgBox}>
            <img className={Styles.image} src={event1} alt="event1" />
          </div>
          <div className={Styles.detailsBox}>
            <h3>BLOOD DONATION EVENT 03</h3>
            <p className={Styles.dateAndTimeTag}>
              8 Friday, January 2024 8.00AM - 3.00PM
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>

            <Link to="/eventDetails">
              <button className={Styles.viewMoreBtn}>VIEW MORE</button>
            </Link>
            <Routes>
              <Route path="/eventDetails" element={<Events />} />
            </Routes>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className={Styles.formMainBox}>
        <h1>EVENT REQUEST FORM</h1>
      </div>
    </div>
  );
};

export default Events;
