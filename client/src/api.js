import axios from 'axios';

const API = axios.create({
  baseURL: 'https://msn-news-clone.vercel.app/', // ✅ LIVE backend
});

// Attach token to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
