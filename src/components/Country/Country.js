import { Link } from "react-router-dom";
import "./Country.css";
const Country = ({ Country, darkMode }) => {
  const { capital, flags, name, population, region } = Country;
  return (
    <div className={`Country ${darkMode ? "darkMode" : "lightMode"}`}>
      <Link
        to={{
          pathname: `/countrydetail/${name.common}`,
          state: { Country },
        }}
      >
        <div className="Country_flag">
          <img src={flags.png} alt={name.common} />
        </div>
        <div
          className={`CountryDetail ${darkMode ? "lightColor" : "darkColor"}`}
        >
          <h4>{name.common}</h4>
          {name.common === "Iran" && (
            <h5 className="mahsaAmini">#WeAreMahsaAmini</h5>
          )}
          <div className="Country_info">
            <p>Population: </p>
            <span className={!darkMode ? "lightSpan" : "darkSpan"}>
              {population}
            </span>
          </div>
          <div className="Country_info">
            <p>Region: </p>
            <span className={!darkMode ? "lightSpan" : "darkSpan"}>
              {region}
            </span>
          </div>
          <div className="Country_info">
            <p>Capital: </p>
            <span className={!darkMode ? "lightSpan" : "darkSpan"}>
              {capital}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Country;
