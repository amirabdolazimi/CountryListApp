import { Route, Routes } from "react-router-dom";
import "./App.css";
import CountryDetail from "./Components/CountryDetail/CountryDetail";
import CountryList from "./Components/CountryList/CountryList";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/country-detail" element={<CountryDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
