import { useEffect, useState } from "react";

function ReusableComp() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Public API Data</h1>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ReusableComp;