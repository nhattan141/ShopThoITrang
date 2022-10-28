import { lazy } from 'react';

import Loadable from '../components/Loadable';
import HomeLayout from 'layout/HomeLayout/index';

const TopMain = Loadable(lazy(() => import('layout/HomeLayout/TopMain/TopMain')));

// ==============================|| HOME USER ROUTING ||============================== //

const HomeRoutes = {
    path: '/home',
    element: <HomeLayout />,
    children: [
        {
            path: '/home/',
            element: <TopMain />
        },
        {
            path: '/home/jew',
            element: <TopMain />
        }
    ]
};

export default HomeRoutes;
