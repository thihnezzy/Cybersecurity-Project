import axios from 'axios';

const url = 'http://172.30.150.102/api/transfert';

export const validTransfert = (data, token) => axios.post(`${url}/validation`, {data});
export const makeTransfert = (data) => axios.post(`${url}/makeTransfert`, {data});