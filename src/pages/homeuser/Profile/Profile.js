import * as React from 'react';
import { Grid, Paper, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import './Profile.scss';

//import other components
import Inforuser from './Infor/Inforuser';
import ChangePass from './Change/ChangePass';
import Order from './Order/Order';

//import mui icon
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

const Profile = () => {
    const Item = styled(Paper)(({ theme }) => ({
        // padding: theme.spacing(1),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: '#000000'
    }));

    const navigate = useNavigate();

    const openTab = (event, tab) => {
        let tabcontents = document.getElementsByClassName('tabcontent');
        for (let i = 0; i < tabcontents.length; i++) {
            tabcontents[i].style.display = 'none';
        }

        let tablinks = document.getElementsByClassName('list-nav');
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(' active', '');
        }

        if (tab === 'logout') {
            localStorage.clear();
            navigate('/');
        } else {
            document.getElementById(tab).style.display = 'block';
        }
        event.currentTarget.className += ' active';
    };

    const handleToggle = () => {
        let navigation = document.querySelector('.navigation-user');
        navigation.classList.toggle('active');
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div className="profile-container">
            <div className="profile-content">
                <Grid container spacing={6}>
                    <Grid item sx={{ transition: '0.5s', with: '100%' }}>
                        <Item>
                            <div className="avatar-user">
                                <div className="navigation-user">
                                    <button className="toggle" onClick={handleToggle}></button>
                                    <ul>
                                        <button
                                            className="list-nav active"
                                            style={{ ['--clr']: '#f44336' }}
                                            onClick={(event) => openTab(event, 'infor')}
                                        >
                                            <div className="list-content">
                                                <span className="icon-nav">
                                                    <AccountCircleOutlinedIcon fontSize="large" />
                                                </span>
                                                <span className="icon-text">Information</span>
                                            </div>
                                        </button>
                                        <button
                                            className="list-nav"
                                            style={{ ['--clr']: '#0fc70f' }}
                                            onClick={(event) => openTab(event, 'change')}
                                        >
                                            <div className="list-content">
                                                <span className="icon-nav">
                                                    <ChangeCircleOutlinedIcon fontSize="large" />
                                                </span>
                                                <span className="icon-text">Change Password</span>
                                            </div>
                                        </button>
                                        <button
                                            className="list-nav"
                                            style={{ ['--clr']: '#2196f3' }}
                                            onClick={(event) => openTab(event, 'order')}
                                        >
                                            <div className="list-content">
                                                <span className="icon-nav">
                                                    <ShoppingCartOutlinedIcon fontSize="large" />
                                                </span>
                                                <span className="icon-text">Order</span>
                                            </div>
                                        </button>
                                        <button
                                            className="list-nav"
                                            style={{ ['--clr']: '#b145e9' }}
                                            onClick={(event) => openTab(event, 'logout')}
                                        >
                                            <div className="list-content">
                                                <span className="icon-nav">
                                                    <LogoutIcon fontSize="large" />
                                                </span>
                                                <span className="icon-text">Logout</span>
                                            </div>
                                        </button>
                                    </ul>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs sx={{ transition: '0.5s' }}>
                        <div className="contents-infor">
                            <div className="tabcontent tab-active" id="infor">
                                <Inforuser />
                            </div>
                            <div className="tabcontent " id="change">
                                <ChangePass />
                            </div>
                            <div className="tabcontent " id="order">
                                <Order />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Profile;
