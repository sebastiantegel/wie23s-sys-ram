import { createContext } from "react";

export interface IUserContext {
  name: string;
  email: string;
  avatar: string;
}

export const UserContext = createContext<IUserContext>({
  name: "",
  email: "",
  avatar: "",
});
