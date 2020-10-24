import React, { useContext, useEffect, useState } from "react";
import Theme from "../Theme/themes.enum";

interface ThemeContextModel {
  theme: Theme;
  setTheme: CallableFunction;
}

const ThemeContext = React.createContext({} as ThemeContextModel);

export const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState(Theme.Dark);
  useEffect(() => {
    document.documentElement.classList.add(theme.toLocaleString());
    return () => {
      document.documentElement.classList.remove(theme.toLocaleString());
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export function useThemeContext() {
  return useContext(ThemeContext);
}
