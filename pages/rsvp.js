import React from 'react';
import Navbar from '../components/Navbar.jsx';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from '@mui/material/Container';
import axios from 'axios';
import Form from '../components/Form.jsx';

export default function RSVP() {

  return (
    <>
      <Navbar color='black' page='/rsvp' />
      <Form />
    </>
  )
}