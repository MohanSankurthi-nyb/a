import { useEffect, useState } from "react";

function Map() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error("API request failed");
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  return (
    <div>
      <h1>Posts List</h1>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>
            {post.id}. {post.title}
          </h3>

          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Map;