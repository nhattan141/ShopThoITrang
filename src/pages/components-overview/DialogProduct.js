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

const DialogProduct = (props) => {
    console.log('prop: ', props);

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
            <DialogTitle>{props.action === 'add' ? 'Add new Product' : 'Edit Product'}</DialogTitle>
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
                        value={product.name}
                        onChange={(event) => hanldeOnChangeInput(event, 'name')}
                        defaultValue={props.action === 'add' ? '' : 'Edit product'}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Information"
                        value={product.info}
                        onChange={(event) => hanldeOnChangeInput(event, 'info')}
                        defaultValue={props.action === 'add' ? '' : 'Edit product'}
                    />
                    <TextField
                        required
                        id="outlined-select-currency"
                        select
                        label="Catalog"
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
                        value={product.price}
                        onChange={(event) => hanldeOnChangeInput(event, 'price')}
                        defaultValue={props.action === 'add' ? '' : 'Edit product'}
                    />
                    <IconButton color="primary" aria-label="upload picture" component="label">
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
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.toggleDialog}>Cancel</Button>
                <Button onClick={props.toggleDialog}>{props.action === 'add' ? 'Add new' : 'Update'}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default DialogProduct;
