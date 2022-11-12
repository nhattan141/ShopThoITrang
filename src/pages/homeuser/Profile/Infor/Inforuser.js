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

    const handleOnchangeInput = (e, id) => {
        let informationCopy = { ...information };
        informationCopy[id] = e.target.value;
        setInformation(informationCopy);
    };

    return (
        <div className="inforuser-container">
            <div className="inforuser-content">
                <Grid
                    container
                    spacing={6}
                    sx={{
                        height: '100%',
                        mt: 0
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
                                            backgroundColor: '#2196f3',
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
                        <Item>
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
                                    onChange={(e) => handleOnchangeInput(e, 'name')}
                                    helperText=""
                                    color="secondary"
                                />
                                <TextField
                                    label="Address"
                                    value={information.address}
                                    onChange={(e) => handleOnchangeInput(e, 'address')}
                                    helperText=""
                                    color="secondary"
                                />
                                <TextField
                                    label="Phone"
                                    value={information.phone}
                                    onChange={(e) => handleOnchangeInput(e, 'phone')}
                                    helperText=""
                                    color="secondary"
                                />
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="Sex"
                                    value={information.sex}
                                    color="secondary"
                                    onChange={(e) => handleOnchangeInput(e, 'sex')}
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
                                                backgroundColor: '#0fc70f',
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
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Inforuser;
