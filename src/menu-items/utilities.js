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
            title: 'Danh mục',
            type: 'item',
            url: '/categories',
            icon: icons.ProfileOutlined
        }
    ]
};

export default utilities;
