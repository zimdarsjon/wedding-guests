import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Image from 'next/image';
import bangkok from '../public/bangkoksquare.jpg';
import villa from '../public/villasquare.jpg';
import styles from '../styles/home.module.css';
import Footer from '../components/Footer.jsx';
import Link from 'next/link';

const mapLink = 'https://www.google.com/maps/place/Chakrabongse+Villas+:+%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A3%E0%B8%9E%E0%B8%87%E0%B8%A9%E0%B9%8C+%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B8%A5%E0%B9%88%E0%B8%B2/@13.743716,100.4886649,17z/data=!4m10!3m9!1s0x30e29904f5eb818f:0x1d98385f79476060!5m2!4m1!1i2!8m2!3d13.7437159!4d100.493171!15sChNjaGFrcmFib25nc2UgdmlsbGFzWhUiE2NoYWtyYWJvbmdzZSB2aWxsYXOSAQVob3RlbOABAA!16s%2Fg%2F1tfmf7pf?entry=tts&shorturl=1';

export default function App() {
  return (
    <div className={styles.greyPage}>
      <div className={styles.date} >
        <Navbar color='white' page='/' />
        <div className={styles.dateText}>
          <h2 className={styles.secondaryHeader}>We're Celebrating!</h2>
          <h1 className={styles.primaryHeader}>08 . 03 . 2024</h1>
          <h2 className={styles.secondaryHeader}>Bangkok, Thailand</h2>
        </div>
      </div>
      <div className={styles.events}>
        <div className={styles.bangkokContainer}>
          <Image src={villa} alt="villa" className={styles.bangkok} />
        </div>
        <div className={styles.textBlock}>
          <h2>Wedding</h2>
          <p>Chakrabongse Villas</p>
          <p>396 Maharaja Road</p>
          <p>Tatien, Bangkok 10200</p>
          <p className={styles.map}><a href={mapLink} target="_blank">Map</a></p>
        </div>
      </div>
      <div className={styles.storyBox}>
        <hr />
      </div>
      <div className={styles.rsvpBox}>
        <p>Join Us</p>
        <h2>We hope you can make it!</h2>
        {/* <Link className={styles.linkRSVPButton} href='/rsvp' style={{ textDecoration: 'none', color: 'black' }}><button>RSVP</button></Link> */}
      </div>
      <Footer />
    </div>
  )
}
