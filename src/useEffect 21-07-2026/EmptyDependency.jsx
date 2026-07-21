import { useEffect } from "react";

function EmptyDependency() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <div>
      <h2>Empty Dependency Array</h2>
      <p>Check the console.</p>
      <hr />
    </div>
  );
}

export default EmptyDependency;