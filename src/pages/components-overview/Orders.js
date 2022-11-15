// material-ui
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import DialogOrder from './DialogOrder';
import DialogOrderDetail from './DialogOrderDetail';
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
    { id: 1, name: 'Snow', stt: 'Prepared', total: 400000 },
    { id: 2, name: 'Lannister', stt: 'Delivered', total: 400000 },
    { id: 3, name: 'Lannister', stt: 'Completed', total: 400000 },
    { id: 4, name: 'Stark', stt: 'Prepared', total: 400000 },
    { id: 5, name: 'Targaryen', stt: 'Delivered', total: 400000 },
    { id: 6, name: 'Melisandre', stt: 'Completed', total: 400000 },
    { id: 7, name: 'Clifford', stt: 'Completed', total: 400000 },
    { id: 8, name: 'Frances', stt: 'Completed', total: 400000 },
    { id: 9, name: 'Roxie', stt: 'Completed', total: 400000 }
];

const listKey = [{ title: '1' }, { title: '2' }, { title: '3' }, { title: '4' }, { title: '5' }, { title: '6' }, { title: '7' }];

// ===============================|| COMPONENT - PRODUCTS ||=============================== //

const ComponentOrders = () => {
    const [open, setOpen] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);

    const toggleDialog = () => {
        setOpen(!open);
    };
    const toggleDialogDetail = () => {
        setOpenDetail(!openDetail);
    };

    const [checked, setChecked] = useState([]);

    return (
        <ComponentSkeleton>
            <Stack spacing={2} direction="row" style={{ width: '100%' }}>
                <Button variant="outlined" color="success" onClick={() => toggleDialog('edit')}>
                    Edit
                </Button>
                <Button variant="contained" onClick={() => toggleDialogDetail('add')}>
                    Detailed
                </Button>
                <Autocomplete
                    style={{ width: 300 }}
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={listKey.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search input"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search'
                            }}
                        />
                    )}
                />
            </Stack>
            <div style={{ height: 400, width: '100%', border: '0.2px solid grey', marginTop: '10px' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    experimentalFeatures={{ newEditingApi: true }}
                    onSelectionModelChange={(item) => setChecked(item)}
                    checkboxSelection
                />
            </div>
            <DialogOrder open={open} toggleDialog={toggleDialog} checked={checked} />
            <DialogOrderDetail open={openDetail} toggleDialogDetail={toggleDialogDetail} checked={checked} />
        </ComponentSkeleton>
    );
};

export default ComponentOrders;
