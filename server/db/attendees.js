const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.ATLAS);

let attendeeSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    going: String,
    additional: Number
})

let Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = { Attendee };