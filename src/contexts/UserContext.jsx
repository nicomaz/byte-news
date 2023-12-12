import { createContext, useState } from "react";
import defaultIcon from "../assets/default-user-icon.png";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "guest",
    name: "guest",
    avater_url: defaultIcon,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
