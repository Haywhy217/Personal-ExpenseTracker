import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.footerLinks}>
      <a href="/" className={styles.footerLink}>Home</a>
      <a href="/features" className={styles.footerLink}>Features</a>
      <a href="/Contact Us" className={styles.footerLink}>Contact</a>
    </div>
    <div className={styles.socialMedia}>
      <a href="https://www.facebook.com/share/pay51vHnJpSWBs2V/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
        <svg className={styles.socialIcon} viewBox="0 0 24 24">
          <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.937 10.125 11.854v-8.385h-3.047v-3.469h3.047v-2.634c0-3.007 1.793-4.669 4.533-4.669 1.312 0 2.686.236 2.686.236v2.953h-1.513c-1.49 0-1.953.928-1.953 1.879v2.235h3.328l-.532 3.469h-2.796v8.385c5.737-.917 10.125-5.864 10.125-11.854z" />
        </svg>
      </a>
      <a href="https://x.com/yomadee_" target="_blank" rel="noopener noreferrer">
        <svg className={styles.socialIcon} viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.83.656-2.825.775 1.015-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.194-.897-.956-2.178-1.555-3.594-1.555-2.719 0-4.924 2.205-4.924 4.923 0 .386.043.762.127 1.124-4.09-.205-7.719-2.166-10.148-5.144-.424.725-.666 1.562-.666 2.456 0 1.694.863 3.188 2.176 4.065-.801-.026-1.555-.246-2.213-.615v.062c0 2.366 1.684 4.342 3.918 4.789-.41.111-.843.171-1.287.171-.315 0-.622-.03-.921-.086.623 1.943 2.432 3.354 4.576 3.393-1.676 1.314-3.792 2.098-6.087 2.098-.395 0-.785-.023-1.17-.069 2.172 1.394 4.751 2.206 7.523 2.206 9.025 0 13.964-7.477 13.964-13.964 0-.213-.005-.426-.014-.637.961-.693 1.793-1.56 2.451-2.549z" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/ayomide-olanipekun-83274b22b/" target="_blank" rel="noopener noreferrer">
        <svg className={styles.socialIcon} viewBox="0 0 24 24">
          <path d="M19.998 3h-16c-1.105 0-2 .896-2 2v14c0 1.104.895 2 2 2h16c1.105 0 2-.896 2-2v-14c0-1.104-.895-2-2-2zm-11.533 16.293h-2.742v-8.703h2.742v8.703zm-1.371-9.946c-.879 0-1.59-.714-1.59-1.593 0-.879.711-1.593 1.59-1.593s1.59.714 1.59 1.593c0 .878-.711 1.593-1.59 1.593zm10.987 9.946h-2.742v-4.775c0-1.137-.022-2.602-1.586-2.602-1.587 0-1.83 1.237-1.83 2.516v4.861h-2.742v-8.703h2.635v1.19h.037c.368-.697 1.27-1.432 2.617-1.432 2.8 0 3.317 1.844 3.317 4.238v4.707z" />
        </svg>
      </a>
    </div>
    <div className={styles.copyright}>
      <p>&copy; 2024 Trackly. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer