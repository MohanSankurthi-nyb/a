import React from "react";
import Parent1 from "./Props 08-07-2026/A/Parent1";
import Parent2 from "./Props 08-07-2026/A/Parent2";
import Parent from "./Props 08-07-2026/B/Parent";
import Parent3 from "./Props 08-07-2026/C/Parent";
import Counter from "./Props 08-07-2026/D/Counter";
import Parent4 from "./Props 08-07-2026/E/Parent4";
import Parent5 from "./Props 08-07-2026/F/Parent5";
import Parent6 from "./Props 08-07-2026/F/Parent6";
import Parent7 from "./Props 08-07-2026/G/Parent7";



function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Parent and Child Components</h1>

       <Parent1/>
      <hr />
      <Parent2/>
      <Parent/> 
      <Parent3/>
      <Counter/>
      <Parent4/>
      <Parent5/>
      <Parent6/>
      <Parent7/>
      
    </div>
  );
}

export default App;