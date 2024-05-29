// api.js
import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBlogPosts = async () => {
  try {
    const response = await api.get('/blog/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

// Add more API functions as needed

