/* eslint-disable react/prop-types */
import { useState } from "react";
import DisplyaCountries from "./DisplayCountries";
import Styles from "../styles/FilterCouties.module.css";
import { useTheme } from "../TheameContext";

// eslint-disable-next-line react/prop-types
export default function FilterCouties({ country }) {
  const regions = [
    "Filter by Region",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];
  const [selectedRegion, setSelectedRegion] = useState("");
  const darkTheme = useTheme();

  const handleChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const filteredData =
    selectedRegion === "" || selectedRegion == "Filter by Region"
      ? country
      : country.filter((item) => item.region === selectedRegion);

  return (
    <div>
      <select
        value={selectedRegion}
        onChange={handleChange}
        className={darkTheme ? Styles.light : Styles.darkthem}
      >
        {regions.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      <div>
        <DisplyaCountries country={filteredData} />
      </div>
    </div>
  );
}
