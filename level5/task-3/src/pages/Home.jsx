import React from 'react';
import posts from '../data/posts';
import BlogPost from '../components/BlogPost';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <h1>Simple Blog</h1>
      <div className="post-list">
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
