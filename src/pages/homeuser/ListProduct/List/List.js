import * as React from 'react';

import './List.scss';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

// icon mui
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

// image
import p1 from '../../../../assets/images/card/p1.png';
import p2 from '../../../../assets/images/card/p2.png';
import p3 from '../../../../assets/images/card/p3.png';
import p5 from '../../../../assets/images/card/p5.png';
import p6 from '../../../../assets/images/card/p6.png';
import p7 from '../../../../assets/images/card/p7.png';

const List = () => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: theme.palette.text.secondary
    }));

    return (
        <div className="list-container">
            <div className="list-content">
                <div className="products">
                    <div className="tabcontent tab-active" id="all">
                        <div className="list-products">
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Item>
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
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Item>
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
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Item>
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
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Item>
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
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Item>
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
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4}>
                                        <Item>
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
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                        <div className="list-pagination">
                            <Pagination count={10} className="pagi-btn" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
