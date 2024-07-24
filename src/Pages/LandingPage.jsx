import React from 'react';
import NavBar from '../Components/NavBar'
import HeroSection from '../Components/HeroSection';
import styles from '../Components/LandingPage.module.css';
import Features from '../Components/FeatureSection';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';
import HowToUse from '../Components/HowToUseSection';


const LandingPage = () => {
  return (

    <> 
 <NavBar />
 <HeroSection/>
 <Features/>
 <HowToUse/>
 <ContactUs/>
<Footer/>
    </>
     
   
  );
};

export default LandingPage;
