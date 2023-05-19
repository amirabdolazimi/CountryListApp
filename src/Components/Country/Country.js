import "./Country.css";
import { Link } from "react-router-dom";
const Country = ({ country }) => {
  console.log(country);

  return (
    <div className="w-4/6 md:w-full mt-11 pb-3 rounded-md bg-white dark:bg-slate-700 dark:text-slate-200 shadow-lg dark:shadow-3xl">
      <Link to="/country-detail" state={country}>
        <div className="countryFlag">
          <img
            className="rounded-t border-b dark:border-slate-700 border-slate-200"
            src={country.flags.png}
            alt={country.flags.alt}
          />
        </div>
        <div className="px-5 py-6">
          <div className="pb-1 lg:pb-3 md:pb-3 xl:pb-3">
            <h2 className="font-bold text-lg md:text-xl sm:text-sm">
              {country.name.common}
            </h2>
            {country.name.common === "Iran" && (
              <p className="text-red-600 font-bold mt-0.5 text-lg">
                #MahsaAmini
              </p>
            )}
          </div>
          <div className="mt-0.5 lg:mt-1 md:mt-1 xl:mt-1">
            <span className="font-semibold text-sm md:font-bold">
              Population :
            </span>
            <span className="text-slate-700 dark:text-slate-400 ml-1 text-xs md:text-base">
              {country.population}
            </span>
          </div>
          <div className="mt-0.5 lg:mt-1 md:mt-1 xl:mt-1">
            <span className="font-semibold text-sm md:font-bold">Region :</span>
            <span className="text-slate-700 dark:text-slate-400 ml-1 text-xs md:text-base">
              {country.region}
            </span>
          </div>
          <div className="mt-0.5 lg:mt-1 md:mt-1 xl:mt-1">
            <span className="font-semibold text-sm md:font-bold">
              Capital :
            </span>
            <span className="text-slate-700 dark:text-slate-400 ml-1 text-xs md:text-base">
              {country.capital}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Country;
