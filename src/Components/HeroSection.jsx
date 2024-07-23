
import React from 'react';
import styles from './Hero.module.css';
import logo from '../assets/Images/applogo.png';

const HeroSection = () => {
  return (
    <div className={styles.Hero}>
      <h1>Welcome To <img src={logo} alt="tracklylogo" /></h1>
      <h3>Your Personal expense tracking app</h3>
      <p>Manage your finances effortlessly and efficiently.</p>
    </div>
  );
};

export default HeroSection;
