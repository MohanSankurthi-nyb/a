import { useEffect, useState } from "react";

function Handle() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

      try {
        // GET
        const get = await fetch(`${BASE_URL}/1`).then((res) => res.json());

        // POST
        const post = await fetch(BASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "New Post",
            body: "This is a new post",
            userId: 1,
          }),
        }).then((res) => res.json());

        // PUT
        const put = await fetch(`${BASE_URL}/1`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: 1,
            title: "Updated Title",
            body: "Updated Body",
            userId: 1,
          }),
        }).then((res) => res.json());

        // PATCH
        const patch = await fetch(`${BASE_URL}/1`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "Patched Title",
          }),
        }).then((res) => res.json());

        // DELETE
        const del = await fetch(`${BASE_URL}/1`, {
          method: "DELETE",
        });

        setData({
          get,
          post,
          put,
          patch,
          delete: del.ok ? "Deleted Successfully" : "Delete Failed",
        });
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>HTTP Methods Demo</h1>

      <h2>GET</h2>
      <pre>{JSON.stringify(data.get, null, 2)}</pre>

      <h2>POST</h2>
      <pre>{JSON.stringify(data.post, null, 2)}</pre>

      <h2>PUT</h2>
      <pre>{JSON.stringify(data.put, null, 2)}</pre>

      <h2>PATCH</h2>
      <pre>{JSON.stringify(data.patch, null, 2)}</pre>

      <h2>DELETE</h2>
      <p>{data.delete}</p>
    </div>
  );
}

export default Handle;