import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/posts';
import './PostDetail.css';

function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <div 
        className="post-content" 
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </div>
  );
}

export default PostDetail;
