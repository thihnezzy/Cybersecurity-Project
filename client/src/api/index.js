import axios from 'axios';

const url = 'http://localhost:5000/items';

export const fetchPosts = () => axios.get(url);