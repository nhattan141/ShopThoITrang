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
import PostAddIcon from '@mui/icons-material/PostAdd';

// project import
import ComponentSkeleton from './ComponentSkeleton';
import DialogUpdateProduct from './DialogUpdateProduct';
import DialogAddProduct from './DialogAddProduct';
// import DialogOrderDetail from './DialogOrderDetail';

import { handleGetAllProduct, handleDeleteProductApi } from 'services/productService';

// ===============================|| COMPONENT - PRODUCTS ||=============================== //

const Products = () => {
    const [productArr, setProductArr] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [openAdd, setOpenAdd] = React.useState(false);
    const [productID, setId] = React.useState('');
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

    const handleGetAllProductAdmin = async () => {
        try {
            const res = await handleGetAllProduct();
            if (res && res.status === 200) {
                setProductArr(res.data.reverse());
            }
        } catch (e) {
            console.log(e);
            toast.error('Có lỗi xảy ra');
        }
    };

    React.useEffect(() => {
        handleGetAllProductAdmin();
    }, [updated]);

    const handleDeleteProduct = async (productID) => {
        try {
            const res = await handleDeleteProductApi(productID);
            if (res && res.status === 200) {
                setUpdated(!updated);
                toast.success('Đã xóa tài khoản thành công');
            } else {
                toast.error('Có lỗi, không xóa được sản phẩm');
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <ComponentSkeleton>
            <Button sx={{ mb: '20px' }} color="primary" variant="outlined" startIcon={<PostAddIcon />} onClick={openPopupAdd}>
                Thêm mới sản phẩm
            </Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Mã sản phẩm</TableCell>
                            <TableCell align="right">Tên sản phẩm</TableCell>
                            <TableCell align="left">Hình ảnh</TableCell>
                            <TableCell align="right">Mô tả</TableCell>
                            <TableCell align="right">Số lượng</TableCell>
                            <TableCell align="right">Đơn giá</TableCell>
                            <TableCell align="right">Tương tác</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productArr.map((row, index) => (
                            <TableRow hover key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row._id}
                                </TableCell>
                                <TableCell align="right">{row.Name}</TableCell>
                                <TableCell align="right">
                                    <Avatar variant="rounded" alt={row.Name} src={row.Image} />
                                </TableCell>
                                <TableCell align="right">{row.Description}</TableCell>
                                <TableCell align="right">{row.Quantity}</TableCell>
                                <TableCell align="right">{new Intl.NumberFormat().format(row.Price)}&nbsp;VNĐ</TableCell>
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
                                            onClick={() => handleDeleteProduct(row._id)}
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
            <DialogUpdateProduct open={open} toggleDialog={toggleDialog} productID={productID} setUpdated={setUpdated} updated={updated} />
            <DialogAddProduct openAdd={openAdd} toggleDialogAdd={toggleDialogAdd} setUpdated={setUpdated} updated={updated} />
        </ComponentSkeleton>
    );
};

export default Products;
