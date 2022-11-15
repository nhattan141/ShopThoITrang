// material-ui
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



// project import
import ComponentSkeleton from './ComponentSkeleton';
import DialogVoucher from './DialogVoucher';
import { useState } from 'react';

// ===============================|| COLOR BOX ||=============================== //

const columns = [
    { field: 'id', 
    headerName: 'ID', 
    width: 330 },
    {
        field: 'from',
        headerName: 'Ngày có hiệu lực',
        width: 330,
        editable: true
    },
    {
        field: 'to',
        headerName: 'Ngày hết liệu lực',
        width: 330,
        editable: true
    },
    {
        field: 'value',
        headerName: 'Giá trị',
        width: 330,
        editable: true
    }
];

const rows = [
    { id: 'saleD11M115%T' , from: '00:00:00 11-11-2022', to: '29:59:59 12-11-2022 ', value: '-15%' },
    { id: 'saleD11M1110%T', from: '00:00:00 11-11-2022', to: '29:59:59 12-11-2022 ', value: '-10%' },
    { id: 'saleD11M118%T', from: '00:00:00 11-11-2022', to: '29:59:59 12-11-2022 ', value: '-8%' },
    { id: 'saleD11M1120K', from: '00:00:00 11-11-2022', to: '29:59:59 12-11-2022 ', value: '-20 000' },
    { id: 'saleD11M115K', from: '00:00:00 11-11-2022', to: '29:59:59 12-11-2022 ', value: '- 15 0000' },
    { id: 'saleD11M1110K', from: '00:00:00 11-11-2022', to: '29:59:59 12-11-2022 ', value: '-10 000' },
    { id: 'saleD12M1210%T', from: '00:00:00 11-12-2022', to: '29:59:59 12-12-2022 ', value: '-10%' },

];

// ===============================|| COMPONENT - PRODUCTS ||=============================== //

const ComponentVouchers = () => {
    const [open, setOpen] = useState(false);

    const toggleDialog = () => {
        setOpen(!open);
    };

    const [checked, setChecked] = useState([]);
    
    const listVoucher = [
        { title: 'saleD11M115%T' },
        { title: 'saleD11M1110' },
        { title: 'saleD11M118%T' },
        { title: 'saleD11M1120K' },
        { title: 'saleD11M115K' },
        { title: 'saleD11M1110K' },
        { title: 'saleD12M1210%T' },
      ];
    return (
        <ComponentSkeleton>
            <Stack spacing={2} direction="row" style={{ width: '100%' }}>
                <Button variant="outlined" color="error"  >
                    Delete
                </Button>
                <Button variant="outlined" color="success" onClick={() => toggleDialog('edit')}>
                    Edit
                </Button>
                <Button variant="contained" onClick={() => toggleDialog('add')}>
                    Add new
                </Button>
                <Autocomplete style={{width:300}}
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={listVoucher.map((option) => option.title)}
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search input"
                        InputProps={{
                        ...params.InputProps,
                        type: 'search',
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
            <DialogVoucher open={open} toggleDialog={toggleDialog} checked={checked} />
        </ComponentSkeleton>
    );
};

export default ComponentVouchers;
