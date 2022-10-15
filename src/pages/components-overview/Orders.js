// material-ui
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import DialogOrder from './DialogOrder';
import { useState } from 'react';

// ===============================|| COLOR BOX ||=============================== //

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Member Name',
        width: 330,
        editable: true
    },
    {
        field: 'stt',
        headerName: 'Status',
        width: 330,
        editable: true
    },
    {
        field: 'total',
        headerName: 'Total',
        width: 330,
        editable: true
    }
];

const rows = [
    { id: 1, name: 'Snow', stt: 'Jon', total: 400000 },
    { id: 2, name: 'Lannister', stt: 'Cersei', total: 400000 },
    { id: 3, name: 'Lannister', stt: 'Jaime', total: 400000 },
    { id: 4, name: 'Stark', stt: 'Arya', total: 400000 },
    { id: 5, name: 'Targaryen', stt: 'Daenerys', total: 400000 },
    { id: 6, name: 'Melisandre', stt: 'Call', total: 400000 },
    { id: 7, name: 'Clifford', stt: 'Ferrara', total: 400000 },
    { id: 8, name: 'Frances', stt: 'Rossini', total: 400000 },
    { id: 9, name: 'Roxie', stt: 'Harvey', total: 400000 }
];

// ===============================|| COMPONENT - PRODUCTS ||=============================== //

const ComponentOrders = () => {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState();

    const toggleDialog = (action) => {
        setOpen(!open);
    };

    const handleChooseItem = (id) => {
        setId(id);
    };

    console.log('id order: ', id);

    return (
        <ComponentSkeleton>
            <Stack spacing={2} direction="row" style={{ width: '100%' }}>
                <Button variant="outlined" color="success" onClick={() => toggleDialog('edit')}>
                    Edit
                </Button>
            </Stack>
            <div style={{ height: 400, width: '100%', border: '0.2px solid grey', marginTop: '10px' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </div>
            <DialogOrder open={open} toggleDialog={toggleDialog} />
        </ComponentSkeleton>
    );
};

export default ComponentOrders;
