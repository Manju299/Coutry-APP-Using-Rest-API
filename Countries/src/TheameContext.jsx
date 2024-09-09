import React, { useContext, useState } from "react";

const TheameContext = React.createContext();
const ThemeUpdateContecxt = React.createContext();

export function useTheme(){
  return useContext(TheameContext)
}

export function useToggleTheme(){
  return useContext(ThemeUpdateContecxt)
}


 // eslint-disable-next-line react/prop-types
 export function TheameProvider ({ children }){
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((darkTheme) => !darkTheme);
  }
  return (
    <TheameContext.Provider value={darkTheme}>
      <ThemeUpdateContecxt.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContecxt.Provider>
    </TheameContext.Provider>
  );
};

