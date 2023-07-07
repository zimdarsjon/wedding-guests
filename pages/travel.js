import React from 'react';
import Navbar from '../components/Navbar.jsx';
import styles from '../styles/travel.module.css';
import Footer from '../components/Footer.jsx';
import Link from 'next/link'

export default function Travel() {
  return (
    <div className='gray-page'>
      <div className={styles.imageBack}>
        <Navbar color='white' page='/registry' />
        <div className={styles.messageBox}>
          <h1>Travel & Stay</h1>
          <h2>Most events will be taking place nearby.</h2>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <h1>Lodging Recommendations</h1>
        <div className={styles.locations}>
          <div className={styles.location}>
            <h2>Aurum The River Place</h2>
            <p>392/29 Maharaj Road, Pranakorn, Bangkok, Thailand 10200 </p>
            <p>2 minute walk to Chakrabongse Villas</p>
            <Link target="_blank" href='https://www.booking.com/hotel/th/aurum-the-river-place.html'><button>View Listings</button></Link>
          </div>
          <div className={styles.location}>
            <h2>The Royal ThaTien Village, Bangkok</h2>
            <p>394/27-29 Soi Pansook, Maharaj Road, Pranakorn, Bangkok, Thailand 10200</p>
            <p>Directly neighboring Chakrabongse Villas</p>
            <Link target="_blank" href='https://www.booking.com/hotel/th/the-royal-thatien-village.html'><button>View Listings</button></Link>
          </div>
          <div className={styles.location}>
            <h2>Sala Rattanakosin</h2>
            <p>39 Maharaj Road, Pranakorn, Bangkok, Thailand 10200</p>
            <p>4 minute walk to Chakrabongse Villas</p>
            <Link target="_blank" href='https://salarattanakosin.salahospitality.com/'><button>View Listings</button></Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
