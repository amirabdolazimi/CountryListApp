import styles from "./CountryHeader.module.css";
import { BsMoon, BsSun } from "react-icons/bs";
const CountryHeader = ({ setDarkMode, darkMode }) => {
  return (
    <div
      className={`${styles.header} ${
        darkMode ? styles.darkMode : styles.lightMode
      }`}
    >
      <div>
        <h1>Where in the world ? </h1>
      </div>
      <div
        className={styles.themes}
        onDoubleClick={() => setDarkMode((prevState) => !prevState)}
      >
        <span>{darkMode ? <BsMoon /> : <BsSun />}</span>
        <p> {darkMode ? "Dark Mode" : "Light Mode"}</p>
      </div>
    </div>
  );
};

export default CountryHeader;
