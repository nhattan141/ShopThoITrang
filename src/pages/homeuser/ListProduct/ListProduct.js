import * as React from 'react';

import './ListProduct.scss';

import Filter from './Filter/Filter';
import List from './List/List';

import { Grid, Paper, styled } from '@mui/material';

const ListProduct = (props) => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: '#000000'
    }));

    return (
        <div className="list-product-container">
            <div className="list-product-content">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={2}>
                        <Item>
                            <Filter />
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <Item>
                            <List category={props.category} />
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ListProduct;
