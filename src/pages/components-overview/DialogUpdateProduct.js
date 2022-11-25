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

import { handleUpdateProductApi, handleGetSingleProduct } from 'services/productService';

const DialogUpdateProduct = (props) => {
    const { productID, setUpdated, open, toggleDialog, updated } = props;
    const [information, setInformation] = React.useState({});

    // const copy = { ...information };

    const getProductById = async () => {
        if (productID) {
            try {
                const res = await handleGetSingleProduct(productID);
                if (res && res.status === 200) {
                    setInformation(res.data);
                }
            } catch (e) {
                console.log(e);
            }
        }
    };

    React.useEffect(() => {
        getProductById();
    }, [open]);

    const handleOnchangeInput = (prop) => (event) => {
        setInformation({ ...information, [prop]: event.target.value });
    };

    const handleAdd = async () => {
        try {
            const res = await handleUpdateProductApi(
                productID,
                information.Name,
                information.Description,
                information.Quantity,
                information.Price
            );
            if (res && res.status === 200) {
                toast.success('Cập nhật sản phẩm thành công');
                setUpdated(!updated);
                toggleDialog();
            }
        } catch (e) {
            console.log(e);
            toast.error('Có lỗi xảy ra');
        }
    };

    return (
        <Dialog open={open} onClose={toggleDialog}>
            <DialogTitle>Cập nhật sản phẩm &nbsp; {productID}</DialogTitle>
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
                <Button onClick={toggleDialog}>Hủy</Button>
                <Button onClick={handleAdd}>Cập nhật</Button>
            </DialogActions>
        </Dialog>
    );
};

DialogUpdateProduct.propTypes = {
    open: PropTypes.bool.isRequired,
    toggleDialog: PropTypes.func.isRequired,
    setUpdated: PropTypes.func.isRequired,
    updated: PropTypes.bool.isRequired
};

export default DialogUpdateProduct;
