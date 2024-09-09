import { useEffect, useState } from "react";
import DisplyaCountries from "./DisplayCountries";
import PropTypes from "prop-types";
import Styles from "../styles/listofcountries.module.css";
import { useTheme } from "../TheameContext";
import Header from "./Header";
import Container from "./Container";

// eslint-disable-next-line react/prop-types
export default function Listofcountries({ country, setCuntries, search , setSearch}) {
  const [isLoading, setLoading] = useState(true);
  const [filteredData, setfilteredData] = useState([]);
  const darkTheme = useTheme();

  useEffect(() => {
    async function fetchAllCoutries() {
      const countries = await fetch("https://restcountries.com/v3.1/all");
      const data = await countries.json();
      console.log(data);
      setCuntries(data);
      setfilteredData(data);
      setLoading(false);
    }
    fetchAllCoutries();
  }, []);

  useEffect(() => {
    if (search === "") {
      setfilteredData(country);
    } else {
      // eslint-disable-next-line react/prop-types
      const filtered = country.filter((item) =>
        item.name.common.toLowerCase().includes(search.toLowerCase())
      );
      setfilteredData(filtered);
    }
  }, [search, country]);

  return (
    <div className={darkTheme ? Styles.light : Styles.dark}>
      
      <Container search={search} setSearch={setSearch} country={country} />
      {isLoading ? (
        <h1 className={Styles.loading}>Loading...</h1>
      ) : (
        <DisplyaCountries country={filteredData} />
      )}
    </div>
  );
}

Listofcountries.propTypes = {
  search: PropTypes.string, // Ensure search is a string
};
