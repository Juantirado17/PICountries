import React from 'react';
import { Link } from 'react-router-dom';
import style from './Landing.module.css';

const Landing = () => {
  return (
    <div className={style.LandingPage}>
            <title>Landing</title>
            <div className={style.container}>
                <br />
                <h1>Countries</h1>
                <br />
                <p></p>
                <Link to="/home">
                  <button>Get Into</button>
                </Link>
            </div>
        </div>
  )
}

export default Landing
