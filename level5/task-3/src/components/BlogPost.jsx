import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

function BlogPost({ post }) {
  return (
    <div className="post-summary">
      <Link to={`/post/${post.id}`} className="post-title">
        {post.title}
      </Link>
      <p>{post.shortDescription}</p>
    </div>
  );
}

export default BlogPost;
