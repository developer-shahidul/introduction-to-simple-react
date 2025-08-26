const Blog = ({ blog }) => {
  //   console.log(blog);

  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div>
      <img
        className="my-8"
        src={cover}
        alt={`cover picture of the title ${title}`}
      ></img>
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <img className="w-14 rounded-full" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>
              <small>{posted_date}</small>
            </p>
          </div>
        </div>

        <div>
          <span>{reading_time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl"> {title} </h2>
      <p>
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a href="">{hash} </a>
          </span>
        ))}
      </p>
    </div>
  );
};

// proptypes

export default Blog;
