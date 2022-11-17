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

//import image
import avatar from 'assets/images/users/avatar-1.png';

import logo from '../../../assets/images/logo.svg';
import './Header.scss';
import Navigation from './Navigation';
// ==============================|| MAIN LAYOUT ||============================== //

const Header = () => {
    const { cart } = useAddCart();
    const { token } = useToken();
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

    return (
        <div className="container">
            <div className="content">
                <div className="top-header">
                    <div className="search-box">
                        <SearchIcon />
                    </div>
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="util">
                        <div className="account">
                            {!token ? <PersonOutlineOutlinedIcon /> : <Avatar alt="Remy Sharp" src={avatar} />}
                            <Link to={!token ? '/login' : '/profile'}>
                                <p>{!token ? 'Account' : 'Remy Sharp'}</p>
                            </Link>
                        </div>
                        <div className="shopping">
                            <Badge badgeContent={amount} max={20} color="primary">
                                <LocalMallOutlinedIcon />
                            </Badge>
                            <Link to="/cart">
                                <p>Shopping</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bot-header">
                    <Navigation />
                </div>
            </div>
        </div>
    );
};

export default Header;
