import * as React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { handleGetOrderbyAcountIdApi, handleGetOrderDetailsByOrderIdApi } from 'services/orderService';
import { handleGetSingleProduct } from 'services/productService';

import useToken from 'HOC/useToken';

import {
    Grid,
    Box,
    Collapse,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Avatar,
    Paper
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { forEach } from 'lodash';

const Order = () => {
    const [orderArr, setOrderArr] = React.useState([]);
    const [details, setDetails] = React.useState([]);

    const { tokenApi } = useToken();

    if (tokenApi) {
        var { user } = tokenApi;
    }

    const handleGetAllOrderByAccountId = async () => {
        try {
            const res = await handleGetOrderbyAcountIdApi(user._id);
            if (res && res.status === 200) {
                setOrderArr(res.data);
                // const details = await handleGetOrderDetailsByOrderIdApi(orderArr._id);
                // detailsCopy.push(details.data);
                // setDetails(detailsCopy);
            }
        } catch (e) {
            console.log(e);
            toast.error('Co loi xay ra, khong lay duoc cac don hang');
        }
    };

    const handleGetDetailByOrdertId = async () => {
        let copy = [];
        orderArr.forEach(async () => {
            const details = await handleGetOrderDetailsByOrderIdApi(orderArr._id);
            copy = [...details.data];
        });
        setDetails(copy);
    };

    React.useEffect(() => {
        handleGetAllOrderByAccountId();
        handleGetDetailByOrdertId();
    }, []);

    console.log(details);

    const rows = [];

    orderArr.map(async (item) => {
        const detail = await handleGetOrderDetailsByOrderIdApi(item._id);
        // setDetails(detail.data);
    });

    orderArr.map(async (item) => {
        const rowItem = createData(item._id, item.Date, item.Total, item.Status, details);
        rows.unshift(rowItem);
    });

    function createDetailItem(productName, productImg, amount, productPrice) {
        return { productName, productImg, amount, productPrice };
    }

    function createData(orderId, otherDate, otherTotal, otherStatus, details) {
        const detail = [];
        details.map(async (item) => {
            const product = await handleGetSingleProduct(item.ProductId);
            const detailItem = createDetailItem(product.data.Name, product.data.Image, product.data.Quantity, product.data.Price);
            detail.push(detailItem);
        });

        return {
            orderId,
            otherDate,
            otherTotal,
            otherStatus,
            detail
        };
    }

    function Row(props) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);

        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row">
                        {row.orderId}
                    </TableCell>
                    <TableCell align="right">{row.otherDate}</TableCell>
                    <TableCell align="right">{row.otherTotal}</TableCell>
                    <TableCell align="right">{row.otherStatus}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Detail
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Product Name</TableCell>
                                            <TableCell>Image</TableCell>
                                            <TableCell align="right">Amount</TableCell>
                                            <TableCell align="right">Total Price</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {row.detail.map((detailRow, index) => (
                                            <TableRow key={index}>
                                                <TableCell component="th" scope="row">
                                                    {detailRow.productName}
                                                </TableCell>
                                                <TableCell>
                                                    <Avatar alt="Product Image" variant="rounded" src={detailRow.productImg} />
                                                    {/* {detailRow.productImg} */}
                                                </TableCell>
                                                <TableCell align="right">{detailRow.amount}</TableCell>
                                                <TableCell align="right">{detailRow.amount * detailRow.productPrice}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }

    Row.propTypes = {
        row: PropTypes.shape({
            otherDate: PropTypes.string.isRequired,
            otherStatus: PropTypes.string.isRequired,
            otherTotal: PropTypes.number.isRequired,
            detail: PropTypes.arrayOf(
                PropTypes.shape({
                    amount: PropTypes.number.isRequired,
                    productName: PropTypes.string.isRequired,
                    productImg: PropTypes.string.isRequired,
                    productPrice: PropTypes.number.isRequired
                })
            ).isRequired
        }).isRequired
    };

    return (
        <Grid
            container
            spacing={0}
            sx={{
                border: '1px solid rgba(0, 0, 0, 0.25)',
                height: '100%',
                mt: 0,
                borderRadius: '5px'
            }}
        >
            <TableContainer component={Paper} sx={{ boxShadow: '0' }}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Order Code</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Total</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.orderId} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
};

export default Order;
