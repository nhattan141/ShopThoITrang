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
                                        Coral shop, chuyên cung cấp các sản phẩm trang sức chính hãng từ nhiều thương hiệu khác nhau. Đảm
                                        bảo uy tín cho khách hàng.
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
                                    <div className="menu-title">Danh Mục</div>
                                    <div className="menu-list">
                                        <div className="menu-item">Dây Chuyền</div>
                                        <div className="menu-item">Áo Hoodies</div>
                                        <div className="menu-item">Trang Sức</div>
                                        <div className="menu-item">Áo T-Shirt</div>
                                        <div className="menu-item">Áo Khoác</div>
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Item>
                                <div className="footer-menu">
                                    <div className="menu-title">Giới Thiệu</div>
                                    <div className="menu-list">
                                        <div className="menu-item">Sản Phẩm Của Chúng Tôi</div>
                                        <div className="menu-item">Địa Chỉ</div>
                                        <div className="menu-item">FAQ</div>
                                        <div className="menu-item">Về Chúng Tôi</div>
                                        <div className="menu-item">Chính Sách</div>
                                    </div>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Item>
                                <div className="footer-menu">
                                    <div className="menu-title">Chăm Sóc Khách Hàng</div>
                                    <div className="menu-list">
                                        <div className="menu-item">Liên Hệ Chúng Tôi</div>
                                        <div className="menu-item">Theo Dõi Đơn Hàng Của Bạn</div>
                                        <div className="menu-item">Vấn Đề Sản Phẩm</div>
                                        <div className="menu-item">Đặt Lịch</div>
                                        <div className="menu-item">Vận Chuyển</div>
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
                        <div className="scroll-title">Lên đầu trang</div>
                        <ArrowUpwardIcon className="scroll-arrow" onClick={scrollToTop} fontSize="small" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
