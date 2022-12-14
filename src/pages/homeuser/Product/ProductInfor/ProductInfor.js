import * as React from 'react';

import { useParams } from 'react-router-dom';

import useAddCart from 'HOC/useAddCart';

import { Grid, Paper, Avatar, Button, styled } from '@mui/material';

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
                                <Avatar sx={{ width: '100%', height: '100%' }} variant="square" alt="Product" src={product.Image} />
                                {/* <img src={product.Image} alt="hello" /> */}
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Item>
                            <div className="pro-infor">
                                <div className="title-infor">{product.Name}</div>
                                <div className="price-infor">{new Intl.NumberFormat().format(product.Price)}&nbsp;VN??</div>
                                <div className="detail-infor">{product.Description}</div>
                                <div className="add-cart">
                                    <Button
                                        onClick={() => {
                                            handleAddProductToCart(1, product);
                                        }}
                                    >
                                        Th??m v??o gi??? h??ng
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
