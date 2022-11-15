import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

import PropTypes from 'prop-types';

const DialogAccount = (props) => {
    const [account, setAccount] = useState({
        username: '',
        password: '',
        name: '',
        status: ''
    });

    const hanldeOnChangeInput = (event, id) => {
        let accountCopy = { ...account };
        accountCopy[id] = event.target.value;
        setAccount(accountCopy);
    };

    

    return (
        <Dialog open={props.open} onClose={props.toggleDialog}>
            <DialogTitle>{props.action === 'add' ? 'Add new Account' : 'Edit Account ' + props.checked}</DialogTitle>
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
                        label="UserName"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={account.username}
                        onChange={(event) => hanldeOnChangeInput(event, 'username')}
                        defaultValue={props.action === 'add' ? '' : 'Edit account'}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={account.password}
                        onChange={(event) => hanldeOnChangeInput(event, 'password')}
                        defaultValue={props.action === 'add' ? '' : 'Edit account'}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={account.name}
                        onChange={(event) => hanldeOnChangeInput(event, 'name')}
                        defaultValue={props.action === 'add' ? '' : 'Edit account'}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Status"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={account.status}
                        onChange={(event) => hanldeOnChangeInput(event, 'status')}
                        defaultValue={props.action === 'add' ? '' : 'Edit account'}
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

DialogAccount.propTypes = {
    open: PropTypes.bool.isRequired,
    toggleDialog: PropTypes.func.isRequired,
    checked: PropTypes.array.isRequired,
    action: PropTypes.string.isRequired
};

export default DialogAccount;
