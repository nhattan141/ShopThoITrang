import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { PodcastsOutlined } from '../../../node_modules/@mui/icons-material/index';

const DialogOrder = (props) => {
    console.log('prop: ', props);

    const [order, setOrder] = useState({
        cart_id: '',
        pro_name: '',
        size: '',
        quantity: '',
        price: '',
        stt: '',
        total: ''
    });

    const hanldeOnChangeInput = (event) => {
        let orderCopy = { ...order };
        orderCopy.stt = event.target.value;
        setOrder(orderCopy);
    };

    const status = [
        {
            value: '0',
            label: 'Canceled'
        },
        {
            value: '1',
            label: 'Cart'
        },
        {
            value: '2',
            label: 'Ongoing'
        },
        {
            value: '3',
            label: 'Completed'
        }
    ];

    return (
        <Dialog open={props.open} onClose={props.toggleDialog}>
            <DialogTitle>Edit Order {order.cart_id}</DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '40ch' }
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField disabled id="outlined-required" label="Product Name" value={order.pro_name} />
                    <TextField disabled id="outlined-required" label="Size" value={order.size} />
                    <TextField disabled id="outlined-required" label="Quantity" value={order.quantity} />
                    <TextField disabled id="outlined-required" label="Price" value={order.price} />
                    <TextField disabled id="outlined-required" label="Total" value={order.total} />
                    <TextField
                        required
                        id="outlined-select-currency"
                        select
                        label="Status"
                        value={order.stt}
                        onChange={(event) => hanldeOnChangeInput(event)}
                    >
                        {status.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.toggleDialog}>Cancel</Button>
                <Button onClick={props.toggleDialog}>Update</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogOrder;
