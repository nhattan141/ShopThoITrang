// material-ui
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import DialogProduct from './DialogProduct';
import { useState, useEffect, useReducer } from 'react';

import * as actions from '../../store/actions/index';
import productReducer, { initialState } from '../../store/reducers/productReducer';
import { handleGetAllProduct } from 'services/productService';

// ===============================|| COLOR BOX ||=============================== //

const proColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 200
    },
    {
        field: 'infor',
        headerName: 'Infor',
        width: 200
    },
    {
        field: 'img',
        headerName: 'Image',
        width: 200,
        renderCell: (params) => {
            return (
                <>
                    <img style={{ height: '100%', width: '100%' }} src={params.row.img} alt="" />
                </>
            );
        }
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 200
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 200
    }
];

// ===============================|| COMPONENT - PRODUCTS ||=============================== //

const ComponentProducts = () => {
    const [open, setOpen] = useState({
        open: false,
        action: ''
    });

    const [checked, setChecked] = useState([]);

    const [state, dispatch] = useReducer(productReducer, initialState);

    const { products } = state;

    const toggleDialog = (action) => {
        let openCopy = { ...open };
        openCopy.open = !openCopy.open;
        openCopy.action = action;
        setOpen(openCopy);
    };

    const getAllProduct = async () => {
        try {
            let res = await handleGetAllProduct();
            dispatch(actions.getAllProductsSuccess(res.data));
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <ComponentSkeleton>
            <Stack spacing={2} direction="row" style={{ width: '100%' }}>
                <Button variant="outlined" color="error">
                    Delete
                </Button>
                <Button variant="outlined" color="success" onClick={() => toggleDialog('edit')}>
                    Edit
                </Button>
                <Button variant="contained" onClick={() => toggleDialog('add')}>
                    Add new
                </Button>
            </Stack>
            <div style={{ height: 800, width: '100%', border: '0.2px solid grey', marginTop: '10px' }}>
                <DataGrid
                    rows={products.map((product, index) => ({
                        key: index,
                        id: product.id,
                        name: product.title,
                        infor: product.description,
                        img: product.image,
                        price: product.price,
                        category: product.category
                    }))}
                    columns={proColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onSelectionModelChange={(item) => setChecked(item)}
                    getRowId={(row) => row.key}
                    getRowHeight={() => 200}
                />
            </div>
            <DialogProduct open={open.open} toggleDialog={toggleDialog} action={open.action} checked={checked} />
        </ComponentSkeleton>
    );
};

export default ComponentProducts;
