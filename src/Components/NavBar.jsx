import React, { useState } from 'react';
import styles from './NavBar.module.css';
import logo from '../assets/Images/applogo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`${styles.navlinks} ${isMenuOpen ? styles.open : ''}`}>
        <li><a href="#features">Features</a></li>
        <li><a href="#how-to-use">How to Use</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
        <li>
          <Link to="/register">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;


