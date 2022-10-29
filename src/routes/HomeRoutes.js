import { lazy } from 'react';

import Loadable from '../components/Loadable';
import HomeLayout from 'layout/HomeLayout/index';

const MainHome = Loadable(lazy(() => import('pages/homeuser/MainHome/MainHome')));

// ==============================|| HOME USER ROUTING ||============================== //

const HomeRoutes = {
    path: '/',
    element: <HomeLayout />,
    children: [
        {
            path: 'home',
            element: <MainHome />
        },
        {
            path: 'jew',
            element: <HomeLayout />
        }
    ]
};

export default HomeRoutes;
