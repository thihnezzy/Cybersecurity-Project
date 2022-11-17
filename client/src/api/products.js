import axios from 'axios';

const url = 'http://localhost:5000/products';

export const fetchProducts = () => axios.get(url);
export const createProduct = (data) => axios.post(url, {data})

// export const searchProduct = (termSearch) => axios.post(url, {termSearch});