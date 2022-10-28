import axios from 'axios';

const handleGetAllAccount = () => {
    return axios.get(`https://fakestoreapi.com/users`);
};

export { handleGetAllAccount };
