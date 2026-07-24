import { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>1. Conditional Rendering</h2>

      {isLoggedIn ? (
        <p>Welcome, User!</p>
      ) : (
        <p>Please Login</p>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <hr />
    </div>
  );
}

export default ConditionalRendering;