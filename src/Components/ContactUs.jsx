
import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <div className={styles.textinputs}>
          <h1 className={styles.heading}>Reach Out to Us</h1>
          <p className={styles.para1}>Fill out this form if you have any question</p>
          <div className={styles.inputs}>
        <div className={styles.nameinput}>
          <div className={styles.input}>
            <label htmlFor="firstName"> First Name </label>
            <input type='text' id='firstName'/>
          </div>
          <div className={styles.input}>
            <label htmlFor="lastName">Last Name</label>
            <input type='text' id='lastName'/>
          </div>
        </div>
        <div className={styles.input}>
          <label htmlFor='subject'>Subject</label>
          <input type='text' id='subject'/>
        </div>
        <div className={styles.input}>
          <label htmlFor='email'>Email Address</label>
          <input type='email' id='email'/>
        </div>
        <div className={styles.input}>
          <label htmlFor='message'>Messages</label>
          <textarea rows={10} cols={40} id='message'></textarea>
        </div>
        <div className={styles.submit}>Send Message</div>
      </div>
        </div>
        <div className={styles.quote}>
          <blockquote>
            <h1 className={styles.heading2}>"User-Friendly App"</h1>
            <p className={styles.para2}>Trackly has really helped me in tracking my expenses <br /> the App is user friendly</p>
            <div className={styles.testimonial}>
              <div className={styles.testimonialpara}>
                <h3 className={styles.para3}>Olayinka Bucknor</h3>
                <p className={styles.testimonialpara2}>- Accountant</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
      
    </div>
  );
}

export default ContactUs;
