const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

let attendeeSchema = mongoose.Schema({
    name: String,
    title: String,
    partner: String,
    partnerTitle: String,
    plusOne: Boolean,
    wisconsin: String,
    thailand: String,
    going: Number,
    bringingGuest: Boolean,
    goingPartner: String,
    diet: String,
    guestName: String
})

let Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = { Attendee };