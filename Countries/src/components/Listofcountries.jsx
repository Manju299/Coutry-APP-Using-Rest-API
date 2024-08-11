import { useEffect, useState } from "react";
import DisplyaCountries from "./DisplayCountries";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export default function Listofcountries({ country, setCuntries, search }) {
  const [isLoading, setLoading] = useState(true);
  const [filteredData, setfilteredData] = useState([]);

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
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <DisplyaCountries country={filteredData} />
      )}
    </div>
  );
}

Listofcountries.propTypes = {
  search: PropTypes.string, // Ensure search is a string
};
