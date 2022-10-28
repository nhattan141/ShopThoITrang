// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined,
    SkinOutlined,
    ShoppingOutlined,
    ProfileOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    SkinOutlined,
    ShoppingOutlined,
    ProfileOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
        {
            id: 'util-products',
            title: 'Products',
            type: 'item',
            url: '/products',
            icon: icons.SkinOutlined
        },
        {
            id: 'util-orders',
            title: 'Orders',
            type: 'item',
            url: '/orders',
            icon: icons.ShoppingOutlined
        },
        {
            id: 'util-categories',
            title: 'Categories',
            type: 'item',
            url: '/categories',
            icon: icons.ProfileOutlined
        },
        {
            id: 'util-color',
            title: 'Color',
            type: 'item',
            url: '/color',
            icon: icons.BgColorsOutlined
        },
        {
            id: 'util-shadow',
            title: 'Shadow',
            type: 'item',
            url: '/shadow',
            icon: icons.BarcodeOutlined
        },
        {
            id: 'ant-icons',
            title: 'Ant Icons',
            type: 'item',
            url: '/icons/ant',
            icon: icons.AntDesignOutlined,
            breadcrumbs: false
        },
        {
            id: 'util-ManagementAdmin',
            title: 'ManagementAdmin',
            type: 'item',
            url: '/ManagementAdmin',
            icon: icons.UserOutlined
        }
    ]
};

export default utilities;
