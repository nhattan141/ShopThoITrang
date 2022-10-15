import axios from 'axios';

const handleGetAllProduct = () => {
    return axios.get(`https://fakestoreapi.com/products`);
};

export { handleGetAllProduct };
