import axios from 'axios';

// Proxy

export default axios.create({
  baseURL: '/reviews/'
});
