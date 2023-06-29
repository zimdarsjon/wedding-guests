import React from 'react';
import Navbar from '../components/Navbar.jsx';
import styles from '../styles/party.module.css';

export default function Party() {
  return (
    <div className={styles.page}>
      <Navbar color='black' page='/party'/>
      <div className={styles.party}>
        <div>
          <h1>Kelsey Kadrich</h1>
          <h2>Maid of Honor</h2>
          <p>Kelsey, Frida, and Steven were inseparable during their time studying abroad in Italy. Two years after their time in Italy, the group reunited as they all found themselves back in Wisconsin.</p>
        </div>
        <div>
          <h1>Jens Hauggaard</h1>
          <h2>Bridesman</h2>
          <p>Jens is the life of every party. He knows exactly how to ignite laughter and joy in everyone he encounters. </p>
        </div>
        <div>
          <h1>Jakob Kovar</h1>
          <h2>Bridesman</h2>
          <p>Jakob and Frida were in (almost) all the same classes in junior and senior year of high school. Despite Jakob’s best efforts, they eventually became best friends.</p>
        </div>
      </div>
      <div className={styles.party}>
        <div>
          <h1>Mandy Przybyla</h1>
          <h2>Bridesmaid</h2>
          <p></p>
        </div>
        <div>
          <h1>Olivia Scott</h1>
          <h2>Bridesmaid</h2>
          <p></p>
        </div>
        <div>
          <h1>Mackenzie Smith</h1>
          <h2>Bridesmaid</h2>
          <p>Mackenzie and Frida lived on the same street in high school. This meant a lot of late nights playing board games</p>
        </div>
      </div>
    </div>
  )
}
