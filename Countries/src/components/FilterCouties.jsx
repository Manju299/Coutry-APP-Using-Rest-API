/* eslint-disable react/prop-types */
import { useState } from "react";
import DisplyaCountries from "./DisplayCountries";
import Styles from "../styles/FilterCouties.module.css";

// eslint-disable-next-line react/prop-types
export default function FilterCouties({ country }) {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const filteredData =
    selectedRegion === ""
      ? country
      : country.filter((item) => item.region === selectedRegion);

  return (
    <div>
      <select value={selectedRegion} onChange={handleChange}>
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
