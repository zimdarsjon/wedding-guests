import React from 'react';
import Link from 'next/link';
import styles from '../../styles/navbar.module.css';

export default function RSVP({ color, mobile }) {
    return (
        <button style={{backgroundColor: color}} className={mobile ? styles.mobileRSVP : styles.rsvp}><Link href='/rsvp' style={{ textDecoration: 'none', color: (color == 'white' ? 'black' : 'white') }}>RSVP</Link></button>
    )
}