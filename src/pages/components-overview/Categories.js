// material-ui
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import DialogCategory from './DialogCategory';
import { useState } from 'react';

// ===============================|| COLOR BOX ||=============================== //

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Category Name',
        width: 200,
        editable: true
    }
];

const rows = [
    { id: 1, name: 'Snow' },
    { id: 2, name: 'Lannister' },
    { id: 3, name: 'Lannister' },
    { id: 4, name: 'Stark' },
    { id: 5, name: 'Targaryen' },
    { id: 6, name: 'Melisandre' },
    { id: 7, name: 'Clifford' },
    { id: 8, name: 'Frances' },
    { id: 9, name: 'Roxie' }
];
const listCate = [{ title: '1' }, { title: '2' }, { title: '3' }, { title: '4' }, { title: '5' }, { title: '6' }, { title: '7' }];

// ===============================|| COMPONENT - PRODUCTS ||=============================== //

const ComponentCategories = () => {
    const [open, setOpen] = useState({
        open: false,
        action: ''
    });

    const [checked, setChecked] = useState([]);

    const toggleDialog = (action) => {
        let openCopy = { ...open };
        openCopy.open = !openCopy.open;
        openCopy.action = action;
        setOpen(openCopy);
    };

    console.log('checked: ', checked);

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
                <Autocomplete
                    style={{ width: 300 }}
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={listCate.map((option) => option.title)}
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
                    checkboxSelection
                    experimentalFeatures={{ newEditingApi: true }}
                    onSelectionModelChange={(item) => setChecked(item)}
                />
            </div>
            <DialogCategory open={open.open} toggleDialog={toggleDialog} action={open.action} checked={checked} />
        </ComponentSkeleton>
    );
};

export default ComponentCategories;
