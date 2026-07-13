import React from "react";
import Profile from "./Context API 13-07-2026/Profile,";
import {  UserProvider1 } from "./Context API 13-07-2026/UserContext";
import { A, AProvider } from "./Context API 13-07-2026/A";
import B from "./Context API 13-07-2026/B";



function App() {
  return (
      <>
      <UserProvider1>
      <Profile/>
      </UserProvider1>
      <AProvider>
        <B/>
      </AProvider>
    </>
  );
}

export default App;