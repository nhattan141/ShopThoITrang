import * as React from 'react';
import { toast } from 'react-toastify';

// material-ui
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import DialogUpdateAccount from './DialogUpdateAccount';
import DialogAddAccount from './DialogAddAccount';
// import DialogOrderDetail from './DialogOrderDetail';

import { handleGetAllAccount, handleDeleteAccountApi } from 'services/accountService';

// ===============================|| COMPONENT - PRODUCTS ||=============================== //

const Account = () => {
    const [accountArr, setAccountArr] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [openAdd, setOpenAdd] = React.useState(false);
    const [accountID, setId] = React.useState('');
    const [updated, setUpdated] = React.useState(false);

    const toggleDialog = () => {
        setOpen(!open);
    };
    const toggleDialogAdd = () => {
        setOpenAdd(!openAdd);
    };

    const openPopupUpdate = (id) => {
        setOpen(!open);
        setId(id);
    };

    const openPopupAdd = () => {
        setOpenAdd(!open);
    };

    const handleGetAllOrder = async () => {
        try {
            const res = await handleGetAllAccount();
            if (res && res.status === 200) {
                setAccountArr(res.data.reverse());
            }
        } catch (e) {
            console.log(e);
            toast.error('Có lỗi xảy ra');
        }
    };

    React.useEffect(() => {
        handleGetAllOrder();
    }, [updated]);

    const handleDeleteAccount = async (accountID) => {
        try {
            const res = await handleDeleteAccountApi(accountID);
            if (res && res.status === 200) {
                setUpdated(!updated);
                toast.success('Đã xóa tài khoản thành công');
            } else {
                toast.error('Có lỗi, không xóa được tài khoản');
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <ComponentSkeleton>
            <Button sx={{ mb: '20px' }} color="primary" variant="outlined" startIcon={<PersonAddIcon />} onClick={openPopupAdd}>
                Thêm mới tài khoản
            </Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell align="right">Tên</TableCell>
                            <TableCell align="left">Hình đại diện</TableCell>
                            <TableCell align="right">Số điện thoại</TableCell>
                            <TableCell align="right">Địa chỉ</TableCell>
                            <TableCell align="right">Quyền</TableCell>
                            <TableCell align="right">Tương tác</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {accountArr.map((row, index) => (
                            <TableRow hover key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.email}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">
                                    <Avatar alt={row.name} src={row.avatar} />
                                </TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.role === '1' ? 'Quản lý' : 'Khách hàng'}</TableCell>
                                <TableCell align="right">
                                    <Stack direction="column" spacing={2}>
                                        <Button
                                            size="small"
                                            color="success"
                                            variant="outlined"
                                            startIcon={<ModeEditIcon />}
                                            onClick={() => openPopupUpdate(row._id)}
                                        >
                                            Sửa
                                        </Button>
                                        <Button
                                            size="small"
                                            color="error"
                                            variant="outlined"
                                            startIcon={<DeleteIcon />}
                                            onClick={() => handleDeleteAccount(row._id)}
                                        >
                                            Xóa
                                        </Button>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <DialogUpdateAccount open={open} toggleDialog={toggleDialog} accountID={accountID} setUpdated={setUpdated} updated={updated} />
            <DialogAddAccount openAdd={openAdd} toggleDialogAdd={toggleDialogAdd} setUpdated={setUpdated} updated={updated} />
        </ComponentSkeleton>
    );
};

export default Account;
