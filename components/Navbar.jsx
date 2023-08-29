import React from 'react';
import Button from './navbar/Button.jsx';
import RSVP from './navbar/RSVP.jsx';
import styles from '../styles/navbar.module.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import Menu from './navbar/Menu.jsx';
import disableScroll from 'disable-scroll';
import Link from 'next/link';

const { useEffect, useState} = React;

export default function Navbar({ page, color }) {

  let [expanded, setExpanded] = useState(false);
  let [style, setStyle] = useState({ color });

  useEffect(() => {
    disableScroll.off();
  }, [])

  useEffect(() => {
    if (expanded && color === 'black') {
      setStyle({color, backgroundColor: 'white'})
    } else if (expanded && color === 'white') {
      setStyle({color: 'red', backgroundColor: 'black'})
    } else {
      setStyle({ color, backgroundColor: 'rgba(0, 0, 0, 0)' })
    }
  }, [expanded])

  let toggleMenu = (e) => {
    e.preventDefault();
    let state = expanded;
    state ? disableScroll.off() : disableScroll.on();
    setExpanded(!state);
  }

  return (
    <>
    <div className='navbar' style={style}>
      <div className={styles.navbarButtonContainer}>
        <Button color={color} page={page} pageLocation='/party'>Wedding Party</Button>
        <Button color={color} page={page} pageLocation='/travel'>Travel & Stay</Button>
        <Button color={color} page={page} pageLocation='/registry'>Registry</Button>
      </div>
      <h1 className={styles.title}><Link href='/' style={{textDecoration: 'none', color: color}}>Frida and Steven</Link></h1>
      <RSVP color={color}/>
      <button className={styles.dropButton} onClick={toggleMenu}>
        {expanded ? <CloseIcon fontSize='large' style={{color}}/> : <DehazeIcon fontSize='large' style={{color}}/>}
      </button>
    </div>
    <Menu visible={expanded} color={color} page={page}/>
    </>
  )
}
