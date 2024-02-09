import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const Home = () => {
  const user = useContext(UserContext);

  return <>Home: {user.name}</>;
};
