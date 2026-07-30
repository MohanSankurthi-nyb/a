import { useState } from "react";

function Events() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  // Click Event
  const handleClick = () => {
    alert("Button clicked!");
  };

  // Change Event
  const handleChange = (e) => {
    setColor(e.target.value);
    console.log("Selected Color:", e.target.value);
  };

  // Focus Event
  const handleFocus = (e) => {
    e.target.style.backgroundColor = "lightyellow";
    console.log("Input focused");
  };

  // Blur Event
  const handleBlur = (e) => {
    e.target.style.backgroundColor = "white";
    console.log("Input lost focus");
  };

  // Submit Event
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted!\nName: ${name}\nColor: ${color}`);
  };

  return (
    <div>
      <h2>React Events Example</h2>

      {/* Click Event */}
      <button onClick={handleClick}>Click Me</button>

      <br />
      <br />

      {/* Change, Focus & Blur Events */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <br />
      <br />

      {/* Change Event */}
      <select value={color} onChange={handleChange}>
        <option value="">Select Color</option>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>

      <br />
      <br />

      {/* Submit Event */}
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Events;