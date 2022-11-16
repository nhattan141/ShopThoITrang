import * as React from 'react';

import { useParams } from 'react-router-dom';

import useAddCart from 'HOC/useAddCart';

import { Grid, Paper, FormControl, MenuItem, Select, Button, styled } from '@mui/material';

import * as actions from 'store/actions/index';
import productReducer, { initialStateProduct } from 'store/reducers/productReducer';
import { handleGetSingleProduct } from 'services/productService';

import './ProductInfor.scss';

const ProductInfor = (props) => {
    const Item = styled(Paper)(({ theme }) => ({
        // padding: theme.spacing(1),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: '#000000'
    }));
    // ==================== Select Size =================

    const [size, setSize] = React.useState();

    const handleSelectSize = (event) => {
        setSize(event.target.value);
    };

    // ==================== useAddCart =================
    const { addCart } = useAddCart();

    const handleAddProductToCart = (userID, product, size) => {
        addCart(userID, product, size);
    };

    // ==================== Call API =================
    let { id } = useParams();

    const [state, dispatch] = React.useReducer(productReducer, initialStateProduct);
    const { product } = state;

    const getProductById = async (id) => {
        try {
            let res = await handleGetSingleProduct(id);
            dispatch(actions.getSingleProductSuccess(res.data));
        } catch (e) {
            console.log(e);
        }
    };

    React.useEffect(() => {
        getProductById(id);
    }, []);

    return (
        <div className="product-infor-container">
            <div className="product-infor-content">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Item>
                            <div className="pro-image">
                                <img src={product.image} alt="hello" />
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item>
                            <div className="pro-infor">
                                <div className="title-infor">{product.title}</div>
                                <div className="price-infor">{product.price}</div>
                                <div className="detail-infor">{product.description}</div>
                                <div className="size-infor">
                                    <div className="title-size">Size</div>
                                    <div className="btn-size">
                                        <FormControl fullWidth>
                                            <Select
                                                labelId="size"
                                                id="demo-simple-select-outlined"
                                                displayEmpty
                                                value={size}
                                                onChange={handleSelectSize}
                                            >
                                                <MenuItem value={10}>S</MenuItem>
                                                <MenuItem value={20}>M</MenuItem>
                                                <MenuItem value={30}>L</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                <div className="add-cart">
                                    <Button
                                        onClick={() => {
                                            handleAddProductToCart(1, product, size);
                                        }}
                                    >
                                        Add To Cart
                                    </Button>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ProductInfor;
