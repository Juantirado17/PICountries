import React from 'react'
import Card from '../Card/Card'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getAllCountries} from '../../redux/actions/actions.js';
import SearchBar from '../SearchBar/SearchBar';
import Sorting from '../Sorting/Sorting';
import Paging from '../Paging/Paging';
import styles from './Home.module.css';


const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.shownCards);
  const currentPage = useSelector((state) => state.page);
  
 

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <div className={styles.homeView}>
       <header>
        <SearchBar />
        <Sorting />       
      </header>
      <div className={styles.cards}>
        {countries.length === 0 ? (
          <div className={styles.load}>
          <div>L</div>
          <div>O</div>
          <div>A</div>
          <div>D</div>
          <div>I</div>
          <div>N</div>
          <div>G</div>
        </div>
        ) : (
          countries.map((country) => {
            return (
              <Card
                key={country.id}
                id={country.id}
                flag={country.flag}
                name={country.name}
                continent={country.continent}
              />
            );
          })
        )}
      </div>  
      <Paging currentPage={currentPage} />   
    </div>
  );
};

export default Home;

  


  