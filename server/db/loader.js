const { Attendee } = require("./attendees.js");

// Test with hard data
let testAttendee = {
    firstName: 'Taylor',
    lastName: 'Swift',
    going: 'pending'
}

let attendeeDoc = new Attendee(testAttendee);

attendeeDoc.save().then(() => console.log('SAVED'));