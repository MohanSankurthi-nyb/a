import { useState } from "react";

function DynamicForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>5. Dynamic Form Handling</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
      />

      <h3>Entered Data</h3>

      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>City: {formData.city}</p>

      <hr />
    </div>
  );
}

export default DynamicForm;