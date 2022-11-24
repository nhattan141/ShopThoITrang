import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useToken() {
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    };

    const [tokenApi, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
    };

    const removeToken = () => {
        localStorage.clear();
        // navigate('/');
        location.replace('/free');
    };

    return {
        setToken: saveToken,
        getToken,
        removeToken,
        tokenApi
    };
}
