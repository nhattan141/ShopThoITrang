// material-ui
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import DialogAccount from './DialogUpdateAccount';
import { useState, useEffect, useReducer } from 'react';

import * as actions from '../../store/actions/index';
import accountReducer, { initialState } from '../../store/reducers/accountReducer';
import { handleGetAllAccount } from 'services/accountService';

// ===============================|| COLOR BOX ||=============================== //

const proColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'username',
        headerName: 'UserName',
        width: 200
    },
    {
        field: 'password',
        headerName: 'Password',
        width: 200
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 200
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 200
    }
];

const listAcount = [
    { title: '1' },
    { title: '2' },
    { title: '3' },
    { title: '4' },
    { title: '5' },
    { title: '6' },
    { title: '7' },
];

// ===============================|| COMPONENT - PRODUCTS ||=============================== //

const ComponentAccounts = () => {
    const [open, setOpen] = useState({
        open: false,
        action: ''
    });

    const [checked, setChecked] = useState([]);

    const [state, dispatch] = useReducer(accountReducer, initialState);

    const { accounts } = state;

    const toggleDialog = (action) => {
        let openCopy = { ...open };
        openCopy.open = !openCopy.open;
        openCopy.action = action;
        setOpen(openCopy);
    };

    const getAllAccount = async () => {
        try {
            let res = await handleGetAllAccount();
            dispatch(actions.getAllAccountsSuccess(res.data));
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getAllAccount();
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
                <Autocomplete style={{ width: 300 }}
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={listAcount.map((option) => option.title)}
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
            <div style={{ height: 800, width: '100%', border: '0.2px solid grey', marginTop: '10px' }}>
                <DataGrid
                    rows={accounts.map((account, index) => ({
                        key: index,
                        id: account.id,
                        username: account.username,
                        password: account.password,
                        name: account.name, // Chỗ này còn .firstname và .firstname nữa, mà t chưa biết lấy
                        status: account.__v,
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
            <DialogAccount open={open.open} toggleDialog={toggleDialog} action={open.action} checked={checked} />
        </ComponentSkeleton>
    );
};

export default ComponentAccounts;
