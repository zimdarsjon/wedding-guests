import React from 'react';
import styles from '../../styles/form.module.css';
import Page from './Page.jsx';

export default function LastPage({page}) {
  return (
    <Page>
        {page === 5 && <h1>Sorry you couldn't make it</h1>}
        {page === 4 && <h1>We look forward to seeing you</h1>}
    </Page>
  )
}