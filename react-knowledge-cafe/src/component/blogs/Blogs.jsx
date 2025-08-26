//
import Blog from "./Blog";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  // useEffect a jeheto amora akbar oi data load korbo tai akta emty arry dilam, []
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div
      className="
    md:w-2/3 border"
    >
      <h1 className="text-4xl ">Blogs : {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
