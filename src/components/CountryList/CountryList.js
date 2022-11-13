import { useCountries } from "../../Providers/CountriesProvider";
import Country from "../Country/Country";
import styles from "./CountryList.module.css";
const CountryList = ({ darkMode }) => {
  const countries = useCountries();
  const renderCountries = () => {
    if (!countries) return <p>Fetching Data Failed ...!</p>;

    if (countries.length === 0) return <h3>Loading . . . . !</h3>;

    if (countries && countries !== []) {
      return countries.map((c) => {
        return <Country Country={c} key={c.name.common} darkMode={darkMode} />;
      });
    }
  };

  return <div className={styles.CountryList}>{renderCountries()}</div>;
};

export default CountryList;
