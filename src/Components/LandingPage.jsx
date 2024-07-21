import React from 'react';
import styles from './LandingPage.module.css'
import NavBar from './NavBar';
import logo from "../assets/Images/applogo.png"
import  FeaturesSection from '../Components/FeatureSection'
import HowToUseSection from './HowToUseSection';

const LandingPage = () => {
  return (
    <div className={styles.Landingpage}>
      <NavBar />
      <main>
      <section id={styles.landing}>
        <h1>Welcome To <img src={logo} alt="" /></h1>
        <h3>Your Personal expense tracking app</h3>
        <p>Manage your finances effortlessly and efficiently.</p>
      </section>
        <FeaturesSection />
        <HowToUseSection />
     </main>
    
    </div>
  );
};

export default LandingPage;
