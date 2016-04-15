import React from 'react';
import BlogLink from './Blog-link/Blog-link';
//require('./Blog-image.css');

const BlogImage = (blogInfo) => {
  return (
    <div>
          <img className="blog-intro-img" src={blogInfo.image} alt=""/>

            <BlogLink blogInfo={blogInfo} />
      </div>
  );
};

BlogImage.propTypes = {
      blogInfo: React.PropTypes.object.isRequired
  };



  export default BlogImage
