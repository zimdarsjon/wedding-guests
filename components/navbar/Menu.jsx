import React from 'react';
import Button from './Button.jsx';
import styles from '../../styles/navbar.module.css';
import RSVP from './RSVP.jsx';

export default function Menu({ page, color, visible }) {
    return (
        <>
            {visible && <div className={styles.mobileNav}>
                <div className={styles.mobileButtonBox}>
                    <Button color={color} page={page} pageLocation='/'>Our Story</Button>
                    <Button color={color} page={page} pageLocation='/events'>Events</Button>
                    <Button color={color} page={page} pageLocation='/party'>Wedding Party</Button>
                    <Button color={color} page={page} pageLocation='/travel'>Travel & Stay</Button>
                    <Button color={color} page={page} pageLocation='/registry'>Registry</Button>
                </div>
                <RSVP color='black' mobile={true} />
            </div>}
        </>
    )
}