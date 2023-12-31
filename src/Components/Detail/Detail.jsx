import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getById } from '../../redux/actions/actions'
import Error404 from '../Error404/Error404'
import { Link } from 'react-router-dom'
import airplaneIcon from '../../assets/airplaneIcon.png'
import Loader from '../Loader/Loader'
import styles from './Detail.module.css'



const Detail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const countryDetail = useSelector((state) => state.countryDetail);

   useEffect(() => {
    dispatch(getById(id));    
  },[]);
console.log(countryDetail);
  
  return (
    <div className={styles.view}>
     <main className={styles.info}>
      {Object.keys(countryDetail).length === 0 ? (
        <Loader />
      ) : countryDetail.name === -1 ? (
        <Error404 />
      ) : (
        <article>
          <section>
            {countryDetail.flag && (
              <img src={countryDetail.flag} alt={countryDetail.name} />
            )}
          </section>
          <section>
            {countryDetail.id && <p>ID: {countryDetail.id}</p>}

            {countryDetail.name && <h1>{countryDetail.name}</h1>}

            {countryDetail.continent && <h2>{countryDetail.continent}</h2>}

            {countryDetail.capital && (
              <h3>Capital: {countryDetail.capital}</h3>
            )}

            {countryDetail.subregion && (
              <p>Subregion: {countryDetail.subregion}</p>
            )}

            {countryDetail.area && <p>Area: {countryDetail.area}</p>}

            {countryDetail.population && (
              <p>Population: {countryDetail.population}</p>
            )}
            {countryDetail.Activities?.length > 0 && (
              <div>
                <h4>Activities:</h4>
                <ul>
                  {countryDetail.Activities.map((activity, index) => {
                    return <li key={index}>{activity.name}</li>;
                  })}
                </ul>
              </div>
            )}
          </section>
        </article>
      )}
      <article className={styles.back}>
        <Link to="/home">
          <button className={styles.button}>
            <div className={styles.imgWrapper}>
              <img src={airplaneIcon} alt="Airplane icon" />
            </div>
            <span>Back</span>
          </button>
        </Link>
      </article>
    </main>
  </div>
);
};

export default Detail;
