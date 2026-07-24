function MapExample() {
  const students = ["Rahul", "Anjali", "Kiran", "Ravi"];

  return (
    <div>
      <h2>4. map() Method</h2>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

      <hr />
    </div>
  );
}

export default MapExample;