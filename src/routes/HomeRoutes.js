import { lazy } from 'react';

import Loadable from '../components/Loadable';
import HomeLayout from 'layout/HomeLayout/index';

const MainHome = Loadable(lazy(() => import('pages/homeuser/MainHome/MainHome')));
const ListProduct = Loadable(lazy(() => import('pages/homeuser/ListProduct/ListProduct')));

// ==============================|| HOME USER ROUTING ||============================== //

const HomeRoutes = {
    path: '/',
    element: <HomeLayout />,
    children: [
        {
            path: 'jew',
            element: <ListProduct category={'jew'} />
        },
        {
            path: '/',
            element: <MainHome />
        }
    ]
};

export default HomeRoutes;
