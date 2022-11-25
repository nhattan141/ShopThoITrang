import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { toast } from 'react-toastify';

import { hadleUpdateOrderApi, handleGetOrderbyIdApi } from 'services/orderService';

import PropTypes from 'prop-types';

const DialogOrder = (props) => {
    const { orderID, setUpdated, open, toggleDialog } = props;

    const [status, setStatus] = React.useState('');
    const [order, setOrder] = React.useState('');

    const handleOnchangeInput = (event) => {
        setStatus(event.target.value);
    };

    const handleGetOrderByOrderId = async () => {
        try {
            const res = await handleGetOrderbyIdApi(orderID);
            if (res && res.status === 200) {
                setOrder(res.data);
                setStatus(res.data.Status);
            }
        } catch (e) {
            console.log(e);
            toast.error('Có lỗi xảy ra');
        }
    };

    React.useEffect(() => {
        if (orderID) {
            handleGetOrderByOrderId();
        }
    }, [orderID]);

    console.log(status);

    const handleUpdate = async () => {
        if (orderID) {
            try {
                const res = await hadleUpdateOrderApi(orderID, status);
                if (res && res.status === 200) {
                    toast.success('Cập nhật thành công');
                    setUpdated(true);
                    toggleDialog();
                }
            } catch (e) {
                console.log(e);
                toast.error('Có lỗi xảy ra');
            }
        }
    };

    return (
        <Dialog open={open} onClose={toggleDialog}>
            <DialogTitle>Cập nhật đơn hàng {orderID}</DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '40ch' }
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Trạng thái" value={status} onChange={handleOnchangeInput} color="secondary" />
                </Box>
            </DialogContent>
            <DialogActions disabled>
                <Button onClick={toggleDialog}>Hủy</Button>
                <Button onClick={handleUpdate}>Cập nhật</Button>
            </DialogActions>
        </Dialog>
    );
};

DialogOrder.propTypes = {
    open: PropTypes.bool.isRequired,
    toggleDialog: PropTypes.func.isRequired,
    orderID: PropTypes.string.isRequired
};

export default DialogOrder;
