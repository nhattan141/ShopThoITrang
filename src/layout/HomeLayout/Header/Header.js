import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

import logo from '../../../assets/images/logo.svg';
import './Header.scss';
import Navigation from './Navigation';
// ==============================|| MAIN LAYOUT ||============================== //

const Header = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="top-header">
                    <div className="search-box">
                        <SearchIcon />
                    </div>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="util">
                        <div className="account">
                            <PersonOutlineOutlinedIcon />
                            <p>Account</p>
                        </div>
                        <div className="shopping">
                            <LocalMallOutlinedIcon />
                            <p>Shopping</p>
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
