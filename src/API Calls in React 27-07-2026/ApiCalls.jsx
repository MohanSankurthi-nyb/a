import { useEffect, useState } from "react";

function ApiCalls() {
  const [data, setData] = useState({
    get: null,
    post: null,
    put: null,
    patch: null,
    delete: "",
  });

  useEffect(() => {
    async function fetchData() {
      const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

      // GET
      const getRes = await fetch(`${BASE_URL}/1`);
      const getData = await getRes.json();

      // POST
      const postRes = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "New Post",
          body: "This is a new post",
          userId: 1,
        }),
      });
      const postData = await postRes.json();

      // PUT
      const putRes = await fetch(`${BASE_URL}/1`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: 1,
          title: "Updated Title",
          body: "Updated Body",
          userId: 1,
        }),
      });
      const putData = await putRes.json();

      // PATCH
      const patchRes = await fetch(`${BASE_URL}/1`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "Patched Title",
        }),
      });
      const patchData = await patchRes.json();

      // DELETE
      const deleteRes = await fetch(`${BASE_URL}/1`, {
        method: "DELETE",
      });

      setData({
        get: getData,
        post: postData,
        put: putData,
        patch: patchData,
        delete: deleteRes.ok ? "Deleted Successfully" : "Delete Failed",
      });
    }

    fetchData();
  }, []);

  return (
    <>
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
    </>
  );
}

export default ApiCalls;