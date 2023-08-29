import React from 'react';
import Page from './Page.jsx';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from '@mui/material/Container';
import axios from 'axios';
import styles from '../../styles/form.module.css';

import { red } from '@mui/material/colors';
const color = red[500];


const { useEffect, useState } = React;

export default function Person({ person, setPerson, nextPage }) {

  const [inputValue, setInputValue] = useState('');
  const [names, setNames] = useState([]);
  const [value, setValue] = useState(person);

  useEffect(() => {
    setPerson(value);
    if (value && value._id) {
        nextPage();
    }
  }, [value])

  let handleChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    if (newInputValue.length >= 3) {
      axios.get('/api/attendee', { params: { name: newInputValue } })
        .then(res => {
          let list = [{label: ''}];
          res.data.data.forEach(person => {
            let attendee = {
              label: person.name,
              name: person.name,
              _id: person._id,
              partner: person.partner,
              plusOne: person.plusOne
            }
            if (attendee.partner) {
                attendee.label = `${person.name} and ${person.partner}`
            }
            list.push(attendee)
          })
          setNames(list);
        })
    } else {
      setNames([]);
    }
  }


    return (
        <Page color='white'>
            <div className={styles.text}>
              <h1>RSVP</h1>
              <p>We look forward to seeing you.</p>
              <p>Official wedding invitations will go out later this year</p>
              {/* <p>Please respond by April 30, 2024.</p> */}
            </div>
            {/* <Container filled='true' sx={{ marginTop: '10%', color: 'white' }}>
                <Autocomplete
                    className={styles.searchName}
                    filterOptions={(x) => x}
                    isOptionEqualToValue={(option, value) => option._id === value._id}
                    disablePortal
                    id="combo-box-demo"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    options={names}
                    inputValue={inputValue}
                    onInputChange={handleChange}
                    getOptionDisabled={(option) => !option._id}
                    renderInput={(params) => <TextField color='primary' variant="filled" {...params} label="Guest" />}
                />
            </Container> */}
        </Page>
    )
}