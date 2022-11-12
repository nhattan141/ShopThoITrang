import { lazy } from 'react';

import Loadable from '../components/Loadable';
import HomeLayout from 'layout/HomeLayout/index';

const MainHome = Loadable(lazy(() => import('pages/homeuser/MainHome/MainHome')));
const ListProduct = Loadable(lazy(() => import('pages/homeuser/ListProduct/ListProduct')));
const Product = Loadable(lazy(() => import('pages/homeuser/Product/Product')));
const Cart = Loadable(lazy(() => import('pages/homeuser/Cart/Cart')));
const Profile = Loadable(lazy(() => import('pages/homeuser/Profile/Profile')));

// ==============================|| HOME USER ROUTING ||============================== //

const HomeRoutes = {
    path: '/',
    element: <HomeLayout />,
    children: [
        {
            path: '/',
            element: <MainHome />
        },
        {
            path: 'jew',
            element: <ListProduct category="jew" />
        },
        {
            path: 'clothing',
            element: <ListProduct category="clothing" />
        },
        {
            path: 'living',
            element: <ListProduct category="living" />
        },
        {
            path: 'wedding',
            element: <ListProduct category="wedding" />
        },
        {
            path: 'toys',
            element: <ListProduct category="toys" />
        },
        {
            path: 'art',
            element: <ListProduct category="art" />
        },
        {
            path: 'craft',
            element: <ListProduct category="craft" />
        },
        {
            path: 'product/:id',
            element: <Product />
        },
        {
            path: 'cart',
            element: <Cart />
        },
        {
            path: 'profile',
            element: <Profile />
        }
    ]
};

export default HomeRoutes;
