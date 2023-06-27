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



// export default function RSVP() {

//   const [inputValue, setInputValue] = useState('');
//   const [names, setNames] = useState([]);
//   const [value, setValue] = useState({label: ''});



//   let handleChange = (event, newInputValue) => {
//     setInputValue(newInputValue);
//     if (newInputValue.length >= 3) {
//       axios.get('/api/attendee', { params: { name: newInputValue } })
//         .then(res => {
//           let list = [{label: ''}];
//           res.data.data.forEach(person => {
//             let attendee = {
//               label: person.name,
//               name: person.name,
//               _id: person._id,
//               partner: person.partner,
//               plusOne: person.plusOne
//             }
//             list.push(attendee)
//           })
//           setNames(list);
//         })
//     } else {
//       setNames([]);
//     }
//   }

//   return (
//     <div className='gray-page'>
//       <Navbar color='black' page='/rsvp' />
//       <div>
//         <Container sx={{ marginTop: '10%' }}>
//           <Autocomplete
//             filterOptions={(x) => x}
//             isOptionEqualToValue={(option, value) => option._id === value._id}
//             disablePortal
//             id="combo-box-demo"
//             value={value}
//             onChange={(event, newValue) => {
//               setValue(newValue);
//             }}
//             options={names}
//             inputValue={inputValue}
//             onInputChange={handleChange}
//             getOptionDisabled={(option) => !option._id}
//             renderInput={(params) => <TextField {...params} label="Guest" />}
//           />
//           <Form person={value}/>
//         </Container>
//       </div>
//     </div>
//   )
// }