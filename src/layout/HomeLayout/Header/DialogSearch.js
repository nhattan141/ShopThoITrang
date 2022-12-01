import * as React from 'react';

//import component MUI
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

import PropTypes from 'prop-types';

//import custome hook
import usePagination from 'HOC/PaginationHook';
import useAddCart from 'HOC/useAddCart';

import CardProduct from 'layout/HomeLayout/CardProduct/CardProduct';

//import store redux
import * as actions from 'store/actions/index';
import productReducer, { initialStateProduct } from 'store/reducers/productReducer';
import { handleGetAllProduct } from 'services/productService';

const DialogSearch = (props) => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: theme.palette.text.secondary
    }));

    const { open, toggleDialog } = props;

    const [search, setSearch] = React.useState('');
    // const [products, setProducts] = React.useState([]);

    const handleOnchangeInput = (event) => {
        setSearch(event.target.value.toLowerCase());
    };

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
    }, [search]);

    let filteredData = products.filter((product) => {
        let songLowerCase = product.Name.toLowerCase();
        return songLowerCase.includes(search);
    });

    console.log(filteredData);
    //====================set length mang cac san pham trong localStorage
    const [length, setLength] = React.useState(0);

    const { getCart } = useAddCart();

    React.useEffect(() => {
        getCart();
    }, [length]);

    // ==================== Pagination =================

    let [page, setPage] = React.useState(1);
    const PER_PAGE = 8;

    //dem so trang
    const DATA = usePagination(filteredData, PER_PAGE);

    let currentData = DATA.currentData();

    const handleChange = (e, p) => {
        setPage(p);
        DATA.jump(p);
    };

    return (
        <Dialog open={open} onClose={toggleDialog}>
            <DialogTitle>Tìm kiếm sản phẩm</DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '40ch' }
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Tìm kiếm" value={search} onChange={handleOnchangeInput} color="secondary" />
                </Box>
                <Grid container spacing={2}>
                    {currentData.map((item, index) => {
                        return (
                            <Grid item xs key={index}>
                                <Item>
                                    <CardProduct
                                        id={item._id}
                                        title={item.Name}
                                        category={item.CategoryId}
                                        price={item.Price}
                                        image={item.Image}
                                        product={item}
                                        setLength={setLength}
                                    />
                                </Item>
                            </Grid>
                        );
                    })}
                </Grid>
                <Pagination count={DATA.maxPage} page={page} onChange={handleChange} />
            </DialogContent>
            <DialogActions disabled>
                <Button onClick={toggleDialog}>Hủy</Button>
            </DialogActions>
        </Dialog>
    );
};

DialogSearch.propTypes = {
    open: PropTypes.bool.isRequired,
    toggleDialog: PropTypes.func.isRequired
};

export default DialogSearch;
