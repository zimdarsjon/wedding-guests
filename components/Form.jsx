import React from 'react';
import Person from './form/Person.jsx';
import Accept from './form/Accept.jsx';
import Details from './form/Details.jsx';
import wonderstate from '../public/wonderstate.jpg';
import flowers from '../public/flowerbg.jpg';
import styles from '../styles/form.module.css';

const { useEffect, useState } = React;

export default function Form() {
    const [bg, setBg] = useState(wonderstate);
    const [page, setPage] = useState(1);
    const [person, setPerson] = useState({label: ''});

    const nextPage = () => {
      //handle animations
      setPage(page + 1);
      console.log(page)
    }

    const previousPage = () => {

    }

    return (
        <div className={styles.formContainer} style={{backgroundImage: `url(${bg.src})`}}>
          {page == 1 && <Person person={person} setPerson={setPerson} nextPage={nextPage}/>}
          {page == 2 && <Accept />}
          {page == 3 && <Details />}
          {person && person.name && <h1>{person.name}</h1>}
        </div>
    )
}