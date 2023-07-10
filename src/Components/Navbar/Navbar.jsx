import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.imgcontainer}>
        <Link to='/'>
        <img src='https://img.freepik.com/vector-premium/diseno-mundial_24911-42113.jpg' alt='countries'/>       
        </Link>
      </div>
      {/* <div className={styles.linkcontainer}>
        <Link to='/home'>Home</Link>
        <Link to='/create'>Form</Link>
      </div> */}
    </div>
  )
}

export default Navbar
