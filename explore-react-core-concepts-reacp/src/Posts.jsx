import { useEffect, useState } from "react";
import Post from "./post";

//
export default function Posts() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div>
      <hr />
      <h3>Posts :{posts.length}</h3>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}
//1. create a state to store the data
//2. create use effect with no dependencies
//3. user fetch to load data
