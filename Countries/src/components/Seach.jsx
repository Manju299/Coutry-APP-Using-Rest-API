import Styles from "../styles/Search.module.css";
import { useTheme } from "../TheameContext";

// eslint-disable-next-line react/prop-types
export default function Seach({ search, setSearch }) {
  const darkTheme = useTheme();
  return (
    <div>
      <input
        type="text"
        className={`${Styles.input_text} ${
          darkTheme ? Styles.light : Styles.dark
        }`}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a country"
      />
    </div>
  );
}
