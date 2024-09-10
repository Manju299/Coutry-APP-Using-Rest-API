import React, { useContext, useState } from "react";

const CountryContext = React.createContext();
// const ThemeUpdateContecxt = React.createContext();

export function useCountry() {
  return useContext(CountryContext);
}

// export function useToggleTheme(){
//   return useContext(ThemeUpdateContecxt)
// }

// eslint-disable-next-line react/prop-types
export function CountyProvider({ children }) {
  const [country, setCuntries] = useState([]);

  //   function changeCountry() {
  //     setSetCountry((darkTheme) => !darkTheme);
  //   }
  return (
    <CountryContext.Provider value={{ country, setCuntries }}>
      {/* <ThemeUpdateContecxt.Provider value={toggleTheme}> */}
      {children}
      {/* </ThemeUpdateContecxt.Provider> */}
    </CountryContext.Provider>
  );
}
