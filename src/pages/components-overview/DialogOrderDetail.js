// import { useState } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import MenuItem from '@mui/material/MenuItem';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';

// import PropTypes from 'prop-types';

// const DialogOrderDetail = (props) => {
//     console.log('prop: ', props);

//     const [order, setOrder] = useState({
//         cart_id: '',
//         pro_name: '',
//         size: '',
//         quantity: '',
//         price: '',
//         stt: '',
//         total: ''
//     });

//     const hanldeOnChangeInput = (event) => {
//         let orderCopy = { ...order };
//         orderCopy.stt = event.target.value;
//         setOrder(orderCopy);
//     };

//     const status = [
//         {
//             value: '0',
//             label: 'Completed'
//         },
//         {
//             value: '1',
//             label: 'Delivered'
//         },
//         {
//             value: '2',
//             label: 'Prepared'
//         }
//     ];

//     return (
//         <Dialog open={props.open} onClose={props.toggleDialogDetail}>
//             <DialogTitle>View Order Detail {props.checked}</DialogTitle>
//             <DialogContent>
//                 <Box
//                     component="form"
//                     sx={{
//                         '& .MuiTextField-root': { m: 1, width: '40ch' }
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <TextField disabled id="outlined-required" label="Image" value={order.img} />
//                     <TextField disabled id="outlined-required" label="Product Name" value={order.pro_name} />
//                     <TextField disabled id="outlined-required" label="Size" value={order.size} />
//                     <TextField disabled id="outlined-required" label="Quantity" value={order.quantity} />
//                     <TextField disabled id="outlined-required" label="Price" value={order.price} />
//                     <TextField disabled id="outlined-required" label="Total" value={order.total} />
//                     {/* <TextField
//                         required
//                         id="outlined-select-currency"
//                         select
//                         label="Status"
//                         value={order.stt}
//                         onChange={(event) => hanldeOnChangeInput(event)}
//                     >
//                         {status.map((option) => (
//                             <MenuItem key={option.value} value={option.value}>
//                                 {option.label}
//                             </MenuItem>
//                         ))}
//                     </TextField> */}
//                     {props.checked.length !== 1 && <InputLabel error>Please chose 1 and only 1 item what you want to edit</InputLabel>}
//                 </Box>
//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={props.toggleDialogDetail}>Cancel</Button>
//             </DialogActions>
//         </Dialog>
//     );
// };

// DialogOrderDetail.propTypes = {
//     open: PropTypes.bool.isRequired,
//     toggleDialog: PropTypes.func.isRequired,
//     checked: PropTypes.array.isRequired
// };

// export default DialogOrderDetail;
