import * as React from 'react';

import './Product.scss';

import ProductInfor from './ProductInfor/ProductInfor';
import OtherProduct from './OtherProduct/OtherProduct';

import { Grid, Paper, styled } from '@mui/material';

const Product = (props) => {
    const Item = styled(Paper)(({ theme }) => ({
        // padding: theme.spacing(1),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: '#000000'
    }));

    return (
        <div className="product-container">
            <div className="product-content">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Item>
                            <ProductInfor />
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item>
                            <OtherProduct />
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Product;
