import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ flag, name, continent,id}) => {
  return (
    <Link to={`/countries/${id}`}>
    <div className={styles.card}>
        <h2>{name}</h2>
        <img src={flag} alt={`Flag: ${name}`} className={styles.img} />
        <h3>{continent}</h3>
    </div>
    </Link>
  );
};

export default Card