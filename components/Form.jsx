import React from 'react';
import Person from './form/Person.jsx';
import Accept from './form/Accept.jsx';
import Details from './form/Details.jsx';
import wonderstate from '../public/wonderstate.jpg';
import flowers from '../public/flowerbg.jpg';
import styles from '../styles/form.module.css';
import LastPage from './form/LastPage.jsx';

const { useEffect, useState } = React;

export default function Form() {
    const [bg, setBg] = useState(wonderstate);
    const [page, setPage] = useState(1);
    const [person, setPerson] = useState({label: ''});

    const nextPage = () => {
      //handle animations
      setBg(flowers);
      setPage(page + 1);
    }

    const previousPage = () => {
      setPage(page - 1);
      if (page - 1 === 1) {
        setBg(wonderstate);
        setPerson({label: ''})
      }
    }

    const setLastPage = (page) => {
        setPage(page);
    }

    return (
        <div className={styles.formContainer} style={{backgroundImage: `url(${bg.src})`}}>
          {page == 1 && <Person person={person} setPerson={setPerson} nextPage={nextPage}/>}
          {page == 2 && <Accept person={person} nextPage={nextPage} previousPage={previousPage} setLastPage={setLastPage}/>}
          {page == 3 && <Details person={person} previousPage={previousPage} nextPage={nextPage} setLastPage={setLastPage}/>}
          {(page == 5 || page == 4) && <LastPage page={page} />}
        </div>
    )
}