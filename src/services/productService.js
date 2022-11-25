import axios from 'axios';

const beUrl = 'http://localhost:5000';

const handleGetAllProduct = () => {
    return axios.get(`${beUrl}/products/getProductsFilters`);
};

const handleGetSingleProduct = (id) => {
    return axios.get(`${beUrl}/products/getProductById/${id}`);
};

const handleDeleteProductApi = (id) => {
    return axios.delete(`${beUrl}/products/deleteProduct/${id}`);
};

const handleAddProductApi = (Name, Description, Quantity, Price) => {
    return axios.post(`${beUrl}/products/addProduct`, { Name, Description, Quantity, Price });
};

const handleUpdateProductApi = (id, Name, Description, Quantity, Price) => {
    return axios.put(`${beUrl}/products/updateProduct/${id}`, { Name, Description, Quantity, Price });
};

export { handleGetAllProduct, handleGetSingleProduct, handleDeleteProductApi, handleAddProductApi, handleUpdateProductApi };
