const { Attendee } = require("./attendees.js");
const fs = require("fs");
const { parse } = require("csv-parse");

const people = [];

fs.createReadStream("./db/weddinginvite.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    let person = {
        title: row[0],
        name: row[2] + ' ' + row[1],
        plusOne: row[6] === 'Y',
        partnerTitle: row[3],
        partner: row[5] + ' ' + row[4],
    }
    if (person.partner === ' ') {
        person.partner = '';
    }
    people.push(person);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    console.log(people);
    Attendee.create(people)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    console.log("finished");
  });


//let attendeeDoc = new Attendee(testAttendee);

//attendeeDoc.save().then(() => console.log('SAVED'));