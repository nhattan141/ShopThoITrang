import * as React from 'react';
import { toast } from 'react-toastify';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import PropTypes from 'prop-types';

import { handleAddProductApi } from 'services/productService';

const DialogAddProduct = (props) => {
    const { setUpdated, openAdd, toggleDialogAdd, updated } = props;
    const [information, setInformation] = React.useState({
        Name: '',
        Description: '',
        Quantity: 0,
        Price: 0
    });

    const handleOnchangeInput = (prop) => (event) => {
        setInformation({ ...information, [prop]: event.target.value });
    };

    const handleAdd = async () => {
        try {
            const res = await handleAddProductApi(information.Name, information.Description, information.Quantity, information.Price);
            if (res && res.status === 200) {
                toast.success('Tạo sản phẩm thành công');
                setUpdated(!updated);
                toggleDialogAdd();
            }
        } catch (e) {
            console.log(e);
            toast.error('Có lỗi xảy ra');
        }
    };

    return (
        <Dialog open={openAdd} onClose={toggleDialogAdd}>
            <DialogTitle>Thêm mới tài khoản </DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '40ch' },
                        p: 1
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Tên sản phẩm" value={information.Name} onChange={handleOnchangeInput('Name')} color="secondary" />
                    <TextField
                        label="Mô tả"
                        value={information.Description}
                        onChange={handleOnchangeInput('Description')}
                        olor="secondary"
                    />
                    <TextField label="Số lượng" value={information.Quantity} onChange={handleOnchangeInput('Quantity')} color="secondary" />
                    <TextField label="Đơn giá" value={information.Price} onChange={handleOnchangeInput('Price')} color="secondary" />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleDialogAdd}>Hủy</Button>
                <Button onClick={handleAdd}>Thêm mới</Button>
            </DialogActions>
        </Dialog>
    );
};

DialogAddProduct.propTypes = {
    openAdd: PropTypes.bool.isRequired,
    toggleDialogAdd: PropTypes.func.isRequired,
    setUpdated: PropTypes.func.isRequired,
    updated: PropTypes.bool.isRequired
};

export default DialogAddProduct;
