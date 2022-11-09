import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'layout/HomeLayout/Header/Header';
import Footer from './Footer/Footer';

import { useNavigate } from 'react-router-dom';

import useToken from 'HOC/useToken';

// ==============================|| MAIN LAYOUT ||============================== //

const HomeLayout = () => {
    const { token, setToken } = useToken();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    });

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default HomeLayout;
