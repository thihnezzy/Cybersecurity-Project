import axios from 'axios';

const url = 'http://localhost:5001/transfert';

export const validTransfert = (data, token) => axios.post(`${url}/validation`, {data});
export const makeTransfert = (data) => axios.post(`${url}/makeTransfert`, {data});