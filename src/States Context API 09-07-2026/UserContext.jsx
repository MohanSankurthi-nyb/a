import { createContext, useState } from "react";
// Create Context
export const UserContext = createContext();
// Create Provider
export function UserProvider1(props) {

  const [user, setUser] = useState("John");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}