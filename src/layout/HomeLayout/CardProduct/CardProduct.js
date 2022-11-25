import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useAddCart from 'HOC/useAddCart';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import './CardProduct.scss';

const CardProduct = (props) => {
    const { addCart } = useAddCart();
    const navigate = useNavigate();

    const handleAddProductToCart = (userID, product, size) => {
        addCart(userID, product, size);
        props.setLength((prevState) => prevState + 1);
    };

    const handleToProductPage = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="card-product">
            <div className="img-product">
                <Link to={`/product/${props.id}`}>
                    <img src={props.image} alt="card" />
                </Link>
                <div className="access-product">
                    <div className="action-product">
                        <div className="action-product-left">
                            <IconButton
                                aria-label="add to shopping cart"
                                onClick={() => {
                                    handleToProductPage(props.id);
                                }}
                            >
                                <SearchOutlinedIcon />
                            </IconButton>
                        </div>
                        <div className="action-product-right">
                            <IconButton
                                aria-label="add to shopping cart"
                                onClick={() => {
                                    handleAddProductToCart(1, props.product, 10);
                                }}
                            >
                                <AddShoppingCartIcon />
                            </IconButton>
                            {/* <ShoppingBagOutlinedIcon /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="title-product">{props.title}</div>
            <div className="bottom-product">
                <div className="left-bot">{props.id}</div>
                <div className="right-bot">{new Intl.NumberFormat().format(props.price)}&nbsp;VNĐ</div>
            </div>
        </div>
    );
};

export default CardProduct;
