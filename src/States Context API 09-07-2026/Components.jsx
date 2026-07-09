import { useContext } from "react";
import { ThemeContext, UserContext, AuthContext } from "./Context";
function Components() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <h2>Context API Practice</h2>
      <h3>User Information</h3>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <h3>Theme</h3>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme("Dark")}>
        Change Theme
      </button>
      <h3>Authentication</h3>
      <p>
        Status: {isLoggedIn ? "Logged In" : "Logged Out"}
      </p>
      <button onClick={() => setIsLoggedIn(true)}>
        Login
      </button>
      <button onClick={() => setIsLoggedIn(false)}>
        Logout
      </button>
    </div>
  );
}

export default Components;