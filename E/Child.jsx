import React from "react";

function Child({ name, age, subjects, student }) {
  return (
    <div>
      <h3>Child Component</h3>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>

      <p><strong>Subjects:</strong></p>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>

      <p><strong>Student Details:</strong></p>
      <p>ID: {student.id}</p>
      <p>City: {student.city}</p>
      <p>Grade: {student.grade}</p>
    </div>
  );
}

export default Child;