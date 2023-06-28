import React from 'react';
import Page from './Page.jsx';
import styles from '../../styles/form.module.css';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';

const { useState, useEffect } = React;

export default function Accept({person, nextPage, previousPage, setLastPage}) {
    const [primaryGoing, setPrimaryGoing] = useState(person.primaryGoing === undefined || person.primaryGoing === true);
    const [secondaryGoing, setSecondaryGoing] = useState(person.secondaryGoing === undefined || person.secondaryGoing === true);
    const [accept, setAccept] = useState(person.accept || false);
    const [decline, setDecline] = useState(person.decline || false);

    const handleAccept = () => {
      setAccept(true);
      setDecline(false);
    }

    const handleDecline = () => {
      setAccept(false);
      setDecline(true);
    }

    const validateNextPage = (e) => {
        e.preventDefault();
        person.primaryGoing = primaryGoing;
        person.secondaryGoing = secondaryGoing;
        person.accept = accept;
        person.decline = decline;
        if (!accept && !decline) {
            alert('Missing Accept or Decline')
        } else if (decline) {
            // No one can make it
            axios.put('/api/attendee', null, { params: {
                name: person.name,
                going: 0
            }})
            setLastPage(5);
        } else if (person.partner && primaryGoing && secondaryGoing) {
            // Both partners
            person.going = 2;
            nextPage();
        } else if (person.partner && (primaryGoing || secondaryGoing)) {
            // One of Two Partners
            person.going = 1;
            if (primaryGoing) {
                person.goingPartner = person.name;
            } else {
                person.goingPartner = person.partner;
            }
            nextPage();
        } else if (!person.partner && person.plusOne && primaryGoing && secondaryGoing) {
            // Person With a guest
            person.going = 2;
            person.bringingGuest = true;
            nextPage();
        } else if (!person.partner && person.plusOne && primaryGoing && !secondaryGoing) {
            // Person going without guest
            person.going = 1;
            person.bringingGuest = false;
            nextPage();
        } else if (!person.partner && person.plusOne && !primaryGoing && secondaryGoing) {
            alert('Cannot accept invitation without primary invitee going')
        } else if (!person.partner && !person.plusOne) {
            // Person with no guest options
            person.going = 1;
            nextPage();
        }
    }

    return (
        <Page>
            <div className={styles.acceptNames}>
                {person.partner && <>
                  <p><span>{person.name}</span><Checkbox color='secondary' onChange={e => setPrimaryGoing(e.target.checked)} checked={primaryGoing}/></p>
                  <p><span>and {person.partner}</span><Checkbox color='secondary' onChange={e => setSecondaryGoing(e.target.checked)} checked={secondaryGoing}/></p>
                </>}
                {!person.partner && person.plusOne && <>
                  <p><span>{person.name}</span><Checkbox color='secondary' onChange={e => setPrimaryGoing(e.target.checked)} checked={primaryGoing}/></p>
                  <p><span>and Guest</span><Checkbox color='secondary' onChange={e => setSecondaryGoing(e.target.checked)} checked={secondaryGoing}/></p>
                </>}
                {!person.partner && !person.plusOne && <>
                  <div><p className={styles.single}>{person.name}</p></div>
                </>}
            </div>
            <div className={styles.acceptButtons}>
                <button style={{backgroundColor: accept ? '#5f7153' : 'white', color: accept ? 'white' : '#5f7153', "&:hover": {background: '#5f7153'}}} onClick={handleAccept}>Joyfully Accept</button>
                <button style={{backgroundColor: decline ? '#5f7153' : 'white', color: decline ? 'white' : '#5f7153'}} onClick={handleDecline}>Regretfully Decline</button>
            </div>
            <div>
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
        </Page>
    )
}