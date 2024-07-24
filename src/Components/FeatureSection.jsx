import React from 'react';
import styles from './Feature.module.css';
import FeatCard from './FeatCard';
import { Link } from 'react-router-dom';
function Features() {
  return (
    <section id='features'>
    <div id={styles.Fctn}>
      <h2>Our Features</h2>
      <p>Discover the powerful features that make our expense tracking app unique and user-friendly.</p>
      <div className={styles.Fc}>
        <FeatCard title={'Intuitive and Easy-to-Use Interface'} description={'Our application is designed with a focus on user experience. The intuitive layout ensures that you can navigate through the features effortlessly, even if you\'re not tech-savvy.'}/>
        <FeatCard title={'Top-Notch Security'} description={'Your data security is our top priority. We implement the latest encryption technologies to protect your information and ensure that your data remains safe.'}/>
        <FeatCard title={'Access Anytime, Anywhere'} description={'Whether you\'re at your desk or on the go, our application is accessible from any device. Stay connected and productive no matter where you are.'}/>
        <FeatCard title={'Continuous Improvement'} description={'We are committed to continuous improvement. Our team regularly releases updates with new features and enhancements based on user feedback.'}/>
        </div>
        <p>Ready to experience these features? Sign up now and take your productivity to the next level!</p>
        <button><Link to="/register" className={styles.linkButton}>
        Get Started
      </Link></button>
        </div>
        </section>
  );
}

export default Features;
