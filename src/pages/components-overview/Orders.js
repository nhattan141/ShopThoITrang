import * as React from 'react';
import { toast } from 'react-toastify';

// material-ui
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import DialogOrder from './DialogOrder';
// import DialogOrderDetail from './DialogOrderDetail';

import { handleGetAllOrderApi } from 'services/orderService';

// ===============================|| COMPONENT - PRODUCTS ||=============================== //

const ComponentOrders = () => {
    const [orderArr, setOrderArr] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [openDetail, setOpenDetail] = React.useState(false);
    const [orderID, setId] = React.useState('');
    const [updated, setUpdated] = React.useState(false);
    const [checked, setChecked] = React.useState('');

    const toggleDialog = () => {
        setOpen(!open);
    };
    const toggleDialogDetail = () => {
        setOpenDetail(!openDetail);
    };

    const handleGetAllOrder = async () => {
        try {
            const res = await handleGetAllOrderApi();
            if (res && res.status === 200) {
                setOrderArr(res.data);
            }
        } catch (e) {
            console.log(e);
            toast.error('Có lỗi xảy ra');
        }
    };

    React.useEffect(() => {
        handleGetAllOrder();
    }, [updated]);

    const openPopup = (orderId) => {
        setOpen(!open);
        setId(orderId);
    };

    let reverseArr = orderArr.reverse();

    return (
        <ComponentSkeleton>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Mã đơn hàng</TableCell>
                            <TableCell align="right">Ngày đặt</TableCell>
                            <TableCell align="right">Tổng đơn</TableCell>
                            <TableCell align="right">Trạng thái</TableCell>
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
                                <TableCell align="right">{new Intl.NumberFormat().format(row.Total)}&nbsp;VNĐ</TableCell>
                                <TableCell align="right">{row.Status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DialogOrder open={open} toggleDialog={toggleDialog} orderID={orderID} setUpdated={setUpdated} />
            {/* <DialogOrderDetail open={openDetail} toggleDialogDetail={toggleDialogDetail} checked={checked} /> */}
        </ComponentSkeleton>
    );
};

export default ComponentOrders;
