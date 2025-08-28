import { useEffect, useState } from "react";
import "./App.css";
import Blogs from "./component/blogs/Blogs";
import Bookmarks from "./component/bookmarks/Bookmarks";
import Header from "./component/header/Header";
import { getItemFromLS, setItemLS } from "./component/js/lucalStorage";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  // bookmarks add
  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    setItemLS("bookmarks", newBookmarks);
  };

  // mark as read
  const handleMarkAsRead = (time, id) => {
    const newMarkAsRead = readingTime + time;
    setReadingTime(newMarkAsRead);
    setItemLS("readingTime", newMarkAsRead);

    const remainingBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookmarks);
    setItemLS("bookmarks", remainingBookmarks);
  };

  // load from localStorage
  useEffect(() => {
    const savedBookmarks = getItemFromLS("bookmarks", []);
    if (savedBookmarks.length > 0) {
      setBookmarks(savedBookmarks);
    }

    const savedTime = getItemFromLS("readingTime", 0);
    setReadingTime(savedTime);
  }, []);
  // remove the load block form bookmark

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
