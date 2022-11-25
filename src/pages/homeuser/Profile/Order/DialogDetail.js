import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import PropTypes from 'prop-types';

import { handleGetOrderDetailsByOrderIdApi } from 'services/orderService';
import { handleGetSingleProduct } from 'services/productService';

const DialogDetail = (props) => {
    const [orderArr, setOrderArr] = React.useState([]);
    const [productList, setProducts] = React.useState([]);
    const { orderID } = props;

    const handleGetAllDetailByOrderId = async () => {
        try {
            const res = await handleGetOrderDetailsByOrderIdApi(orderID);
            if (res && res.status === 200) {
                setOrderArr(res.data);
            }
        } catch (e) {
            console.log(e);
        }
    };

    React.useEffect(() => {
        handleGetAllDetailByOrderId();
    }, [orderID]);

    const rows = [];

    // orderArr.map(async (item) => {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const res = await handleGetSingleProduct(item.ProductId);
    //             const rowItem = createData(res.data.name, res.data.Iamge, res.data.Price, res.data.Quantity, res.data.Total);
    //             rows.push(rowItem);
    //         } catch (e) {
    //             reject(e);
    //         }
    //     });
    // });

    for (let i = 0; i < orderArr.length; i++) {
        const res = new Promise(async (resolve, reject) => {
            try {
                const products = await handleGetSingleProduct(orderArr.at(i).ProductId);
                resolve(products.data);
            } catch (e) {
                reject(e);
            }
        });
        const rowItem = createData(res.Name, res.Image, res.Price, res.Quantity, res.Total);
        rows.push(rowItem);
    }

    console.log(orderArr);
    console.log(rows);

    function createData(name, iamge, price, quantity, total) {
        return { name, iamge, price, quantity, total };
    }

    return (
        <Dialog open={props.open} onClose={props.toggleDialog}>
            <DialogTitle>Chi tiết đơn hàng &nbsp;{orderID}</DialogTitle>
            <DialogContent>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Tên sản phẩm</TableCell>
                                <TableCell align="right">Hình ảnh</TableCell>
                                <TableCell align="right">Đơn giá</TableCell>
                                <TableCell align="right">Số lượng</TableCell>
                                <TableCell align="right">Tổng</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.toggleDialog}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

DialogDetail.propTypes = {
    open: PropTypes.bool.isRequired,
    toggleDialog: PropTypes.func.isRequired,
    orderID: PropTypes.string.isRequired
};

export default DialogDetail;
