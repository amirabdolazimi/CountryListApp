import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout/Layout";
import CountryDetailPage from "./Pages/CountryDetailPage";
import HomePage from "./Pages/HomePage";
import CountriesProvider from "./Providers/CountriesProvider";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  darkMode
    ? document.body.classList.add("darkBody")
    : document.body.classList.remove("darkBody");

  const proudOfThisFunc = () => {
    console.log("🎉");
  };
  proudOfThisFunc();
  return (
    <Switch>
      <CountriesProvider>
        <Layout setDarkMode={setDarkMode} darkMode={darkMode}>
          <Route
            path="/"
            render={() => <HomePage darkMode={darkMode} />}
            exact={true}
          />
          <Route
            path="/countrydetail"
            render={() => <CountryDetailPage darkMode={darkMode} />}
          />
        </Layout>
      </CountriesProvider>
    </Switch>
  );
}

export default App;
