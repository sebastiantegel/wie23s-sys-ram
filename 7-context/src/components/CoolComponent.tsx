import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

export const CoolComponent = () => {
  const value = useContext(MyContext);

  return <>{value}</>;
};
