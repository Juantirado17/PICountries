import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getByName } from "../../redux/actions/actions.js";
import worldIcon from "../../assets/worldIcon.png";
import airplaneIcon from "../../assets/airplaneIcon.png";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [countryName, setCountryName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCountryName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getByName(countryName));
    setCountryName("");
  };
  return (
    <nav className={styles.nav}>
      <section className={styles.logo}>
        <Link to="/">
          <img src={worldIcon} alt="World icon" className={styles.icon} />
          <h1>Pangea</h1>
        </Link>
      </section>
      <label className={styles.hamburger}>
        <input type="checkbox" />
        <svg viewBox="0 0 32 32">
          <path
            className={`${styles.line} ${styles.lineTopBottom}`}
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className={styles.line} d="M7 16 27 16"></path>
        </svg>
      </label>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <div className={styles.containerInput}>
          <input
            type="search"
            placeholder="Type here..."
            name="name"
            value={countryName}
            className={styles.input}
            onChange={handleChange}
          />
          <svg
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <button className={styles.button} type="submit">
          <div className={styles.imgWrapper}>
            <img src={airplaneIcon} alt="Airplane icon" />
          </div>
          <span>Travel</span>
        </button>
      </form>
      <Link to="/create" className={styles.createActivity}>
        Create Activity
      </Link>
    </nav>
  );
};

export default SearchBar;
