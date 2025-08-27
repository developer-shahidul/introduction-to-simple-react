//
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  //   console.log(blog);

  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
    id,
  } = blog;
  return (
    <div className="border-b-2">
      <img
        className="my-8 md:h-[450px] w-full object-cover rounded-lg "
        src={cover}
        alt={`cover picture of the title ${title}`}
      ></img>
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl font-bold text-[#111111]">{author}</h3>
            <p className="text-base font-semibold text-[#11111160]">
              <small>{posted_date}</small>
            </p>
          </div>
        </div>

        <div className="flex gap-2 text-xl font-medium text-[#11111160]">
          <span>{reading_time} min read</span>
          <button
            className="text-2xl"
            onClick={() => handleAddToBookmarks(blog)}
          >
            <FaRegBookmark></FaRegBookmark>
          </button>
        </div>
      </div>

      <h2 className="text-[40px] font-bold text-[#111111] my-4"> {title} </h2>
      <p className="mb-5 text-xl font-medium text-[#11111160]">
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href="">{hash} </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(parseInt(reading_time), id)}
        className="hover:underline mb-9 text-purple-600"
      >
        mark as read
      </button>
    </div>
  );
};

// proptypes

export default Blog;
