import { useState } from "react";
import "./App.css";
import Blogs from "./component/blogs/Blogs";
import Bookmarks from "./component/bookmarks/Bookmarks";
import Header from "./component/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmarks = () => {
    console.log("bookamarks adding soon");
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto gap-6">
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
