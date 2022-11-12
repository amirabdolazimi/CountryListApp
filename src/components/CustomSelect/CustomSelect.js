import { useState } from "react";
import styles from "./CustomSelect.module.css";
import { IoIosArrowDropdown } from "react-icons/io";
import { useCountriesActions } from "../../Providers/CountriesProvider";
const CustomSelect = ({ darkMode }) => {
  const dispatch = useCountriesActions();
  const [sortValue, setSortValue] = useState("Filter By Region");
  const [dropDownStatus, setDropDownStatus] = useState(false);
  const clickHandler = () => {
    setDropDownStatus((prevState) => !prevState);
  };

  const sortHandler = (event) => {
    dispatch({ type: "sort", event: event.target.id });
    setSortValue(event.target.id);
    setDropDownStatus((prevState) => !prevState);
  };

  const items = [
    { value: "All", label: "All" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "Americas" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  return (
    <>
      <div
        onClick={clickHandler}
        className={`${styles.CustomSelect} ${
          !darkMode ? styles.CustomSelectLight : styles.CustomSelectDark
        } ${!darkMode ? styles.lightMode : styles.darkMode}`}
      >
        <IoIosArrowDropdown className={styles.dropDownIcon} />
        <div>{sortValue}</div>
      </div>
      <div className={`${styles.dropDownParent}`}>
        <div
          className={`${styles.dropDown} ${
            dropDownStatus && styles.dropDownBlock
          }`}
        >
          {items.map((item) => (
            <div
              key={item.value}
              className={`${
                !darkMode ? styles.dropDownItemLight : styles.dropDownItemDark
              }`}
              id={item.value}
              onClick={sortHandler}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomSelect;
