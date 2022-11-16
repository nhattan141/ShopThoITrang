import * as React from 'react';
import { Link } from 'react-router-dom';

import './CartInfor.scss';

import useAddCart from 'HOC/useAddCart';

import { Grid, Paper, Stack, styled } from '@mui/material';

const CartInfor = (props) => {
    const Item = styled(Paper)(({ theme }) => ({
        // padding: theme.spacing(1),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: '#000000'
    }));

    const { cart, total, addQuantity, minusQuantity } = useAddCart();

    return (
        <div className="cart-infor-container">
            <div className="cart-infor-content">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Item>
                            <div className="list-cart-container">
                                <div className="items-cart">
                                    <Stack spacing={2}>
                                        {cart &&
                                            cart.map((item, index) => {
                                                return (
                                                    <Item key={index}>
                                                        <div className="item-cart">
                                                            <div className="image-item">
                                                                <img src={item.productImg} alt="item-img" />
                                                            </div>
                                                            <div className="infor-item">
                                                                <div className="infor-title">{item.productName}</div>
                                                                <div className="infor-size">
                                                                    <div className="size-title">size:</div>
                                                                    <div className="size-name">{item.productSize}</div>
                                                                </div>
                                                                <div className="infor-quantity">
                                                                    <div className="quantity-title">quantity:</div>
                                                                    <div className="quantity-action">
                                                                        <button
                                                                            onClick={() => {
                                                                                minusQuantity(item.productId, item.productSize, 1);
                                                                            }}
                                                                        >
                                                                            -
                                                                        </button>
                                                                        <div className="quantity">{item.quantity}</div>
                                                                        <button
                                                                            onClick={() => {
                                                                                addQuantity(item.productId, item.productSize, 1);
                                                                            }}
                                                                        >
                                                                            +
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="price-item">{item.productPrice * item.quantity}&nbsp;VND</div>
                                                        </div>
                                                    </Item>
                                                );
                                            })}
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
                                                <div className="price">{total}&nbsp;VND</div>
                                            </div>
                                        </Item>
                                        <Item>
                                            <div className="payment-item">
                                                <div className="title">Shipping Fee:</div>
                                                <div className="price">{total > 100 ? 50 : total === 0 ? 0 : 100}&nbsp;VND</div>
                                            </div>
                                        </Item>
                                    </Stack>
                                </div>
                                <div className="payment-total">
                                    <div className="total-title">TOTAL</div>
                                    <div className="total-price">{total > 100 ? total + 50 : total === 0 ? 0 : total + 100}&nbsp;VND</div>
                                </div>
                                <div className="payment-button">
                                    <button>Pay {total > 100 ? total + 50 : total === 0 ? 0 : total + 100}&nbsp;VND</button>
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
