import React from 'react';
import styles from "./News.module.scss"

const News = ({ name, age }) => {


  return (
    <div>
     <h1 className={styles.colorRed}>News</h1>
    </div>
  );
};

export default News;
