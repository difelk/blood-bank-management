import React from "react";
import Styles from "./Dashboard.module.scss";
import bloodDropdIcon from "../../../assets/img/bloodIcon.png";

const Content = () => {
  return (
    <div className={Styles.contentWrapper}>
      <div className={Styles.displayChart}></div>
      <div className={Styles.displayChart}></div>
      <div className={Styles.displayChart}></div>
      {/* <div className={Styles.subContent}>
        <div className={Styles.sectionLeft}></div>
        <div className={Styles.sectionRight}>
          <div>
            <div className={Styles.itemHeader}>
              <h6>Stock Summery</h6>
            </div>
            <div className={Styles.summeryWrapper}>
              <div className={Styles.summeryItem}>
                <div className={Styles.itemIcon}>
                  <img src={bloodDropdIcon} alt="" />
                </div>
                <div className={Styles.itemDesc}>
                  <p className={Styles.fontsm}>Blood type A</p>
                  <p>1500L</p>
                </div>
              </div>
              <div className={Styles.summeryItem}>
                <div className={Styles.itemIcon}>
                  <img src={bloodDropdIcon} alt="" />
                </div>
                <div className={Styles.itemDesc}>
                  <p className={Styles.fontsm}>Blood type A</p>
                  <p>1500L</p>
                </div>
              </div>
              <div className={Styles.summeryItem}>
                <div className={Styles.itemIcon}>
                  <img src={bloodDropdIcon} alt="" />
                </div>
                <div className={Styles.itemDesc}>
                  <p className={Styles.fontsm}>Blood type A</p>
                  <p>1500L</p>
                </div>
              </div>
              <div className={Styles.summeryItem}>
                <div className={Styles.itemIcon}>
                  <img src={bloodDropdIcon} alt="" />
                </div>
                <div className={Styles.itemDesc}>
                  <p className={Styles.fontsm}>Blood type A</p>
                  <p>1500L</p>
                </div>
              </div>
              <div className={Styles.summeryItem}>
                <div className={Styles.itemIcon}>
                  <img src={bloodDropdIcon} alt="" />
                </div>
                <div className={Styles.itemDesc}>
                  <p className={Styles.fontsm}>Blood type A</p>
                  <p>1500L</p>
                </div>
              </div>
              <div className={Styles.summeryItem}>
                <div className={Styles.itemIcon}>
                  <img src={bloodDropdIcon} alt="" />
                </div>
                <div className={Styles.itemDesc}>
                  <p className={Styles.fontsm}>Blood type A</p>
                  <p>1500L</p>
                </div>
              </div>
              <div className={Styles.summeryItem}>
                <div className={Styles.itemIcon}>
                  <img src={bloodDropdIcon} alt="" />
                </div>
                <div className={Styles.itemDesc}>
                  <p className={Styles.fontsm}>Blood type A</p>
                  <p>1500L</p>
                </div>
              </div>
              <div className={Styles.summeryItem}>
                <div className={Styles.itemIcon}>
                  <img src={bloodDropdIcon} alt="" />
                </div>
                <div className={Styles.itemDesc}>
                  <p className={Styles.fontsm}>Blood type A</p>
                  <p>1500L</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Content;
