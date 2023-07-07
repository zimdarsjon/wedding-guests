import React from 'react';
import Navbar from '../components/Navbar.jsx';
import styles from '../styles/registry.module.css';
import Footer from '../components/Footer.jsx';

export default function Registry() {
  return (
    <div className='gray-page'>
      <div className={styles.imageBack}>
        <Navbar color='white' page='/registry' />
        <div className={styles.messageBox}>
          <h1>Many of you are traveling across the globe to celebrate with us in Bangkok, so your presence is all we ask for.</h1>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  )
}
