import * as React from 'react';

import './List.scss';

import CardProduct from 'layout/HomeLayout/CardProduct/CardProduct';

//import component MUI
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

//import custome hook
import usePagination from 'HOC/PaginationHook';
import useAddCart from 'HOC/useAddCart';

//import store redux
import * as actions from 'store/actions/index';
import productReducer, { initialStateProduct } from 'store/reducers/productReducer';
import { handleGetAllProduct } from 'services/productService';

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

    //====================set length mang cac san pham trong localStorage
    const [length, setLength] = React.useState(0);

    const { getCart } = useAddCart();

    React.useEffect(() => {
        getCart();
    }, [length]);

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
                                                    <CardProduct
                                                        id={item.id}
                                                        title={item.title}
                                                        category={item.category}
                                                        price={item.price}
                                                        image={item.image}
                                                        product={item}
                                                        setLength={setLength}
                                                    />
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
