import React from 'react';
import Page from './Page.jsx';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import styles from '../../styles/form.module.css';
import axios from 'axios';

const { useState, useEffect } = React;

export default function Details({ person, nextPage, previousPage }) {
    const [guest, setGuest] = useState(person.guestName ? person.guestName : '');
    const [wisconsin, setWisconsin] = useState(person.wisconsin ? true: false);
    const [thailand, setThailand] = useState(person.thailand ? true: false);
    const [diet, setDiet] = useState(person.diet? person.diet : '');

    useEffect(() => {
        person.guestName = guest;
        person.wisconsin = wisconsin;
        person.thailand = thailand;
        person.diet = diet;
    }, [guest, wisconsin, thailand, diet])

    const validateNextPage = () => {
        if (!person.guestName && person.bringingGuest) {
            alert('Please enter the name of your guest')
        } else if (!person.thailand && !person.wisconsin) {
            alert('Please select the event you are going to')
        } else {
            console.log(thailand, wisconsin)
            axios.put('/api/attendee', null, { params: {
                name: person.name,
                going: person.going,
                bringingGuest: person.bringingGuest,
                guestName: person.guestName,
                goingPartner: person.goingPartner,
                wisconsin: wisconsin,
                thailand: thailand,
                diet: person.diet
            }})
            nextPage();
        }
    }

    return (
        <Page>
            <div className={styles.detailsBox}>
                <h1>Details</h1>
                {person.bringingGuest && <>
                    <h2>Name of Guest</h2>
                    <TextField sx={{width: '100%'}} value={guest} onChange={e => setGuest(e.target.value)} color='primary' variant="filled" />
                </>}
                <h2>Events</h2>
                <div className={styles.events}>
                    <p><span>Anniversary Party in Wisconsin</span><Checkbox color='secondary' onChange={e => setWisconsin(e.target.checked)} checked={wisconsin}/></p>
                    <p><span>Wedding in Thailand</span><Checkbox color='secondary' onChange={e => setThailand(e.target.checked)} checked={thailand}/></p>
                </div>
                <h2>Any Dietary Restrictions</h2>
                <TextField sx={{width: '100%'}} value={diet} onChange={e => setDiet(e.target.value)} color='primary' variant="filled" />
                <div className={styles.detailArrows}>
                    <button className={styles.changePage} onClick={e => {
                        e.preventDefault();
                        previousPage();
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#5f7153" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </button>
                    <button className={styles.changePage} onClick={validateNextPage}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#5f7153" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg>
                    </button>
                </div>
            </div>
        </Page>
    )
}