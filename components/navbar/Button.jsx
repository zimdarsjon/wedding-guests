import React from 'react';
import Link from 'next/link';
import styles from '../../styles/navbar.module.css';

export default function Button({ children, pageLocation, page, color }) {
    return (
        <button style={{textDecorationColor: color}} className={page == pageLocation ? styles.activeNavbarButton : ''}><Link href={pageLocation} style={{ textDecoration: 'none', color }}>{children}</Link></button>
    )
}