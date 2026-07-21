import { useState } from "react";

function LoadingErrorStates() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const API = "https://jsonplaceholder.typicode.com/users";


  // GET API DATA
  const fetchUsers = async () => {

    try {

      setLoading(true);
      setError("");

      const response = await fetch(API);


      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }


      const data = await response.json();

      setUsers(data);

    } 
    
    catch (err) {

      setError(err.message);

    } 
    
    finally {

      setLoading(false);

    }

  };


  return (

    <div>

      <h1>User List</h1>


      <button onClick={fetchUsers}>
        Fetch Users
      </button>


      {/* Loading State */}
      {
        loading && (
          <h3>
            Loading data...
          </h3>
        )
      }


      {/* Error State */}
      {
        error && (
          <h3 style={{ color: "red" }}>
            Error: {error}
          </h3>
        )
      }


      {/* Display API Data using map() */}

      {
        !loading &&
        users.map((user) => (

          <div key={user.id}>

            <h3>
              {user.name}
            </h3>

            <p>
              {user.email}
            </p>

            <hr />

          </div>

        ))
      }


    </div>

  );

}

export default LoadingErrorStates;