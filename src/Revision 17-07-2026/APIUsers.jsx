import { useState } from "react";

function APIUsers() {
  const [output, setOutput] = useState("");

  const apiURL = "https://jsonplaceholder.typicode.com/posts";
  // GET Request
  async function getData() {
    try {
      const response = await fetch(apiURL);//sends get request to api
      const data = await response.json();//convert response to json
      setOutput(
        "GET Response:\n" +
          JSON.stringify(data.slice(0, 3), null, 2)
      );

    } catch (error) {
      setOutput(error.message);
    }
  }
  // POST Request
  async function postData() {
    try {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title: "New Post",
          body: "Created using POST",
          userId: 1,
        }),
      });
      const data = await response.json();
      setOutput(
        "POST Response:\n" +
          JSON.stringify(data, null, 2)
      );

    } catch (error) {
      setOutput(error.message);
    }
  }
  // PUT Request
  async function putData() {
    try {
      const response = await fetch(apiURL + "/1", {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 1,
          title: "Updated Post",
          body: "Updated using PUT",
          userId: 1,
        }),
      });
      const data = await response.json();
      setOutput(
        "PUT Response:\n" +
          JSON.stringify(data, null, 2)
      );

    } catch (error) {
      setOutput(error.message);
    }
  }
  // PATCH Request
  async function patchData() {
    try {
      const response = await fetch(apiURL + "/1", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "Changed Title",
        }),
      });
      const data = await response.json();
      setOutput(
        "PATCH Response:\n" +
          JSON.stringify(data, null, 2)
      );

    } catch (error) {
      setOutput(error.message);
    }
  }
  // DELETE Request
  async function deleteData() {
    try {
      const response = await fetch(apiURL + "/1", {
        method: "DELETE",
      });

      if (response.ok) {
        setOutput(
          "DELETE Response:\nData deleted successfully"
        );
      } else {
        setOutput("Delete failed");
      }
    } catch (error) {
      setOutput(error.message);
    }
  }
  return (
    <div>
      <h2>API Requests Using HTTP Methods</h2>
      <button onClick={getData}>
        GET
      </button>
      <button onClick={postData}>
        POST
      </button>
      <button onClick={putData}>
        PUT
      </button>
      <button onClick={patchData}>
        PATCH
      </button>
      <button onClick={deleteData}>
        DELETE
      </button>
      <h3>Response:</h3>
      <pre>
        {output}
      </pre>
    </div>
  );
}

export default APIUsers;