import { createContext, useState } from "react";
// Theme Context
export const ThemeContext = createContext();
export function ThemeProvider(props) {
  const [theme, setTheme] = useState("Light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
// User Context
export const UserContext = createContext();
export function UserProvider(props) {
   const [user, setUser] = useState({
    name: "John",
    age: 25
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
// Authentication Context
export const AuthContext = createContext();
export function AuthProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}