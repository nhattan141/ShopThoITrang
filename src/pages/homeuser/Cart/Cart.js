import * as React from 'react';

import './Cart.scss';

import { Grid, Paper, styled } from '@mui/material';

import CartInfor from './CartInfor/CartInfor';
import OtherProduct from '../../homeuser/Product/OtherProduct/OtherProduct';

const Cart = (props) => {
    const Item = styled(Paper)(({ theme }) => ({
        // padding: theme.spacing(1),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: '#000000'
    }));

    return (
        <div className="cart-container">
            <div className="cart-content">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Item>
                            <CartInfor />
                        </Item>
                    </Grid>
                </Grid>
            </div>
            <OtherProduct />
        </div>
    );
};

export default Cart;
