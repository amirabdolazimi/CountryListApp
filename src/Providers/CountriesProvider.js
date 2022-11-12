import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const CountriesContext = createContext();
const CountriesContextDispatcher = createContext();

export const useCountries = () => useContext(CountriesContext);
export const useCountriesActions = () => useContext(CountriesContextDispatcher);

let initialState = [];
const CountriesProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);
  const reducer = (state, action) => {
    switch (action.type) {
      case "initilizeState": {
        // console.log("initilized");
        return action.payload;
      }

      case "sort": {
        const value = action.event;
        const countries = [...allCountries];
        if (value === "All") {
          return allCountries;
        } else {
          const sortedItems = countries.filter(
            (country) => country.region.toLowerCase() === value.toLowerCase()
          );
          return sortedItems;
        }
      }
      case "search": {
        const value = action.event;
        const countries = [...allCountries];
        if (value !== "") {
          const filteredItems = countries.filter((country) => {
            return (
              country.name.common.toLowerCase().indexOf(value.toLowerCase()) >=
              0
            );
          });
          return filteredItems;
        } else {
          return allCountries;
        }
      }
      default:
        return state;
    }
  };

  const [countries, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        dispatch({ type: "initilizeState", payload: res.data });
        initialState = res.data;
        setAllCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CountriesContext.Provider value={countries}>
      <CountriesContextDispatcher.Provider value={dispatch}>
        {children}
      </CountriesContextDispatcher.Provider>
    </CountriesContext.Provider>
  );
};

// ("https://restcountries.com/v3.1/all");

export default CountriesProvider;
