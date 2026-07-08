import React from "react";
import Child from "./Child";

function Parent4() {
  const studentName = "John";
  const age = 21;
  const subjects = ["Math", "Science", "English"];
  const student = {
    id: 101,
    city: "New York",
    grade: "A"
  };

  return (
    <div>
      <h2>Parent Component</h2>

      <Child
        name={studentName}
        age={age}
        subjects={subjects}
        student={student}
      />
    </div>
  );
}

export default Parent4;