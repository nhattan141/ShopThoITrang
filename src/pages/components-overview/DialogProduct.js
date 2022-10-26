import { useState, useEffect } from 'react';
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
import CardMedia from '@mui/material/CardMedia';

import PropTypes from 'prop-types';

const DialogProduct = (props) => {
    const [productInfo, setProductInfo] = useState({
        name: '',
        info: '',
        price: '',
        catalog: '',
        img: '',
        previewAvatar: ''
    });

    useEffect(() => {
        let productInfoCopy = { ...productInfo };
        productInfoCopy.name = props.product.title;
        productInfoCopy.info = props.product.description;
        productInfoCopy.price = props.product.price;
        productInfoCopy.catalog = props.product.category;
        productInfoCopy.previewAvatar = props.product.image;
        setProductInfo(productInfoCopy);
    }, [props.product]);

    const hanldeOnChangeInput = (event, id) => {
        let productCopy = { ...productInfo };
        if (id === 'avatar') {
            let data = event.target.files;
            let file = data[0];
            console.log('file: ', file);
            if (file) {
                let objectUrl = URL.createObjectURL(file);
                productCopy['avatar'] = file;
                productCopy['previewAvatar'] = objectUrl;
                setProductInfo(productCopy);
            }
        } else {
            productCopy[id] = event.target.value;
            setProductInfo(productCopy);
        }
    };

    const catalog = [
        {
            value: 'c1',
            label: 'T-shirt'
        },
        {
            value: 'c2',
            label: 'Jean'
        },
        {
            value: 'c3',
            label: 'Hoodies'
        }
    ];

    return (
        <Dialog open={props.open} onClose={props.toggleDialog}>
            <DialogTitle>{props.action === 'add' ? 'Add new productInfo' : 'Edit product ' + props.checked}</DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: 1 },
                        '& .MuiIconButton-root, .MuiCardMedia-root': { m: 1 }
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={productInfo.name}
                        onChange={(event) => hanldeOnChangeInput(event, 'name')}
                        defaultValue={props.action === 'add' ? '' : 'Edit productInfo'}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Information"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={productInfo.info}
                        onChange={(event) => hanldeOnChangeInput(event, 'info')}
                        defaultValue={props.action === 'add' ? '' : 'Edit productInfo'}
                    />
                    <TextField
                        required
                        id="outlined-select-currency"
                        select
                        label="Catalog"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={productInfo.catalog}
                        onChange={(event) => hanldeOnChangeInput(event, 'catalog')}
                    >
                        {catalog.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        required
                        id="outlined-required"
                        label="Price"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={productInfo.price}
                        onChange={(event) => hanldeOnChangeInput(event, 'price')}
                        defaultValue={props.action === 'add' ? '' : 'Edit productInfo'}
                    />
                    <IconButton
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                    >
                        <input hidden accept="image/*" type="file" onChange={(event) => hanldeOnChangeInput(event, 'avatar')} />
                        <InputLabel>Image</InputLabel>
                        <PhotoCamera />
                    </IconButton>
                    <CardMedia component="img" sx={{ width: 1 }} image={productInfo.previewAvatar} alt="Upload productInfo image" />
                    {props.action === 'edit' && props.checked.length !== 1 && (
                        <InputLabel error>Please chose 1 and only 1 item what you want to edit</InputLabel>
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.toggleDialog}>Cancel</Button>
                <Button
                    disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                    variant="outlined"
                    color="success"
                    onClick={props.toggleDialog}
                >
                    {props.action === 'add' ? 'Add new' : 'Update'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

DialogProduct.propTypes = {
    open: PropTypes.bool.isRequired,
    toggleDialog: PropTypes.func.isRequired,
    checked: PropTypes.array.isRequired,
    action: PropTypes.string.isRequired,
    product: PropTypes.object.isRequired
};

export default DialogProduct;
