import React from 'react';
import Link from 'next/link';
import styles from '../../styles/navbar.module.css';

export default function RSVP({ color }) {
    return (
        <button style={{backgroundColor: color}} className={styles.rsvp}><Link href='/rsvp' style={{ textDecoration: 'none', color: (color == 'white' ? 'black' : 'white') }}>RSVP</Link></button>
    )
}