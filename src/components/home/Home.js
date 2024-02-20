import React from 'react';
import styles from "./Home.module.scss"

const Home = ({ name, age }) => {


  return (
    <div>
      <h1 className={styles.colorRed}>Hello, {name}!</h1>
      <p>Welcome to our website.</p>
    </div>
  );
};

export default Home;
