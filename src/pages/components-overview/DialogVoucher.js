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

// const DialogVoucher = (props) => {
//     console.log('prop: ', props);

//     const [order, setOrder] = useState({
//         voucheroucher_id: '',
//         dateStart: '',
//         dateEnd: '',
//         value: ''
//     });

//     const hanldeOnChangeInput = (event) => {
//         let orderCopy = { ...order };
//         orderCopy.stt = event.target.value;
//         setOrder(orderCopy);
//     };

//     const status = [
//         {
//             value: '0',
//             label: 'Enable'
//         },
//         {
//             value: '1',
//             label: 'Disable'
//         },
//     ];

//     return (
//         <Dialog open={props.open} onClose={props.toggleDialog}>
//             <DialogTitle> New Voucher {props.action === 'add' ? 'Add new Category ' : 'Edit Category ' + props.checked}</DialogTitle>
//             <DialogContent>
//                 <Box
//                     component="form"
//                     sx={{
//                         '& .MuiTextField-root': { m: 1, width: '40ch' }
//                     }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <TextField disabled id="outlined-required" label="Voucher ID" value={order.voucheroucher_id} />
//                     <TextField enabled id="outlined-required" label="Date Start" value={order.dateStart} />
//                     <TextField enabled id="outlined-required" label="Date End" value={order.dateEnd} />
//                     <TextField enabled id="outlined-required" label="Value" value={order.value} />
//                     <TextField
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
//                     </TextField>
//                     {props.checked.length !== 1 && <InputLabel error>Please chose 1 and only 1 item what you want to edit</InputLabel>}
//                 </Box>
//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={props.toggleDialog}>Cancel</Button>
//                 <Button onClick={props.toggleDialog}>{props.action === 'add' ? 'Add new' : 'Update'}</Button>
//             </DialogActions>
//         </Dialog>
//     );
// };

// DialogVoucher.propTypes = {
//     open: PropTypes.bool.isRequired,
//     toggleDialog: PropTypes.func.isRequired,
//     checked: PropTypes.array.isRequired
// };

// export default DialogVoucher;

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

const DialogCategory = (props) => {
    console.log('prop: ', props);

    const [category, setCategory] = useState({
        voucher_id: '',
        dateStart: '',
        dateEnd: '',
        value: ''
    });

    const hanldeOnChangeInput = (event, id) => {
        let categoryCopy = { ...category };
        categoryCopy[id] = event.target.value;
        setCategory(categoryCopy);
    };

    return (
        <Dialog open={props.open} onClose={props.toggleDialog}>
            <DialogTitle>{props.action === 'add' ? 'Add new Voucher ' : 'Edit Voucher ' + props.checked}</DialogTitle>
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
                        label="ID"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={category.voucher_id}
                        onChange={(event) => hanldeOnChangeInput(event, 'voucher_id')}
                        defaultValue={props.action === 'add' ? '' : 'Edit Voucher'}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Date Start"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={category.dateStart}
                        onChange={(event) => hanldeOnChangeInput(event, 'dateStart')}
                        defaultValue={props.action === 'add' ? '' : 'Edit Voucher'}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Date End"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={category.dateEnd}
                        onChange={(event) => hanldeOnChangeInput(event, 'dateEnd')}
                        defaultValue={props.action === 'add' ? '' : 'Edit Voucher'}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Value"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={category.value}
                        onChange={(event) => hanldeOnChangeInput(event, 'value')}
                        defaultValue={props.action === 'add' ? '' : 'Edit Voucher'}
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

DialogCategory.propTypes = {
    open: PropTypes.bool.isRequired,
    toggleDialog: PropTypes.func.isRequired,
    checked: PropTypes.array.isRequired,
    action: PropTypes.string.isRequired
};

export default DialogCategory;
