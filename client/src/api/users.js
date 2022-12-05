import axios from 'axios';

const url = 'http://localhost:5000/users';

export const registerUser = (data) => axios.post(`${url}/register`, {data});
export const fetchUsers = () => axios.get(`${url}`);
export const fetchUsersWithEmail = (email) => axios.get(`${url}/email/${email}`);
export const fetchUsersWithUsername = (username) => axios.get(`${url}/username/${username}`);
export const loginUser = (username,password) => axios.post(`${url}/login`, {username:username, password:password});
export const changeScore = (score,id) => axios.post(`${url}/${id}`, {data: score});