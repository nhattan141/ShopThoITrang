import * as React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { handleGetOrderbyAcountIdApi } from 'services/orderService';

import DialogDetail from './DialogDetail';

import useToken from 'HOC/useToken';

import { Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Order = () => {
    const [orderArr, setOrderArr] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [orderID, setId] = React.useState('');

    const { tokenApi } = useToken();

    if (tokenApi) {
        var { user } = tokenApi;
    }

    const handleGetAllOrderByAccountId = async () => {
        try {
            const res = await handleGetOrderbyAcountIdApi(user._id);
            if (res && res.status === 200) {
                setOrderArr(res.data);
            }
        } catch (e) {
            console.log(e);
            toast.error('Co loi xay ra, khong lay duoc cac don hang');
        }
    };

    // const rows = [];

    // function createRow(orderID, date, total, status) {
    //     return { orderID, date, total, status };
    // }

    // orderArr.map((item) => {
    //     const rowItem = createRow(item._id, item.Date, item.Total, item.Status);
    //     rows.unshift(rowItem);
    // });

    React.useEffect(() => {
        handleGetAllOrderByAccountId();
    }, []);

    const toggleDialog = () => {
        let openCopy = { ...open };
        openCopy = !openCopy;
        setOpen(openCopy);
    };

    const openPopup = (orderId) => {
        setOpen(!open);
        setId(orderId);
    };

    let reverseArr = orderArr.reverse();

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
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>OrderId</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Total</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reverseArr.map((row, index) => (
                            <TableRow
                                hover
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={() => openPopup(row._id)}
                            >
                                <TableCell component="th" scope="row">
                                    {row._id}
                                </TableCell>
                                <TableCell align="right">{row.Date}</TableCell>
                                <TableCell align="right">{row.Total}</TableCell>
                                <TableCell align="right">{row.Status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DialogDetail open={open} toggleDialog={toggleDialog} orderID={orderID} />
        </Grid>
    );
};

export default Order;
