import * as React from 'react';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

import './Footer.scss';

//import image
import logo from '../../../assets/images/logo.svg';
import payment from '../../../assets/images/payment/payment.png';

//import icon mui, ant-design
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { DribbbleOutlined } from '@ant-design/icons';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// ==============================|| MAIN LAYOUT ||============================== //

const Footer = () => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: theme.palette.text.secondary
    }));

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="top-footer">
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={4}>
                            <Item>
                                <div className="footer-left">
                                    <div className="footer-logo">
                                        <img src={logo} alt="logo" />
                                    </div>
                                    <div className="footer-title">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                        et dolore magna aliqua
                                    </div>
                                    <div className="footer-social">
                                        <FacebookOutlinedIcon />
                                        <TwitterIcon />
                                        <LinkedInIcon />
                                        <DribbbleOutlined />
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Item>
                                <div className="footer-menu">
                                    <div className="menu-title">CATALOG</div>
                                    <div className="menu-list">
                                        <div className="menu-item">Necklaces</div>
                                        <div className="menu-item">Hoodies</div>
                                        <div className="menu-item">Jewelry Box</div>
                                        <div className="menu-item">T-Shirt</div>
                                        <div className="menu-item">Jacket</div>
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Item>
                                <div className="footer-menu">
                                    <div className="menu-title">ABOUT US</div>
                                    <div className="menu-list">
                                        <div className="menu-item">Our Producers</div>
                                        <div className="menu-item">Sitemap</div>
                                        <div className="menu-item">FAQ</div>
                                        <div className="menu-item">About Us</div>
                                        <div className="menu-item">Terms & Conditions</div>
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Item>
                                <div className="footer-menu">
                                    <div className="menu-title">CUSTOMER SERVICES</div>
                                    <div className="menu-list">
                                        <div className="menu-item">Contact Us</div>
                                        <div className="menu-item">Track Your Order</div>
                                        <div className="menu-item">Product Care & Repair</div>
                                        <div className="menu-item">Book an Appointment</div>
                                        <div className="menu-item">Shipping & Returns</div>
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
                <div className="bottom-footer">
                    <div className="inc">© 2022 Coral , Inc.</div>
                    <div className="payment">
                        <img src={payment} alt="payment" />
                    </div>
                    <div className="scroll">
                        <div className="scroll-title">Scroll to top</div>
                        <ArrowUpwardIcon className="scroll-arrow" onClick={scrollToTop} fontSize="small" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
