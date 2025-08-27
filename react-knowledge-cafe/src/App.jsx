import { useState } from "react";
import "./App.css";
import Blogs from "./component/blogs/Blogs";
import Bookmarks from "./component/bookmarks/Bookmarks";
import Header from "./component/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    // console.log(blog);
  };

  // jeheto time aer defult man 0
  const [readingTime, setReadingTime] = useState(0);
  const handleMarkAsRead = (time) => {
    const newMarkAsRead = readingTime + time;
    setReadingTime(newMarkAsRead);
    console.log(readingTime);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto gap-6">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmark={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
