import React from 'react';
import styles from '../../styles/form.module.css';

export default function Page({children, color}) {
  return (
    <div className={styles.formPage} style={{color}}>
        {children}
    </div>
  )
}