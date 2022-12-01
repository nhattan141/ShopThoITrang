import * as React from 'react';
import { Link } from 'react-router-dom';

import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';

//import mui icon
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

//import custom hooks
import useAddCart from 'HOC/useAddCart';
import useToken from 'HOC/useToken';

import DialogSearch from './DialogSearch';

import logo from '../../../assets/images/logo.svg';
import './Header.scss';
import Navigation from './Navigation';
// ==============================|| MAIN LAYOUT ||============================== //

const Header = () => {
    const { cart } = useAddCart();
    const { tokenApi } = useToken();
    const [open, setOpen] = React.useState(false);
    const [amount, setAmount] = React.useState(cart.length);

    const interval = () => {
        setInterval(() => {
            const cartString = localStorage.getItem('shopping-cart');
            if (cartString != null) {
                const userCart = JSON.parse(cartString);
                setAmount(userCart.length);
            }
        }, 1000);
    };

    React.useEffect(() => {
        interval();
    }, []);

    React.useEffect(() => {
        return () => {
            clearInterval(interval());
        };
    }, []);

    const toggleDialog = () => {
        setOpen(!open);
    };

    if (tokenApi) {
        var { token, user } = tokenApi;
    }

    return (
        <div className="container">
            <div className="content">
                <div className="top-header">
                    <div className="search-box">
                        <SearchIcon onClick={toggleDialog} />
                    </div>
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="util">
                        <div className="account">
                            {!token ? <PersonOutlineOutlinedIcon /> : <Avatar alt="Remy Sharp" src={user.avatar} />}
                            <Link to={!token ? '/login' : '/profile'}>
                                <p>{!token ? 'Tài khoản' : user.name}</p>
                            </Link>
                        </div>
                        <div className="shopping">
                            <Badge badgeContent={amount} max={20} color="primary">
                                <LocalMallOutlinedIcon />
                            </Badge>
                            <Link to="/cart">
                                <p>Giỏ hàng</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bot-header">
                    <Navigation />
                </div>
            </div>
            <DialogSearch open={open} toggleDialog={toggleDialog} />
        </div>
    );
};

export default Header;
