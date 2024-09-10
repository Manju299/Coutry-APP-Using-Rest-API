/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Styles from "../styles/CountryDetails.module.css";
import back from "../assets/back.svg";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../TheameContext";

// eslint-disable-next-line react/prop-types
export default function CountryDetails() {
  const [detailedCoutry, setDetailedCountry] = useState([]);
  const { county } = useParams();
  const navigate = useNavigate();
  const darkTheme = useTheme();

  console.log(detailedCoutry);

  useEffect(() => {
    async function fetcthcountyInfo() {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${county}`
      );
      const data = await response.json();
      console.log(data);
      setDetailedCountry(data);
    }
    fetcthcountyInfo();
  }, []);

  function handleBack() {
    navigate("/");
  }

  return (
    <>
      <button
        onClick={handleBack}
        className={`${Styles.button} ${
          darkTheme ? Styles.lightButton : Styles.darkButton
        }`}
      >
        <img src={back} alt="Go Back"></img> <span>Back</span>
      </button>
      {detailedCoutry.map((items) => (
        <div key={items.name.common} className={Styles.container}>
          <div className={Styles.info}>
            <img src={items.flags.svg} alt={items.flags.alt} />
          </div>
          <div
            className={`${Styles.info} ${
              darkTheme ? Styles.light : Styles.dark
            }`}
          >
            <p className={Styles.commanname}>{items.name.common}</p>

            <div className={Styles.countyInfo}>
              <div>
                <p>
                  Native Name:{" "}
                  <span>
                    {Object.values(items.name.nativeName)[0].official}
                  </span>
                </p>

                <p>
                  Population: <span>{items.population}</span>
                </p>

                {Object.values(items.currencies).map(
                  (currency, currencyIndex) => (
                    <p key={currencyIndex}>
                      Currencies: <span> {currency.name}</span>
                    </p>
                  )
                )}

                <p>
                  {/* Currencies: <span>{items.currencies.CAD.name}</span> */}
                </p>

                <p>
                  Region:
                  <span> {items.region}</span>
                </p>
                <p>
                  {items.borders ? "Sub Region:" : ""}{" "}
                  <span>{items.subregion}</span>
                </p>
              </div>
              <div>
                <p>
                  Top Level Domain:
                  <span> {items.tld[0]}</span>
                </p>

                <p>
                  Capital: <span>{items.capital[0]}</span>
                </p>

                <p>
                  Language: <span>{items.languages.eng}</span>
                </p>
              </div>
            </div>

            <div>
              {items.borders ? "Border Countries:" : ""}
              {items.borders?.map((list, index) => (
                <button
                  key={index}
                  className={`${Styles.border} ${
                    darkTheme ? Styles.lightButton : Styles.darkButton
                  }`}
                >
                  {list}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
