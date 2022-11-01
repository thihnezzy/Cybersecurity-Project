import axios from 'axios';

const url = 'http://localhost:5000/items';

export const fetchPosts = () => axios.get(url);
export const createProduct = (data) => axios.post(url, {data})