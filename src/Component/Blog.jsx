import propTypes from "prop-types";

const Blog = ({ blog }) => {
  return (
    <div className="border mb-4 rounded-lg p-6">
      <h2 className="font-bold">{blog.question}</h2>
      <p>
        <span className="font-bold">Ans: </span>
        {blog.answer}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: propTypes.object,
};

export default Blog;
