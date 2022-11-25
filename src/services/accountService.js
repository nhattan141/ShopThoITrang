import axios from 'axios';

const beUrl = 'http://localhost:5000';

const handleGetAllAccount = () => {
    return axios.get(`${beUrl}/accounts/getAccountFilters`);
};

const handleAddAccountApi = (email, password, name, address, phone, role) => {
    return axios.post(`${beUrl}/accounts/addAccount`, { email, password, name, address, phone, role });
};

const handleUpdateAccountApi = (id, name, address, phone) => {
    return axios.put(`${beUrl}/accounts/updateAccount/${id}`, { name, address, phone });
};

const handleUpdatePassApi = (id, password) => {
    return axios.put(`${beUrl}/accounts/updateAccount/${id}`, { password });
};

const handleUpdateRoleAccountApi = (id, role) => {
    return axios.put(`${beUrl}/accounts/updateAccount/${id}`, { role });
};

const handleDeleteAccountApi = (id) => {
    return axios.delete(`${beUrl}/accounts/deleteAccount/${id}`);
};

export {
    handleGetAllAccount,
    handleUpdateAccountApi,
    handleUpdatePassApi,
    handleDeleteAccountApi,
    handleUpdateRoleAccountApi,
    handleAddAccountApi
};
