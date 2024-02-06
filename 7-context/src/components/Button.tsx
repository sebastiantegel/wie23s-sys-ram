import { ReactNode, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

interface IButtonProps {
  children: ReactNode;
  handleClick?: () => void;
}

export const Button = ({ children, handleClick }: IButtonProps) => {
  const currentTheme = useContext(ThemeContext);

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.foregroundColor,
      }}
    >
      {children}
    </button>
  );
};
