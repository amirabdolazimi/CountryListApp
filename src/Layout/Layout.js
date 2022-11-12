import CountryHeader from "../components/header/CountryHeader";
import "../App.css";

const Layout = ({ children, setDarkMode, darkMode }) => {
  return (
    <>
      <CountryHeader setDarkMode={setDarkMode} darkMode={darkMode} />
      <div className="App">{children}</div>
    </>
  );
};

export default Layout;
