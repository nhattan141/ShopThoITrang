import * as React from 'react';

import './GridProducts.scss';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

// icon mui
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

// image
import p1 from '../../../../assets/images/card/p1.png';
import p2 from '../../../../assets/images/card/p2.png';
import p3 from '../../../../assets/images/card/p3.png';
import p4 from '../../../../assets/images/card/p4.png';
import p5 from '../../../../assets/images/card/p5.png';
import p6 from '../../../../assets/images/card/p6.png';
import p7 from '../../../../assets/images/card/p7.png';
import p8 from '../../../../assets/images/card/p8.png';

import CardProduct from 'layout/HomeLayout/CardProduct/CardProduct';

const GridProducts = () => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: theme.palette.text.secondary
    }));

    const openTab = (event, tab) => {
        let tabcontents = document.getElementsByClassName('tabcontent');
        for (let i = 0; i < tabcontents.length; i++) {
            tabcontents[i].style.display = 'none';
        }

        let tablinks = document.getElementsByClassName('tablinks');
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(' active', '');
        }

        document.getElementById(tab).style.display = 'block';
        event.currentTarget.className += ' active';
    };

    return (
        <div className="grid-products-container">
            <div className="grid-products-content">
                <div className="grid-products-title">Sản phẩm mới</div>
                <div className="grid-products-top">
                    <div className="tabs">
                        <button className="tablinks active" onClick={(event) => openTab(event, 'all')}>
                            Tất cả
                        </button>
                        <button className="tablinks" onClick={(event) => openTab(event, 'tshirt')}>
                            T-Shirt
                        </button>
                        <button className="tablinks" onClick={(event) => openTab(event, 'hoodies')}>
                            Hoodies
                        </button>
                        <button className="tablinks" onClick={(event) => openTab(event, 'jacket')}>
                            Jacket
                        </button>
                    </div>
                    <div className="filter">
                        <FilterAltOutlinedIcon />
                        <p>Lọc</p>
                    </div>
                </div>
                <div className="products">
                    <div className="tabcontent tab-active" id="all">
                        <div className="list-products">
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Item>
                                            <CardProduct
                                                id={1}
                                                title={'Adicolor Classics Joggers'}
                                                category={'Dress'}
                                                price={'$63.85'}
                                                image={p1}
                                            />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Item>
                                            <CardProduct
                                                id={2}
                                                title={'Basic Dress Green'}
                                                category={'Dress'}
                                                price={'$236.00'}
                                                image={p5}
                                            />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Item>
                                            <CardProduct
                                                id={3}
                                                title={'Nike Sportswear Futura Luxe'}
                                                category={'Bag'}
                                                price={'$130.00'}
                                                image={p2}
                                            />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Item>
                                            <CardProduct
                                                id={3}
                                                title={'Nike Air Zoom Pegasus'}
                                                category={'Shoe'}
                                                price={'$198.00'}
                                                image={p6}
                                            />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Item>
                                            <CardProduct
                                                id={3}
                                                title={'Geometric print Scarf'}
                                                category={'Scarf'}
                                                price={'$198.00'}
                                                image={p3}
                                            />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Item>
                                            <CardProduct
                                                id={3}
                                                title={'Nike Repel Miler'}
                                                category={'Dress'}
                                                price={'$120.50'}
                                                image={p7}
                                            />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Item>
                                            <CardProduct
                                                id={3}
                                                title={'Yellow Reserved Hoodie'}
                                                category={'Dress'}
                                                price={'$155.00'}
                                                image={p4}
                                            />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Item>
                                            <CardProduct
                                                id={3}
                                                title={'Polarised Sunglasses'}
                                                category={'Glasses'}
                                                price={'$160.00'}
                                                image={p8}
                                            />
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    </div>
                    <div className="tabcontent" id="tshirt">
                        T-Shirt
                    </div>
                    <div className="tabcontent" id="hoodies">
                        Hoodies
                    </div>
                    <div className="tabcontent" id="jacket">
                        Jacket
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridProducts;
