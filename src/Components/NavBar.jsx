import React from 'react';
import styles from './NavBar.module.css';

import logo from '../assets/Images/applogo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <ul className={styles.navlinks}>
        <li><a href="#Feature">Features</a></li>
        <li><a href="#how-to-use">How to Use</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
        <li><Link to="/register">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;

