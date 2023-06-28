import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Image from 'next/image';
import sitting from '../public/sitting.jpg';
import circle from '../public/circlecrop.jpg';
import styles from '../styles/ourStory.module.css';

export default function App() {
  return (
    <div className='gray-page'>
      <Navbar color='black' page='/' />
      <div className='page'>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 100 }}>How it all began</h2>
        <div>
          <Image src={sitting} alt="sitting" style={{
            maxWidth: '100%',
            height: 'auto'
          }} />
        </div>
        <div className={styles.quotes}>
          <div>
            <p>“I saw her across the bar and I couldn’t look away until I had the guts to talk to her.”</p>
            <p>— Antoine</p>
          </div>
          <div>
            <p>“We caught eye contact at one point and I was mesmerized by that addicting smile of his.”</p>
            <p>— Soria</p>
          </div>
        </div>
        <div className={styles.storyBox}>
          <Image src={circle} alt="sitting" className={styles.storyImage} />
          <div>
            <p>——</p>
            <p>Soria and Antoine met while both out with their groups of friends at a bar in Phoenix. After catching each other’s eye across the room and spending the  rest of the night finding out how much they have in common, they started dating. Two years later, we're best friends, true loves, and badass partners in life. We're finally ready to make it official! </p>
          </div>
        </div>
      </div>
    </div>
  )
}
