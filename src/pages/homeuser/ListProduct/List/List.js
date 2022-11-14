import * as React from 'react';
import { Link } from 'react-router-dom';

import './List.scss';

//import component MUI

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

// icon mui
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

//import custome hook
import usePagination from 'HOC/PaginationHook';

//import store redux
import * as actions from 'store/actions/index';
import productReducer, { initialStateProduct } from 'store/reducers/productReducer';
import { handleGetAllProduct } from 'services/productService';

import useAddCart from 'HOC/useAddCart';

const List = (props) => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: theme.palette.text.secondary
    }));

    // ==================== Call API =================

    const [state, dispatch] = React.useReducer(productReducer, initialStateProduct);
    const { products } = state;

    const getAllProduct = async () => {
        try {
            let res = await handleGetAllProduct();
            dispatch(actions.getAllProductsSuccess(res.data));
        } catch (e) {
            console.log(e);
        }
    };

    React.useEffect(() => {
        getAllProduct();
    }, []);

    // ==================== Pagination =================

    let [page, setPage] = React.useState(1);
    const PER_PAGE = 8;

    //dem so trang
    const DATA = usePagination(products, PER_PAGE);

    let currentData = DATA.currentData();

    const handleChange = (e, p) => {
        setPage(p);
        DATA.jump(p);
    };

    const { cart, setCart } = useAddCart();
    console.log(cart);

    return (
        <div className="list-container">
            <div className="list-content">
                <div className="products">
                    <div className="tabcontent tab-active" id="all">
                        <div className="list-title">{props.category}</div>
                        <div className="list-products">
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    {currentData.map((item, index) => {
                                        return (
                                            <Grid item xs={12} sm={6} md={3} key={index}>
                                                <Item>
                                                    <div className="card-product">
                                                        <div className="img-product">
                                                            <Link to={`/product/${item.id}`}>
                                                                <img src={item.image} alt="card" />
                                                            </Link>
                                                            <div className="access-product">
                                                                <div className="action-product">
                                                                    <div className="action-product-left">
                                                                        <FavoriteBorderOutlinedIcon />
                                                                        <Link to={`/product/${item.id}`}>
                                                                            <SearchOutlinedIcon />
                                                                        </Link>
                                                                    </div>
                                                                    <div className="action-product-right">
                                                                        <ShoppingBagOutlinedIcon />
                                                                        Shop Now
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="title-product">{item.title}</div>
                                                        <div className="bottom-product">
                                                            <div className="left-bot">{item.category}</div>
                                                            <div className="right-bot">{item.price}</div>
                                                        </div>
                                                    </div>
                                                </Item>
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </Box>
                        </div>
                        <div className="list-pagination">
                            <Pagination count={DATA.maxPage} page={page} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
