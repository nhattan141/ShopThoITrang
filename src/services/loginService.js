import axios from 'axios';

const handleLoginApi = (email, password) => {
    //call server nodejs
    return axios.post('https://fakestoreapi.com/auth/login', { username: email, password });
};

export { handleLoginApi };
