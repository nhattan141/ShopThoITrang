import * as React from 'react';

import './GridProducts.scss';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// icon mui
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

// image
import p1 from '../../../assets/images/card/p1.png';
import p2 from '../../../assets/images/card/p2.png';
import p3 from '../../../assets/images/card/p3.png';
import p4 from '../../../assets/images/card/p4.png';
import p5 from '../../../assets/images/card/p5.png';
import p6 from '../../../assets/images/card/p6.png';
import p7 from '../../../assets/images/card/p7.png';
import p8 from '../../../assets/images/card/p8.png';

const GridProducts = () => {
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
                <div className="grid-products-title">New Products</div>
                <div className="grid-products-top">
                    <div className="tabs">
                        <button className="tablinks active" onClick={(event) => openTab(event, 'all')}>
                            All Products
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
                        <p>Filter</p>
                    </div>
                </div>
                <div className="products">
                    <div className="tabcontent tab-active" id="all">
                        <div className="list-products">
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <div className="card-product">
                                            <div className="img-product">
                                                <img src={p1} alt="card" />
                                                <div className="access-product">
                                                    <div className="action-product">
                                                        <div className="action-product-left">
                                                            <FavoriteBorderOutlinedIcon />
                                                            <SearchOutlinedIcon />
                                                        </div>
                                                        <div className="action-product-right">
                                                            <ShoppingBagOutlinedIcon />
                                                            Shop Now
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title-product">Adicolor Classics Joggers</div>
                                            <div className="bottom-product">
                                                <div className="left-bot">Dress</div>
                                                <div className="right-bot">$63.85</div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <div className="card-product">
                                            <div className="img-product">
                                                <img src={p5} alt="card" />
                                                <div className="ribbon">HOT</div>
                                                <div className="access-product">
                                                    <div className="action-product">
                                                        <div className="action-product-left">
                                                            <FavoriteBorderOutlinedIcon />
                                                            <SearchOutlinedIcon />
                                                        </div>
                                                        <div className="action-product-right">
                                                            <ShoppingBagOutlinedIcon />
                                                            Shop Now
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title-product">Basic Dress Green</div>
                                            <div className="bottom-product">
                                                <div className="left-bot">Dress</div>
                                                <div className="right-bot">$236.00</div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <div className="card-product">
                                            <div className="img-product">
                                                <img src={p2} alt="card" />
                                                <div className="access-product">
                                                    <div className="action-product">
                                                        <div className="action-product-left">
                                                            <FavoriteBorderOutlinedIcon />
                                                            <SearchOutlinedIcon />
                                                        </div>
                                                        <div className="action-product-right">
                                                            <ShoppingBagOutlinedIcon />
                                                            Shop Now
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title-product">Nike Sportswear Futura Luxe</div>
                                            <div className="bottom-product">
                                                <div className="left-bot">Bag</div>
                                                <div className="right-bot">$130.00</div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <div className="card-product">
                                            <div className="img-product">
                                                <img src={p6} alt="card" />
                                                <div className="ribbon sale">SALE</div>
                                                <div className="access-product">
                                                    <div className="action-product">
                                                        <div className="action-product-left">
                                                            <FavoriteBorderOutlinedIcon />
                                                            <SearchOutlinedIcon />
                                                        </div>
                                                        <div className="action-product-right">
                                                            <ShoppingBagOutlinedIcon />
                                                            Shop Now
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title-product">Nike Air Zoom Pegasus</div>
                                            <div className="bottom-product">
                                                <div className="left-bot">Shoe</div>
                                                <div className="right-bot">$198.00</div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <div className="card-product">
                                            <div className="img-product">
                                                <img src={p3} alt="card" />
                                                <div className="access-product">
                                                    <div className="action-product">
                                                        <div className="action-product-left">
                                                            <FavoriteBorderOutlinedIcon />
                                                            <SearchOutlinedIcon />
                                                        </div>
                                                        <div className="action-product-right">
                                                            <ShoppingBagOutlinedIcon />
                                                            Shop Now
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title-product">Geometric print Scarf</div>
                                            <div className="bottom-product">
                                                <div className="left-bot">Scarf</div>
                                                <div className="right-bot">$198.00</div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <div className="card-product">
                                            <div className="img-product">
                                                <img src={p7} alt="card" />
                                                <div className="access-product">
                                                    <div className="action-product">
                                                        <div className="action-product-left">
                                                            <FavoriteBorderOutlinedIcon />
                                                            <SearchOutlinedIcon />
                                                        </div>
                                                        <div className="action-product-right">
                                                            <ShoppingBagOutlinedIcon />
                                                            Shop Now
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title-product">Nike Repel Miler</div>
                                            <div className="bottom-product">
                                                <div className="left-bot">Dress</div>
                                                <div className="right-bot">$120.50</div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <div className="card-product">
                                            <div className="img-product">
                                                <img src={p4} alt="card" />
                                                <div className="ribbon sale">SALE</div>
                                                <div className="access-product">
                                                    <div className="action-product">
                                                        <div className="action-product-left">
                                                            <FavoriteBorderOutlinedIcon />
                                                            <SearchOutlinedIcon />
                                                        </div>
                                                        <div className="action-product-right">
                                                            <ShoppingBagOutlinedIcon />
                                                            Shop Now
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title-product">Yellow Reserved Hoodie</div>
                                            <div className="bottom-product">
                                                <div className="left-bot">Dress</div>
                                                <div className="right-bot">$155.00</div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <div className="card-product">
                                            <div className="img-product">
                                                <img src={p8} alt="card" />
                                                <div className="access-product">
                                                    <div className="action-product">
                                                        <div className="action-product-left">
                                                            <FavoriteBorderOutlinedIcon />
                                                            <SearchOutlinedIcon />
                                                        </div>
                                                        <div className="action-product-right">
                                                            <ShoppingBagOutlinedIcon />
                                                            Shop Now
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="title-product">Polarised Sunglasses</div>
                                            <div className="bottom-product">
                                                <div className="left-bot">Glasses</div>
                                                <div className="right-bot">$160.00</div>
                                            </div>
                                        </div>
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
