import * as React from 'react';
import { Link } from 'react-router-dom';

import './CartInfor.scss';

import { Grid, Paper, Stack, styled } from '@mui/material';

import p1 from '../../../../assets/images/card/p1.png';

const CartInfor = (props) => {
    const Item = styled(Paper)(({ theme }) => ({
        // padding: theme.spacing(1),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: '#000000'
    }));

    const [quantity, setQuantity] = React.useState(1);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1);
    };

    return (
        <div className="cart-infor-container">
            <div className="cart-infor-content">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Item>
                            <div className="list-cart-container">
                                <div className="items-cart">
                                    <Stack spacing={2}>
                                        <Item>
                                            <div className="item-cart">
                                                <div className="image-item">
                                                    <img src={p1} alt="item-img" />
                                                </div>
                                                <div className="infor-item">
                                                    <div className="infor-title">quinoa dreams</div>
                                                    <div className="infor-size">
                                                        <div className="size-title">size:</div>
                                                        <div className="size-name">M</div>
                                                    </div>
                                                    <div className="infor-quantity">
                                                        <div className="quantity-title">quantity:</div>
                                                        <div className="quantity-action">
                                                            <button onClick={handleDecreaseQuantity}>-</button>
                                                            <div className="quantity">{quantity}</div>
                                                            <button onClick={handleIncreaseQuantity}>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price-item">$109.09</div>
                                            </div>
                                        </Item>
                                        <Item>
                                            <div className="item-cart">
                                                <div className="image-item">
                                                    <img src={p1} alt="item-img" />
                                                </div>
                                                <div className="infor-item">
                                                    <div className="infor-title">quinoa dreams</div>
                                                    <div className="infor-size">
                                                        <div className="size-title">size:</div>
                                                        <div className="size-name">M</div>
                                                    </div>
                                                    <div className="infor-quantity">
                                                        <div className="quantity-title">quantity:</div>
                                                        <div className="quantity-action">
                                                            <button onClick={handleDecreaseQuantity}>-</button>
                                                            <div className="quantity">{quantity}</div>
                                                            <button onClick={handleIncreaseQuantity}>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price-item">$109.09</div>
                                            </div>
                                        </Item>
                                        <Item>
                                            <div className="item-cart">
                                                <div className="image-item">
                                                    <img src={p1} alt="item-img" />
                                                </div>
                                                <div className="infor-item">
                                                    <div className="infor-title">quinoa dreams</div>
                                                    <div className="infor-size">
                                                        <div className="size-title">size:</div>
                                                        <div className="size-name">M</div>
                                                    </div>
                                                    <div className="infor-quantity">
                                                        <div className="quantity-title">quantity:</div>
                                                        <div className="quantity-action">
                                                            <button onClick={handleDecreaseQuantity}>-</button>
                                                            <div className="quantity">{quantity}</div>
                                                            <button onClick={handleIncreaseQuantity}>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price-item">$109.09</div>
                                            </div>
                                        </Item>
                                    </Stack>
                                </div>
                                <div className="cart-empty">
                                    Carts feel empty?
                                    <Link to="/jew" className="empty-link">
                                        Shop more
                                    </Link>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Item>
                            <div className="payment-container">
                                <div className="payment-detail">
                                    <Stack spacing={2} alignItems="stretch">
                                        <Item>
                                            <div className="payment-item">
                                                <div className="title">Total Amount:</div>
                                                <div className="price">$274.79</div>
                                            </div>
                                        </Item>
                                        <Item>
                                            <div className="payment-item">
                                                <div className="title">Shipping Fee:</div>
                                                <div className="price">NIL</div>
                                            </div>
                                        </Item>
                                        <Item>
                                            <div className="payment-item">
                                                <div className="title">Taxes:</div>
                                                <div className="price">$8.2</div>
                                            </div>
                                        </Item>
                                    </Stack>
                                </div>
                                <div className="payment-total">
                                    <div className="total-title">TOTAL</div>
                                    <div className="total-price">$283.17</div>
                                </div>
                                <div className="payment-button">
                                    <button>Pay $283.17</button>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default CartInfor;
