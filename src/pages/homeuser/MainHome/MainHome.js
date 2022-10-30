import * as React from 'react';

import TopMain from '../../../layout/HomeLayout/TopMain/TopMain';
import Brand from '../Brand/Brand';
import HotCategory from '../HotCategory/HotCategory';
import GridProducts from '../GridProducts/GridProducts';
import BrandBanner from '../BrandBanner/BrandBanner';
import SliderProducts from '../SliderProducts/SliderProducts';
import NewsLetter from '../NewsLetter/NewsLetter';

// ==============================|| MAIN LAYOUT ||============================== //

const HomeLayout = () => {
    return (
        <>
            <TopMain />
            <Brand />
            <HotCategory />
            <GridProducts />
            <BrandBanner />
            <SliderProducts />
            <NewsLetter />
        </>
    );
};

export default HomeLayout;
