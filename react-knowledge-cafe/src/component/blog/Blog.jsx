//
import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  console.log(blog);
  return <div></div>;
};

// proptypes
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
