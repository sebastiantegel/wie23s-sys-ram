import { createContext } from "react";

export interface ITheme {
  name: string;
  backgroundColor: string;
  foregroundColor: string;
  toggleTheme: () => void;
}

export interface IThemes {
  night: ITheme;
  day: ITheme;
}

export const themes: IThemes = {
  night: {
    name: "Night",
    backgroundColor: "black",
    foregroundColor: "white",
    toggleTheme: () => {},
  },
  day: {
    name: "Day",
    backgroundColor: "ivory",
    foregroundColor: "maroon",
    toggleTheme: () => {},
  },
};

export const ThemeContext = createContext<ITheme>(themes.day);
