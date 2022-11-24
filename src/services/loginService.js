import axios from 'axios';

const beUrl = 'http://localhost:5000';

const handleLoginApi = (email, password) => {
    return axios.post(`${beUrl}/accounts/login`, { email, password });
};

const handleSignupApi = (emailSignup, passwordSignup, confirm) => {
    return axios.post(`${beUrl}/accounts/register`, { emailSignup, passwordSignup, confirm });
};

export { handleLoginApi, handleSignupApi };
