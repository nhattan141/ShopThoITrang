import * as React from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'layout/HomeLayout/Header/Header';

// ==============================|| MAIN LAYOUT ||============================== //

const HomeLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default HomeLayout;
