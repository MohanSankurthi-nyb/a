import { useState } from "react";

function EventBased() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h2>{isOn ? "Light ON" : "Light OFF"}</h2>

      <button onClick={toggleLight}>
        Toggle
      </button>
    </div>
  );
}

export default EventBased;