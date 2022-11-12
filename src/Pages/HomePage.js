import CountryList from "../components/CountryList/CountryList";
import Filter from "../components/Filter/Filter";

const HomePage = ({ darkMode }, props) => {
  return (
    <>
      <Filter darkMode={darkMode} />
      <CountryList darkMode={darkMode} />
    </>
  );
};

export default HomePage;
