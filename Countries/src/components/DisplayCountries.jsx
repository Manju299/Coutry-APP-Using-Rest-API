/* eslint-disable react/prop-types */
import Proptype from "prop-types";
import Styles from "../styles/DisplayCountries.module.css";
import { NavLink } from "react-router-dom";
import { useTheme } from "../TheameContext";

export default function DisplayCountries({ country }) {
  const darkTheme = useTheme();
  return (
    <>
      <div
        className={`${Styles.container} ${
          darkTheme ? Styles.darklight : Styles.lightdark
        }`}
      >
        {country.map((item) => (
          <NavLink
            to={`/countries/${item.name.common}`}
            key={item.cca2}
            className={Styles.NavLink}
          >
            <div key={item.cca2} className={Styles.subcontainer}>
              <div
                className={`${Styles.image_wrapper} ${
                  darkTheme ? Styles.light : Styles.dark
                }`}
              >
                <img src={item.flags.svg} className={Styles.image} />
              </div>
              <div
                className={`${Styles.info_pad} ${
                  darkTheme ? Styles.light : Styles.dark
                }`}
              >
                <p
                  className={`${Styles.country} ${
                    darkTheme ? Styles.light : Styles.dark
                  }`}
                >
                  {item.name.common}
                </p>
                <p className={darkTheme ? Styles.lightinfo : Styles.darkinfo}>
                  <span>Population:</span> {item.population}
                </p>
                <p className={darkTheme ? Styles.lightinfo : Styles.darkinfo}>
                  <span>Region:</span> {item.region}
                </p>
                <p className={darkTheme ? Styles.lightinfo : Styles.darkinfo}>
                  <span>Capital:</span> {item.capital}
                </p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

DisplayCountries.propType = {
  country: Proptype.array.isRequired,
};
