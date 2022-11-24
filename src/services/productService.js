import axios from 'axios';

const beUrl = 'http://localhost:5000';

const handleGetAllProduct = () => {
    return axios.get(`${beUrl}/products/getProductsFilters`);
};

const handleGetSingleProduct = (id) => {
    return axios.get(`${beUrl}/products/getProductById/${id}`);
};

export { handleGetAllProduct, handleGetSingleProduct };
