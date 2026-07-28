import React, { useState, useEffect } from "react";
// 1. Custom Hook for API Calls
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
// 2. Custom Hook for Form Handling
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const resetForm = () => {
    setValues(initialValues);
  };
  return { values, handleChange, resetForm };
}
// 3. Custom Hook for Window Resize Events
function useWindowResize() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return width;
}
// 4. Custom Hook for Theme Management
function useTheme() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return { theme, toggleTheme };
}
// Main Component
function CustomHooks1() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
  });
  const width = useWindowResize();
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        padding: "20px",
      }}
    >
      <h2>Custom Hooks Examples</h2>
      {/* API Call */}
      <h3>API Call Custom Hook</h3>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading data</p>}
      {data && <p>Total Users: {data.length}</p>}

      {/* Form Handling */}
      <h3>Form Handling Custom Hook</h3>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={values.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={values.email}
        onChange={handleChange}
      />
      <p>Name: {values.name}</p>
      <p>Email: {values.email}</p>
      <button onClick={resetForm}>Reset</button>

      {/* Window Resize */}
      <h3>Window Resize Custom Hook</h3>
      <p>Window Width: {width}px</p>

      {/* Theme Management */}
      <h3>Theme Custom Hook</h3>
      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}
export default CustomHooks1;
