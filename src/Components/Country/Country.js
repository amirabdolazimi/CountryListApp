import "./Country.css";
import { Link } from "react-router-dom";
const Country = ({ country }) => {
  return (
    <div className="w-4/6 md:w-full mt-11 pb-3 rounded-md bg-white shadow-lg">
      <Link to="/country-detail" state={country}>
        <div className="countryFlag">
          <img
            className="rounded-t border-b border-slate-100"
            src={country.flags.png}
            alt={country.flags.alt}
          />
        </div>
        <div className="px-5 py-6">
          <div className="pb-3">
            <h2 className="font-bold text-lg md:text-xl">
              {country.name.common}
            </h2>
          </div>
          <div className="mt-1">
            <span className="font-semibold text-sm md:font-bold">
              Population :
            </span>
            <span className="text-slate-700 ml-1 text-xs md:text-base">
              {country.population}
            </span>
          </div>
          <div className="mt-1">
            <span className="font-semibold text-sm md:font-bold">Region :</span>
            <span className="text-slate-700 ml-1 text-xs md:text-base">
              {country.region}
            </span>
          </div>
          <div className="mt-1">
            <span className="font-semibold text-sm md:font-bold">
              Capital :
            </span>
            <span className="text-slate-700 ml-1 text-xs md:text-base">
              {country.capital}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Country;