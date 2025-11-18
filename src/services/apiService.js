import axios from 'axios';

// Using DummyJSON for news articles as a placeholder
const API_URL = 'https://dummyjson.com/posts?limit=10';

export const fetchNewsArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    // The API returns posts, we will treat them as news articles
    return response.data.posts;
  } catch (error) {
    // Log the error and re-throw it to be handled by the component
    console.error("Error fetching news articles:", error);
    throw new Error('Failed to fetch news articles.');
  }
};