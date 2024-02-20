import React from 'react';
import Styles from "./Header.module.scss"; 

const Header = () => {


  return (
    <div className={Styles.header}>
     <ul>
      <li><a href='/'>Home</a></li>
      <li><a href='/events'>Events</a></li>
      <li><a href='/news'>News</a></li>
      <li><a href='/about'>About</a></li>
     </ul>
    </div>
  );
};

export default Header;
