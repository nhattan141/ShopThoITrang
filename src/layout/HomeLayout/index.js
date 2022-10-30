import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'layout/HomeLayout/Header/Header';
import Footer from './Footer/Footer';

// ==============================|| MAIN LAYOUT ||============================== //

const HomeLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default HomeLayout;
