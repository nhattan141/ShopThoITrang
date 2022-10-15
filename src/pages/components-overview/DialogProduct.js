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
import CardMedia from '@mui/material/CardMedia';

import PropTypes from 'prop-types';

const DialogProduct = (props) => {
    const [product, setProduct] = useState({
        name: '',
        info: '',
        price: '',
        catalog: '',
        img: ''
    });

    const hanldeOnChangeInput = (event, id) => {
        let productCopy = { ...product };
        productCopy[id] = event.target.value;
        setProduct(productCopy);
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
            <DialogTitle>{props.action === 'add' ? 'Add new Product' : 'Edit Product ' + props.checked}</DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '40ch' }
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={product.name}
                        onChange={(event) => hanldeOnChangeInput(event, 'name')}
                        defaultValue={props.action === 'add' ? '' : 'Edit product'}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Information"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={product.info}
                        onChange={(event) => hanldeOnChangeInput(event, 'info')}
                        defaultValue={props.action === 'add' ? '' : 'Edit product'}
                    />
                    <TextField
                        required
                        id="outlined-select-currency"
                        select
                        label="Catalog"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={product.catalog}
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
                        value={product.price}
                        onChange={(event) => hanldeOnChangeInput(event, 'price')}
                        defaultValue={props.action === 'add' ? '' : 'Edit product'}
                    />
                    <IconButton
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        color="primary"
                        aria-label="upload picture"
                        component="label"
                    >
                        <input hidden accept="image/*" type="file" />
                        <InputLabel>Image</InputLabel>
                        <PhotoCamera />
                    </IconButton>
                    <CardMedia
                        component="img"
                        sx={{ width: 300 }}
                        image="/static/images/cards/live-from-space.jpg"
                        alt="Upload product image"
                    />
                    {props.action === 'edit' && props.checked.length !== 1 && (
                        <InputLabel error>Please chose 1 and only 1 item what you want to edit</InputLabel>
                    )}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.toggleDialog}>Cancel</Button>
                <Button onClick={props.toggleDialog}>{props.action === 'add' ? 'Add new' : 'Update'}</Button>
            </DialogActions>
        </Dialog>
    );
};

DialogProduct.propTypes = {
    open: PropTypes.bool.isRequired,
    toggleDialog: PropTypes.func.isRequired,
    checked: PropTypes.array.isRequired,
    action: PropTypes.string.isRequired
};

export default DialogProduct;
