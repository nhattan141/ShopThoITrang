import * as React from 'react';

//import mui component
import { Grid, Box, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Stack, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import './ChangePass.scss';

const ChangePass = () => {
    const [pass, setPass] = React.useState({
        oldPass: '',
        newPass: '',
        confirmPass: '',
        showPassword: false
    });

    const hanldeOnChangeInput = (prop) => (event) => {
        setPass({ ...pass, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setPass({
            ...pass,
            showPassword: !pass.showPassword
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid
            container
            spacing={0}
            sx={{
                border: '1px solid rgba(0, 0, 0, 0.25)',
                height: '100%',
                mt: 0,
                borderRadius: '5px'
            }}
        >
            <Grid item xs={12}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '50ch' },
                        p: 1,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                    autoComplete="off"
                >
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Old Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={pass.showPassword ? 'text' : 'password'}
                            value={pass.oldPass}
                            onChange={hanldeOnChangeInput('oldPass')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {pass.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={pass.showPassword ? 'text' : 'password'}
                            value={pass.newPass}
                            onChange={hanldeOnChangeInput('newPass')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {pass.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={pass.showPassword ? 'text' : 'password'}
                            value={pass.confirmPass}
                            onChange={hanldeOnChangeInput('confirmPass')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {pass.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={3}>
                        <Button
                            sx={{
                                backgroundColor: '#face8d',
                                color: '#333',
                                transition: '0.5s',
                                '&:hover': {
                                    backgroundColor: '#FF8975',
                                    color: '#f7f7f7'
                                }
                            }}
                            variant="contained"
                        >
                            Save
                        </Button>
                        <Button
                            sx={{
                                color: '#c0c0c0',
                                transition: '0.5s',
                                '&:hover': {
                                    color: '#333'
                                }
                            }}
                            variant="text"
                        >
                            Cancel
                        </Button>
                    </Stack>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ChangePass;
