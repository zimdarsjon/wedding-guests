import React from 'react';
import Navbar from '../components/Navbar.jsx';
import axios from 'axios';

const { useState, useEffect } = React;

export default function Responses() {
    const [both, setBoth] = useState([]);
    const [wisconsin, setWisconsin] = useState([]);
    const [thailand, setThailand] = useState([]);
    const [none, setNone] = useState([]);
    const [pending, setPending] = useState([]);


    useEffect(() => {
        axios.get('/api/attendee', { params: { both: true } })
            .then(res => {
                adjustNames(res.data.data);
                return res.data.data;
            })
            .then(res => setBoth(res))
            .catch((err) => console.log('Issue with both request'))
        axios.get('/api/attendee', { params: { pending: true } })
            .then(res => {
                adjustNames(res.data.data);
                return res.data.data;
            })
            .then(res => setPending(res))
            .catch((err) => console.log('Issue with pending request'))
        axios.get('/api/attendee', { params: { wisconsin: true } })
            .then(res => {
                adjustNames(res.data.data);
                return res.data.data;
            })
            .then(res => setWisconsin(res))
            .catch((err) => console.log('Issue with Wisconsin request'))
        axios.get('/api/attendee', { params: { thailand: true } })
            .then(res => {
                adjustNames(res.data.data);
                return res.data.data;
            })
            .then(res => setThailand(res))
            .catch((err) => console.log('Issue with Thailand request'))
        axios.get('/api/attendee', { params: { none: true } })
            .then(res => {
                adjustNames(res.data.data);
                return res.data.data;
            })
            .then(res => setNone(res))
            .catch((err) => console.log('Issue with None request'))
    }, [])

    const adjustNames = (people, responseType) => {
        people.forEach(person => {
            if (person.partner && person.goingPartner) {
                person.name = `${person.name} and ${person.partner} (Only ${person.goingPartner} going)`;
            } else if (person.partner) {
                person.name = `${person.name} and ${person.partner}`;
            } else if (person.guestName) {
                person.name = `${person.name} and ${person.guestName} (Guest)`;
            }
            if (person.diet) {
                person.name = person.name + '| Dietary Restrictions: ' + person.diet
            }
        });
    }

    return (
        <div className='gray-page'>
            <Navbar color='black' page='/party' />
            <h1>Attending Both Events</h1>
            {both.map((person, i) => <p key={i}>{person.name}</p>)}
            <h1>Attending Wisconsin Event</h1>
            {wisconsin.map((person, i) => <p key={i}>{person.name}</p>)}
            <h1>Attending Thailand Event</h1>
            {thailand.map((person, i) => <p key={i}>{person.name}</p>)}
            <h1>Cannot make it</h1>
            {none.map((person, i) => <p key={i}>{person.name}</p>)}
            <h1>Not yet responded</h1>
            {pending.map((person, i) => <p key={i}>{person.name}</p>)}
        </div>
    )
}
