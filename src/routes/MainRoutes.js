import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));
const Products = Loadable(lazy(() => import('pages/components-overview/Products')));
const Orders = Loadable(lazy(() => import('pages/components-overview/Orders')));
const Categories = Loadable(lazy(() => import('pages/components-overview/Categories')));
// const ManagementAdmin = Loadable(lazy(() => import('pages/components-overview/ManagementAdmin')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        },
        {
            path: 'products',
            element: <Products />
        },
        {
            path: 'orders',
            element: <Orders />
        },
        {
            path: 'categories',
            element: <Categories />
        }
        // {
        //     path: 'ManagementAdmin',
        //     element: <ManagementAdmin />
        // }
    ]
};

export default MainRoutes;
