import React from 'react';
import Link from 'next/link';
import styles from '../../styles/navbar.module.css';

export default function RSVP({ color, mobile }) {
    return (
        <Link href='/rsvp' className={mobile ? styles.mobileLinkRSVP : styles.linkRSVP}
        style={{ textDecoration: 'none', color: (color == 'white' ? 'black' : 'white') }}>
            <button style={{backgroundColor: color, color: (color == 'white' ? 'black' : 'white')}} className={mobile ? styles.mobileRSVP : styles.rsvp}>RSVP</button>
        </Link>
    )
}