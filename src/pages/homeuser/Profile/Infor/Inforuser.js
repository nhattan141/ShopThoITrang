import * as React from 'react';

import './Infor.scss';

import avatar1 from 'assets/images/insta/i0121.png';

//import mui component
import { Box, TextField, MenuItem, Grid, Paper, Stack, Button, Avatar, styled } from '@mui/material';
import { deepOrange, green } from '@mui/material/colors';

//import icon mui
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Inforuser = () => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(0),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }));

    const currencies = [
        {
            value: '1',
            label: 'Male'
        },
        {
            value: '2',
            label: 'Female'
        }
    ];

    const [information, setInformation] = React.useState({
        name: 'Nhat Tan',
        address: 'HCM',
        phone: '09189231',
        sex: 1
    });

    const handleOnchangeInput = (prop) => (event) => {
        setInformation({ ...information, [prop]: event.target.value });
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
            <Grid item xs={12} md={6}>
                <Item>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3}
                        sx={{
                            height: '100%'
                        }}
                    >
                        <Avatar
                            alt="UserAvatar"
                            src={avatar1}
                            sx={{
                                width: '300px',
                                height: '300px',
                                borderRadius: '10px'
                            }}
                        />
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
                            startIcon={<PhotoCamera />}
                            component="label"
                        >
                            UPLOAD
                            <input hidden accept="image/*" type="file" />
                        </Button>
                    </Stack>
                </Item>
            </Grid>
            <Grid item xs={12} md={6}>
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
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        label="User name"
                        value={information.name}
                        onChange={handleOnchangeInput('name')}
                        helperText=""
                        color="secondary"
                    />
                    <TextField
                        label="Address"
                        value={information.address}
                        onChange={handleOnchangeInput('address')}
                        helperText=""
                        color="secondary"
                    />
                    <TextField
                        label="Phone"
                        value={information.phone}
                        onChange={handleOnchangeInput('phone')}
                        helperText=""
                        color="secondary"
                    />
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Sex"
                        value={information.sex}
                        color="secondary"
                        onChange={handleOnchangeInput('sex')}
                        helperText=""
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
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

export default Inforuser;
