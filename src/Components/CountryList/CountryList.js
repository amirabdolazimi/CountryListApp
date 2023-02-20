import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Country from "../Country/Country";
import CustomSelectBox from "../CustomSelectBox/CustomSelectBox";
import Search from "../Search/Search";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [messageRendering, setMessageRendering] = useState("Loading .... !");
  const [sortValue, setSortValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

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

  const filter = (searchValue, sortValue) => {
    let filtered;
    const filteredCountries = countries.filter((c) =>
      c.name.common.toLowerCase().includes(searchValue.toLowerCase())
    );
    switch (sortValue) {
      case "All":
        filtered = [...filteredCountries];
        break;
      case "Africa": {
        filtered = filteredCountries.filter((c) => c.region === "Africa");
        break;
      }
      case "Asia": {
        filtered = filteredCountries.filter((c) => c.region === "Asia");
        break;
      }
      case "Americas": {
        filtered = filteredCountries.filter((c) => c.region === "Americas");
        break;
      }
      case "Europe": {
        filtered = filteredCountries.filter((c) => c.region === "Europe");
        break;
      }
      case "Oceania": {
        filtered = filteredCountries.filter((c) => c.region === "Oceania");
        break;
      }
      default: {
        filtered = [...filteredCountries];
        break;
      }
    }
    setAllCountries(filtered);
  };

  const sort = (value) => {
    setSortValue(value);
    filter(searchValue, value);
  };

  const searchHandler = (e) => {
    setSearchValue(e.target.value);
    filter(e.target.value, sortValue);
  };

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
          <div className="grid grid-cols-1 sm:gap-2 mx-14 lg:grid-cols-4 lg:gap-14 lg:mx-14 md:grid-cols-3 md:gap-8 md:mx-6 justify-items-center">
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
        <Search onSearch={searchHandler} searchValue={searchValue} />
        <CustomSelectBox sortValue={sortValue} onSort={sort} />
      </div>
      {renderCountries()}
    </Fragment>
  );
};

export default CountryList;
