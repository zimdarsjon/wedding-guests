const express = require('express');
const { findByLastName, updateAttendee} = require('./db/controller.js');

let app = express();

app.use(express.static(__dirname + '/../public'));

app.get('/last_name', findByLastName);
app.put('/attendee', updateAttendee);

app.listen(3000, () => console.log('Listening on port 3000'));