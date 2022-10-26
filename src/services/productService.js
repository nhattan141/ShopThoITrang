import axios from 'axios';

const handleGetAllProduct = () => {
    return axios.get(`https://fakestoreapi.com/products`);
};

const handleGetSingleProduct = (id) => {
    return axios.get(`https://fakestoreapi.com/products/${id}`);
};

export { handleGetAllProduct, handleGetSingleProduct };
