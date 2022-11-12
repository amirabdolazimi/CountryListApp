import styles from "./Filter.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useCountriesActions } from "../../Providers/CountriesProvider";
import { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";

const Filter = ({ darkMode }) => {
  const dispatch = useCountriesActions();
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (e) => {
    dispatch({ type: "search", event: e.target.value });
    setSearchValue(e.target.value);
  };

  const searchIconColor = {
    color: darkMode ? "rgb(225,225,225)" : "#25262b",
  };
  return (
    <div className={styles.CustomizeSection}>
      <div
        className={`${styles.SearchBar} ${
          darkMode ? styles.darkMode : styles.lightMode
        }`}
      >
        <AiOutlineSearch
          className={styles.SearchIcon}
          style={searchIconColor}
        />
        <input
          type="text"
          className={`${styles.SearchInput} ${
            darkMode && styles.inputDarkMode
          }`}
          placeholder="Search for a country ..."
          onChange={searchHandler}
          value={searchValue}
        />
      </div>
      <div className={styles.selectBox}>
        <CustomSelect darkMode={darkMode} />
      </div>
    </div>
  );
};

export default Filter;
