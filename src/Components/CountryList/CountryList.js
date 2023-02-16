import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Country from "../Country/Country";
import CustomSelectBox from "../CustomSelectBox/CustomSelectBox";
import Search from "../Search/Search";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [messageRendering, setMessageRendering] = useState("Loading .... !");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setCountries(res.data);
        setAllCountries(res.data);
      })
      .catch((err) => {
        setMessageRendering(err.message);
        console.log(err);
      });
  }, []);

  const renderCountries = () => {
    if (!allCountries || allCountries.length === 0)
      return (
        <p className="mx-14 mt-6 dark:text-slate-200 tracking-wider text-slate-800 text-3xl">
          {messageRendering}
        </p>
      );

    if (allCountries && allCountries !== []) {
      return (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-14 lg:mx-14 md:grid-cols-3 md:gap-8 md:mx-6 justify-items-center mx-14">
            {allCountries &&
              allCountries.map((country) => {
                return (
                  <Country
                    key={JSON.stringify(country.cca2 + country.cca)}
                    country={country}
                  />
                );
              })}
          </div>
        </>
      );
    }
  };
  return (
    <Fragment>
      <div className="lg:flex lg:align-items-center lg:justify-between lg:px-10 md:flex md:align-items-center md:justify-between md:px-2">
        <Search countries={countries} setAllCountries={setAllCountries} />
        <CustomSelectBox />
      </div>
      {renderCountries()}
    </Fragment>
  );
};

export default CountryList;
