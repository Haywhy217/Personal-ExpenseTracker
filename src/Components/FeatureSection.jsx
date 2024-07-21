import React from 'react';
import styles from './Feature.module.css';

function Features() {
  return (
    <div id={styles.Fctn}>
    <section className={styles.features} id='Features'>
      <h2>Our Features</h2>
      <p>Discover the powerful features that make our expense tracking app unique and user-friendly.</p>
    <div className={styles.featcard}>
      <div className={styles.feature}>
        <h3>Intuitive and Easy-to-Use Interface</h3>
        <p>Our application is designed with a focus on user experience. The intuitive layout ensures that you can navigate through the features effortlessly, even if you're not tech-savvy.</p>
      </div>

      <div className={styles.feature}>
        <h3>Top-Notch Security</h3>
        <p>Your data security is our top priority. We implement the latest encryption technologies to protect your information and ensure that your data remains safe.</p>
      </div>

      <div className={styles.feature}>
        <h3>Access Anytime, Anywhere</h3>
        <p>Whether you're at your desk or on the go, our application is accessible from any device. Stay connected and productive no matter where you are.</p>
      </div>

      <div className={styles.feature}>
        <h3>Continuous Improvement</h3>
        <p>We are committed to continuous improvement. Our team regularly releases updates with new features and enhancements based on user feedback.</p>
      </div>
    </div>
      <div className={styles.cta}>
        <p>Ready to experience these features? Sign up now and take your productivity to the next level!</p>
        <button onClick={() => window.location.href = '/register'}>Get Started</button>
      </div>
    </section>
    </div>
  );
}

export default Features;
