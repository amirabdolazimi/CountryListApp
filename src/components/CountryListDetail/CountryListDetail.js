import styles from "./CountryListDetail.module.css";
import { BsArrowLeft } from "react-icons/bs";
import { withRouter } from "react-router-dom";
const CountryDetail = (props) => {
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    languages,
    currencies,
    borders,
    flags,
    flag,
  } = props.location.state.Country;
  const darkMode = props.darkMode;
  const countryCurrencies = currencies
    ? Object.keys(currencies).map((key) => {
        return currencies[key].name;
      })
    : "it no has currencies";
  const countryNativeName = name.nativeName
    ? Object.values(name.nativeName).at(-1).official
    : "it no has nativeName";

  const countryLanguages = languages
    ? Object.values(languages).toString()
    : "it no has Languages";

  const clickHandler = () => {
    props.history.push("/");
  };
  return (
    <div>
      <div className={styles.back_btn}>
        <button
          onClick={clickHandler}
          className={darkMode ? styles.darkMode : styles.lightMode}
        >
          <span>
            <BsArrowLeft />
          </span>
          Back
        </button>
      </div>
      <div className={styles.countryDetail}>
        <div className={styles.countryFlag}>
          <img src={flags.png} alt={flag} />
        </div>
        <div className={styles.countryInformations}>
          <div>
            <h4 className={darkMode ? styles.lightColor : styles.darkColor}>
              {name.common ? name.common : "it no has name"}
            </h4>
          </div>
          <div className={styles.CountrySubDetail}>
            <div className={styles.firstSectionDetails}>
              <div>
                <p className={darkMode ? styles.lightColor : styles.darkColor}>
                  Native Name :
                </p>
                <span className={darkMode ? styles.lightSpan : styles.darkSpan}>
                  {countryNativeName}
                </span>
              </div>
              <div>
                <p className={darkMode ? styles.lightColor : styles.darkColor}>
                  Population :
                </p>
                <span className={darkMode ? styles.lightSpan : styles.darkSpan}>
                  {population ? population : "it no has population"}
                </span>
              </div>
              <div>
                <p className={darkMode ? styles.lightColor : styles.darkColor}>
                  Region :
                </p>
                <span className={darkMode ? styles.lightSpan : styles.darkSpan}>
                  {region ? region : "it no has region "}
                </span>
              </div>
              <div>
                <p className={darkMode ? styles.lightColor : styles.darkColor}>
                  Sub Region :
                </p>
                <span className={darkMode ? styles.lightSpan : styles.darkSpan}>
                  {subregion ? subregion : "it no has subregion"}
                </span>
              </div>
              <div>
                <p className={darkMode ? styles.lightColor : styles.darkColor}>
                  Capital :
                </p>
                <span className={darkMode ? styles.lightSpan : styles.darkSpan}>
                  {capital ? capital.at(-1) : "it no has capital"}
                </span>
              </div>
            </div>
            <div>
              <div>
                <p className={darkMode ? styles.lightColor : styles.darkColor}>
                  Top Level Domain :
                </p>
                <span className={darkMode ? styles.lightSpan : styles.darkSpan}>
                  {tld ? tld : "it no has TLD"}
                </span>
              </div>
              <div>
                <p className={darkMode ? styles.lightColor : styles.darkColor}>
                  Currencies :
                </p>
                <span className={darkMode ? styles.lightSpan : styles.darkSpan}>
                  {countryCurrencies}
                </span>
              </div>
              <div>
                <p className={darkMode ? styles.lightColor : styles.darkColor}>
                  Languages :
                </p>
                <span className={darkMode ? styles.lightSpan : styles.darkSpan}>
                  {countryLanguages}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.border_countries}>
            <div className={darkMode ? styles.lightColor : styles.darkColor}>
              Border Countries :{" "}
            </div>
            <div className={styles.countries_label}>
              {borders
                ? borders.map((border) => {
                    return (
                      <label
                        className={
                          !darkMode ? styles.lightMode : styles.darkMode
                        }
                        key={border}
                      >
                        {border}
                      </label>
                    );
                  })
                : "It Has No Border ...!"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CountryDetail);
