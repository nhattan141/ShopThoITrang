// material-ui
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import DialogProduct from './DialogProduct';
import { useState } from 'react';

// ===============================|| COLOR BOX ||=============================== //

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 200,
        editable: true
    },
    {
        field: 'infor',
        headerName: 'Infor',
        width: 200,
        editable: true
    },
    {
        field: 'img',
        headerName: 'Image',
        width: 200,
        editable: true
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 200,
        editable: true
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 200,
        editable: true
    }
];

const rows = [
    { id: 1, name: 'Snow', infor: 'Jon', img: '35', price: '4.000.000', category: 'tshirt' },
    { id: 2, name: 'Lannister', infor: 'Cersei', img: '42', price: '4.000.000', category: 'tshirt' },
    { id: 3, name: 'Lannister', infor: 'Jaime', img: '45', price: '4.000.000', category: 'tshirt' },
    { id: 4, name: 'Stark', infor: 'Arya', img: '16', price: '4.000.000', category: 'tshirt' },
    { id: 5, name: 'Targaryen', infor: 'Daenerys', img: '4', price: '4.000.000', category: 'tshirt' },
    { id: 6, name: 'Melisandre', infor: 'Call', img: '150', price: '4.000.000', category: 'tshirt' },
    { id: 7, name: 'Clifford', infor: 'Ferrara', img: '44', price: '4.000.000', category: 'tshirt' },
    { id: 8, name: 'Frances', infor: 'Rossini', img: '36', price: '4.000.000', category: 'tshirt' },
    { id: 9, name: 'Roxie', infor: 'Harvey', img: '65', price: '4.000.000', category: 'tshirt' }
];

// ===============================|| COMPONENT - PRODUCTS ||=============================== //

const ComponentProducts = () => {
    const [open, setOpen] = useState({
        open: false,
        action: ''
    });

    const toggleDialog = (action) => {
        let openCopy = { ...open };
        openCopy.open = !openCopy.open;
        openCopy.action = action;
        setOpen(openCopy);
    };

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
            <div style={{ height: 400, width: '100%', border: '0.2px solid grey', marginTop: '10px' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </div>
            <DialogProduct open={open.open} toggleDialog={toggleDialog} action={open.action} />
        </ComponentSkeleton>
    );
};

export default ComponentProducts;
