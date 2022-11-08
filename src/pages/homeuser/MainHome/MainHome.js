import * as React from 'react';

import TopMain from '../../../layout/HomeLayout/TopMain/TopMain';
import Brand from './Brand/Brand';
import HotCategory from './HotCategory/HotCategory';
import GridProducts from './GridProducts/GridProducts';
import BrandBanner from './BrandBanner/BrandBanner';
import SliderProducts from './SliderProducts/SliderProducts';
import NewsLetter from './NewsLetter/NewsLetter';
import Login from 'pages/LoginReg/Login/Login';

import useToken from 'HOC/useToken';

// ==============================|| MAIN LAYOUT ||============================== //

const HomeLayout = () => {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return (
        <>
            <TopMain />
            <Brand />
            <HotCategory />
            <GridProducts />
            <BrandBanner />
            <SliderProducts title="Best Sellers" class="slider-top" />
            <NewsLetter />
        </>
    );
};

export default HomeLayout;
