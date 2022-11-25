import * as React from 'react';
import { toast } from 'react-toastify';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import PropTypes from 'prop-types';

import { handleUpdateRoleAccountApi } from 'services/accountService';

const DialogUpdateAccount = (props) => {
    const { accountID, setUpdated, open, toggleDialog, updated } = props;

    const [role, setRole] = React.useState('');

    const handleOnchangeInput = (event) => {
        setRole(event.target.value);
    };

    const handleUpdate = async () => {
        if (accountID) {
            try {
                const res = await handleUpdateRoleAccountApi(accountID, role);
                if (res && res.status === 200) {
                    toast.success('Cập nhật thành công');
                    setUpdated(!updated);
                    toggleDialog();
                }
            } catch (e) {
                console.log(e);
                toast.error('Có lỗi xảy ra');
            }
        }
    };

    return (
        <Dialog open={open} onClose={toggleDialog}>
            <DialogTitle>{'Cập nhật tài khoản ' + accountID}</DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '40ch' }
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Quyền</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={role}
                            label="Role"
                            onChange={handleOnchangeInput}
                        >
                            <MenuItem value={'0'}>Khách hàng</MenuItem>
                            <MenuItem value={'1'}>Quản lý</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleDialog}>Hủy</Button>
                <Button onClick={handleUpdate}>Cập nhật</Button>
            </DialogActions>
        </Dialog>
    );
};

DialogUpdateAccount.propTypes = {
    open: PropTypes.bool.isRequired,
    toggleDialog: PropTypes.func.isRequired,
    accountID: PropTypes.string.isRequired,
    setUpdated: PropTypes.func.isRequired,
    updated: PropTypes.bool.isRequired
};

export default DialogUpdateAccount;
