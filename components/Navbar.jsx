import React from 'react';
import Button from './navbar/Button.jsx';
import RSVP from './navbar/RSVP.jsx';
import styles from '../styles/navbar.module.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import Menu from './navbar/Menu.jsx';
import disableScroll from 'disable-scroll';

const { useEffect, useState} = React;

export default function Navbar({ page, color }) {

  let [expanded, setExpanded] = useState(false);

  useEffect(() => {
    disableScroll.off();
  }, [])

  let toggleMenu = (e) => {
    e.preventDefault();
    let state = expanded;
    state ? disableScroll.off() : disableScroll.on();
    setExpanded(!state);
  }

  return (
    <>
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
      <button className={styles.dropButton} onClick={toggleMenu}>
        {expanded ? <CloseIcon fontSize='large'/> : <DehazeIcon fontSize='large'/>}
      </button>
    </div>
    <Menu visible={expanded} color={color} page={page}/>
    </>
  )
}
