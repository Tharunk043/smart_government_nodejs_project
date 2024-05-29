// Blog.js
import React, { useState, useEffect } from 'react';
import { getBlogPosts } from './api';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const posts = await getBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        // Handle error
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;

