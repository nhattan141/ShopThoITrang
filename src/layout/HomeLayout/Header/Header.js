import * as React from 'react';
import { Container, Box, Card, CardMedia, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

import logo from '../../../assets/images/logo.svg';

// ==============================|| MAIN LAYOUT ||============================== //

const Header = () => {
    return (
        <Container sx={{ mt: 2 }}>
            <Box sx={{ width: 1, height: 113, backgroundColor: 'red' }}>
                <Box sx={{ width: 1, height: 59, borderBottom: 1, borderColor: 'grey.500' }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={12}>
                        <SearchIcon
                            sx={{
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}
                        />
                        <Card
                            sx={{
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}
                        >
                            <img src={logo} alt="logo" />
                        </Card>
                        <Stack direction="row" spacing={2}>
                            <Stack
                                direction="row"
                                spacing={0.5}
                                sx={{
                                    '&:hover': {
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                                <PersonOutlineOutlinedIcon />
                                <p>Account</p>
                            </Stack>
                            <Stack
                                direction="row"
                                spacing={0.5}
                                sx={{
                                    '&:hover': {
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                                <LocalMallOutlinedIcon />
                                <p>Shopping</p>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
};

export default Header;
