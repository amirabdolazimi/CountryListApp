import { useState } from "react";
import { BiSearch } from "react-icons/bi";
const Search = ({ countries, setAllCountries }) => {
  const [searchValue, setSearchValue] = useState("");
  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    if (searchValue === "") {
      setAllCountries(countries);
    } else {
      const filteredCountries = countries.filter((c) => {
        return c.name.common
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setAllCountries(filteredCountries);
    }
  };

  return (
    <div className="px-4 mt-5 lg:mt-14 md:mt-8 w-full lg:w-1/3 md:w-2/5 xl:w-2/5 relative">
      <div className="absolute top-3.5 left-7 lg:top-4 lg:text-xl text-lg text-slate-500 dark:text-slate-200">
        <BiSearch className=" lg:font-extrabold" />
      </div>
      <input
        value={searchValue}
        onChange={changeHandler}
        className="bg-white shadow dark:shadow-xl dark:text-slate-200 focus:outline-none rounded px-10 py-2.5 lg:py-3.5 w-full md:placeholder:text-sm placeholder:text-slate-400 dark:placeholder:text-slate-300 dark:bg-slate-700"
        placeholder="Search for a country . . . ."
      />
    </div>
  );
};

export default Search;
