import { ReactNode, useState } from "react";
import { ITheme, ThemeContext, themes } from "../contexts/ThemeContext";

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<ITheme>(themes.night);

  currentTheme.toggleTheme = () => {
    currentTheme === themes.day
      ? setCurrentTheme(themes.night)
      : setCurrentTheme(themes.day);
  };

  return (
    <ThemeContext.Provider value={currentTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
