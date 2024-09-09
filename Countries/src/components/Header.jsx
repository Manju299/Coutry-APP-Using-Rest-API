import { useEffect } from "react";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import Styles from "../styles/Header.module.css";
import { useTheme, useToggleTheme } from "../TheameContext";

export default function Header() {
  const darkTheme = useTheme();
  const toggleTheme = useToggleTheme();

  useEffect(() => {
    // Add the theme class to the body
    document.body.className = darkTheme ? "light" : "dark";
  }, [darkTheme]);

  return (
    <div
      className={`${Styles.Header} ${darkTheme ? Styles.light : Styles.dark}`}
    >
      <div className={Styles.darkmode}>
        <h1 className={Styles.heading}>Where in the world?</h1>
      </div>
      <div
        className={`${Styles.darkmode} ${
          darkTheme ? Styles.light : Styles.dark
        }`}
        onClick={toggleTheme}
      >
        <img
          src={`${darkTheme ? moon : sun}`}
          alt="dark mode"
          className={Styles.dark_mode_image}
        />
        <p>{`${darkTheme ? "Dark Mode" : "Light Mode"}`}</p>
      </div>
    </div>
  );
}
