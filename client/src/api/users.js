import axios from 'axios';

const url = 'http://172.30.150.102/api/users';

export const registerUser = (data) => axios.post(`${url}/register`, {data});
export const fetchUsers = () => axios.get(`${url}`);
export const fetchUsersWithEmail = (email) => axios.get(`${url}/email/${email}`);
export const fetchUsersWithUsername = (username) => axios.get(`${url}/username/${username}`);
// export const loginUser = (username,password) => axios.post(`${url}/login`, {username:username, password:password});
export const changeScore = (score,id) => axios.put(`${url}/${id}`, {data: score});
export const getScore = (id) => axios.get(`${url}/score/${id}`);