import { useEffect, useState } from "react";
import axios from "axios";

function FetchAxiosExample() {
  const [fetchUsers, setFetchUsers] = useState([]);
  const [axiosUsers, setAxiosUsers] = useState([]);

  // Fetch API Call
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setFetchUsers(data);
      })
      .catch((error) => {
        console.log("Fetch Error:", error);
      });
  }, []);


  // Axios API Call
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setAxiosUsers(response.data);
      })
      .catch((error) => {
        console.log("Axios Error:", error);
      });
  }, []);


  return (
    <div>
      <h2>Fetch API Users</h2>

      {fetchUsers.map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}


      <hr />


      <h2>Axios API Users</h2>

      {axiosUsers.map((user) => (
        <p key={user.id}>
          {user.name} - {user.email}
        </p>
      ))}
    </div>
  );
}

export default FetchAxiosExample;