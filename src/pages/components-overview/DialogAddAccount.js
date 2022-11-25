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
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import PropTypes from 'prop-types';

import { handleAddAccountApi } from 'services/accountService';

const DialogAddAccount = (props) => {
    const { setUpdated, openAdd, toggleDialogAdd, updated } = props;
    const [information, setInformation] = React.useState({
        email: '',
        password: '',
        name: '',
        address: '',
        phone: '',
        role: ''
    });

    const handleOnchangeInput = (prop) => (event) => {
        setInformation({ ...information, [prop]: event.target.value });
    };

    const handleAdd = async () => {
        try {
            const res = await handleAddAccountApi(
                information.email,
                information.password,
                information.name,
                information.address,
                information.phone,
                information.role
            );
            if (res && res.status === 200) {
                toast.success('Tạo tài khoản thành công');
                setUpdated(!updated);
                toggleDialogAdd();
            }
        } catch (e) {
            console.log(e);
            toast.error('Có lỗi xảy ra');
        }
    };

    return (
        <Dialog open={openAdd} onClose={toggleDialogAdd}>
            <DialogTitle>Thêm mới tài khoản </DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '40ch' },
                        p: 1
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField label="Email" value={information.email} onChange={handleOnchangeInput('email')} color="secondary" />
                    <TextField
                        label="Mật khẩu"
                        type="password"
                        value={information.password}
                        onChange={handleOnchangeInput('password')}
                        olor="secondary"
                    />
                    <TextField label="Tên" value={information.name} onChange={handleOnchangeInput('name')} color="secondary" />
                    <TextField label="Địa chỉ" value={information.address} onChange={handleOnchangeInput('address')} color="secondary" />
                    <TextField label="Số điện thoại" value={information.phone} onChange={handleOnchangeInput('phone')} color="secondary" />
                    <FormControl sx={{ m: 1, width: '40ch' }}>
                        <InputLabel id="demo-simple-select-label">Quyền</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={information.role}
                            label="Role"
                            onChange={handleOnchangeInput('role')}
                        >
                            <MenuItem value={'0'}>Khách hàng</MenuItem>
                            <MenuItem value={'1'}>Quản lý</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleDialogAdd}>Hủy</Button>
                <Button onClick={handleAdd}>Thêm mới</Button>
            </DialogActions>
        </Dialog>
    );
};

DialogAddAccount.propTypes = {
    openAdd: PropTypes.bool.isRequired,
    toggleDialogAdd: PropTypes.func.isRequired,
    setUpdated: PropTypes.func.isRequired,
    updated: PropTypes.bool.isRequired
};

export default DialogAddAccount;
