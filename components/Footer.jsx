import React from 'react';
import styles from '../styles/footer.module.css';
import Link from 'next/link';

export default function Footer(){

    return (
        <div className={styles.footer}>
          <p>Questions?</p>
          <div>
            <p><Link style={{color: 'black'}} href='/events'>Ceremony & Reception</Link></p>
            <p><Link style={{color: 'black'}} href='/travel'>Travel & Stay</Link></p>
            <p><Link style={{color: 'black'}} href='/registry'>Registry</Link></p>
            <p><Link style={{color: 'black'}} href='rsvp'>RSVP</Link></p>
          </div>
          <p><a style={{color: 'black'}} href='mailto: wedding@thedomitrzes.com'>Email Us</a></p>
        </div>
    )
}