import React from 'react';
import Button from './navbar/Button.jsx';
import RSVP from './navbar/RSVP.jsx';
import styles from '../styles/navbar.module.css';

export default function Navbar({ page, color }) {
  return (
    <div className='navbar' style={{color}}>
      <div className={styles.navbarButtonContainer}>
        <Button color={color} page={page} pageLocation='/'>Our Story</Button>
        <Button color={color} page={page} pageLocation='/events'>Events</Button>
        <Button color={color} page={page} pageLocation='/party'>Wedding Party</Button>
        <Button color={color} page={page} pageLocation='/travel'>Travel & Stay</Button>
        <Button color={color} page={page} pageLocation='/registry'>Registry</Button>
      </div>
      <h1 className={styles.title}>Frida and Steven</h1>
      <RSVP color={color}/>
    </div>
  )
}
