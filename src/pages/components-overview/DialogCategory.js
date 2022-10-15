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
        name: ''
    });

    const hanldeOnChangeInput = (event, id) => {
        let categoryCopy = { ...category };
        categoryCopy[id] = event.target.value;
        setCategory(categoryCopy);
    };

    return (
        <Dialog open={props.open} onClose={props.toggleDialog}>
            <DialogTitle>{props.action === 'add' ? 'Add new Category ' : 'Edit Category ' + props.checked}</DialogTitle>
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
                        label="Name"
                        disabled={props.checked.length !== 1 && props.action === 'edit' ? true : false}
                        value={category.name}
                        onChange={(event) => hanldeOnChangeInput(event, 'name')}
                        defaultValue={props.action === 'add' ? '' : 'Edit category'}
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
