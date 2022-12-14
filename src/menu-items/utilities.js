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
    ProfileOutlined,
    UserOutlined
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
    ProfileOutlined,
    UserOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Quản lý',
    type: 'group',
    children: [
        {
            id: 'util-products',
            title: 'Sản phẩm',
            type: 'item',
            url: '/products',
            icon: icons.SkinOutlined
        },
        {
            id: 'util-orders',
            title: 'Đơn hàng',
            type: 'item',
            url: '/orders',
            icon: icons.ShoppingOutlined
        },
        {
            id: 'util-categories',
            title: 'Tài khoản',
            type: 'item',
            url: '/account',
            icon: icons.UserOutlined
        }
    ]
};

export default utilities;
