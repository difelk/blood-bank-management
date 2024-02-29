import React from "react";
import Styles from "./Home.module.scss";
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
import homelogo from "../../assets/img/home.jpg";
import asiriLogo from "../../assets/img/hospitals/asiri_medical_logo.png";
import nawalokaLogo from "../../assets/img/hospitals/Nawaloka_Hospitals.png";
import hemashLogo from "../../assets/img/hospitals/Hemashospital.png";
import lankaHospitalLogo from "../../assets/img/hospitals/Lanka_Hospitals_logo.png";
import appoloLogo from "../../assets/img/hospitals/apollo_hospitals_logo.png";
import royalLogo from "../../assets/img/hospitals/royal_hospital.png";
import AddIcon from "../../assets/icons/svgs/AddIcon";
// service icons
import service01 from "../../assets/img/services/service01.png";
import service02 from "../../assets/img/services/service02.png";
import service03 from "../../assets/img/services/service03.png";
import service04 from "../../assets/img/services/service04.png";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <div className={Styles.homeBannerWrapper}>
        <div className={Styles.bannerTextSection}>
          <h4>Saving Lives, One Donation at a Time</h4>
          <h6>Together, We Can Make a Lifesaving Impact</h6>
          <p>
            Discover the Power of Giving - Your Contribution Can Make a Profound
            Difference in Someone's Life. Every Donation Counts Towards Saving
            Lives and Ensuring a Stable Blood Supply for Those in Need. Join Us
            in the Lifesaving Journey Today!
          </p>
          <button>Learn More</button>
        </div>
        <div className={Styles.bannerImgSection}>
          <img className={Styles.bannerImage} src={homelogo} alt="banner" />
        </div>
      </div>
      <div className={Styles.partnerSectionWrapper}>
        {/* <h4>Our Partners</h4> */}
        <div className={Styles.partnerSection}>
          <div className={Styles.logowrapper}>
            <img src={asiriLogo} alt="asiri hospital logo" />
          </div>
          <div className={Styles.logowrapper}>
            <img src={nawalokaLogo} alt="nawaloka hospital logo" />
          </div>
          <div className={Styles.logowrapper}>
            <img src={hemashLogo} alt="hemas hospital logo" />
          </div>
          <div className={Styles.logowrapper}>
            <img src={lankaHospitalLogo} alt="lanka hospital logo" />
          </div>
          <div className={Styles.logowrapper}>
            <img src={appoloLogo} alt="appolo hospital logo" />
          </div>
          <div className={Styles.logowrapper}>
            <img src={royalLogo} alt="royal hospital logo" />
          </div>
        </div>
      </div>
      <div className={`${Styles.aboutUsBox}  mt-5`}>
        <div className={Styles.imgContent}>
          <img className={Styles.image} src={aboutUsHomeImg} alt="aboutUs" />
        </div>
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
          <div className={Styles.aboutUsBtnBox}>
            <Link to="/about">
              <button className={Styles.aboutUsBtn}>ABOUT US</button>
            </Link>
            <Routes>
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>

      <div className={Styles.servicesSectionWrapper}>
        <div className={Styles.servicesTitle}>
          <h3>Our Services</h3>
          <p>
            Explore the range of services we offer to streamline blood donation,
            stock management, and community engagement. From donor registration
            to event planning, discover how you can make a difference in saving
            lives. Join us in this noble cause!
          </p>
        </div>
        <div className={Styles.serviceItemsWrapper}>
          <div className={Styles.serviceItem}>
            <div className={Styles.serviceIcon}>
              {/* <AddIcon size={"10px"} color={"#ffffff"} /> */}
              <img src={service01} alt="service icon" />
            </div>
            <div className={Styles.serviceDescription}>
              <h5>Blood Donation Drives</h5>
              <p>
                Organize and participate in community blood donation events to
                ensure a stable blood supply.
              </p>
            </div>
          </div>
          <div className={Styles.serviceItem}>
            <div className={Styles.serviceIcon}>
              {" "}
              <img src={service02} alt="service icon" />
            </div>
            <div className={Styles.serviceDescription}>
              <h5>Donor Registration</h5>
              <p>
                Register as a blood donor to contribute to saving lives in
                emergencies and disasters.
              </p>
            </div>
          </div>
          <div className={Styles.serviceItem}>
            <div className={Styles.serviceIcon}>
              {" "}
              <img src={service03} alt="service icon" />
            </div>
            <div className={Styles.serviceDescription}>
              <h5>Blood Stock Management</h5>
              <p>
                Efficiently manage and track blood stock levels to meet hospital
                and patient needs.
              </p>
            </div>
          </div>
          <div className={Styles.serviceItem}>
            <div className={Styles.serviceIcon}>
              {" "}
              <img src={service04} alt="service icon" />
            </div>
            <div className={Styles.serviceDescription}>
              <h5>Event Planning</h5>
              <p>
                Plan and coordinate blood donation events to encourage and
                facilitate donations.
              </p>
            </div>
          </div>

          <div className={Styles.wrapperHomeContactReady}>
            <div>
              <h4>Are you ready to work with us?</h4>
            </div>
            <div>
              <button>Contact Us</button>
            </div>
          </div>
          {/* <div className={Styles.serviceItem}>
            <div className={Styles.serviceIcon}></div>
            <div className={Styles.serviceDescription}><h5></h5></div>
          </div>
          <div className={Styles.serviceItem}>
            <div className={Styles.serviceIcon}></div>
            <div className={Styles.serviceDescription}><h5></h5></div>
          </div> */}
        </div>
      </div>

      {/* <div className={Styles.recentEventsBox}>
        <h2>
          RECENT <span className={Styles.colorTxt}>EVENTS</span>
        </h2>


        <div className={Styles.eventImgBox}>
   
          <div className={Styles.leftEventBox}>
            <img className={Styles.image} src={event1} alt="event1" />
            <div className={Styles.topText}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </div>
          </div>

    
          <div className={Styles.middleEventBox}>
         
            <div className={Styles.upperImg}>
              <img className={Styles.image} src={event2} alt="event2" />
              <div className={Styles.topText}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                </p>
              </div>
            </div>
        
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

        <div className={Styles.viewMoreBtnBox}>
          <Link to="/events">
            <button className={Styles.viewMoreBtn}>VIEW MORE</button>
          </Link>
          <Routes>
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      </div> */}

      {/* <div className={Styles.ourAchieveBox}>
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
      </div> */}

      {/* <div className={Styles.recentNewsBox}>
        <h2>
          LATEST <span className={Styles.colorTxt}>NEWS</span>
        </h2>

   
        <div className={Styles.newsImgBox}>
 
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

     
        <div className={Styles.readMoreBtnBox}>
          <Link to="/news">
            <button className={Styles.readMoreBtn}>READ MORE</button>
          </Link>
          <Routes>
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
