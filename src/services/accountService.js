import axios from 'axios';

const beUrl = 'http://localhost:5000';

const handleGetAllAccount = () => {
    return axios.get(`https://fakestoreapi.com/users`);
};

const handleUpdateAccountApi = (id, name, address, phone) => {
    return axios.put(`${beUrl}/accounts/updateAccount/${id}`, { name, address, phone });
};

const handleUpdatePassApi = (id, password) => {
    return axios.put(`${beUrl}/accounts/updateAccount/${id}`, { password });
};

export { handleGetAllAccount, handleUpdateAccountApi, handleUpdatePassApi };
