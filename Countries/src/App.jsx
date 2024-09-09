import { useEffect, useState } from "react";
// import "./App.css";
import Header from "./components/Header";
import CountryDetails from "./components/CountryDetails";
import Listofcountries from "./components/Listofcountries";
import { TheameProvider, useTheme } from "./TheameContext";
// import Seach from "./components/Seach";
// import FilterCouties from "./components/filterCouties";
import Container from "./components/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [country, setCuntries] = useState([]);
  const [search, setSearch] = useState("");
  return (
    <>
      <BrowserRouter>
        <TheameProvider>
          <Header />
          {/* <Listofcountries
        country={country}
        setCuntries={setCuntries}
        search={search}
      />
      <CountryDetails country={country} setCuntries={setCuntries} /> */}

          <Routes>
            <Route
              path="/"
              element={
                <Listofcountries
                  country={country}
                  setCuntries={setCuntries}
                  search={search}
                  setSearch={setSearch}
                />
              }
            />
            <Route path="/countries/:county" element={<CountryDetails />} />
          </Routes>
        </TheameProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
