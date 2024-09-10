/* eslint-disable react/prop-types */
import Styles from "../styles/Container.module.css";
import { useTheme } from "../TheameContext";
import Seach from "./Seach";
import FilterCouties from "./filterCouties";

export default function Container({ search, setSearch, country }) {
  const darkTheme = useTheme();
  return (
    <div
      className={`${Styles.Container} ${
        darkTheme ? Styles.light : Styles.dark
      }`}
    >
      <Seach search={search} setSearch={setSearch} />
      <FilterCouties country={country} />
    </div>
  );
}
