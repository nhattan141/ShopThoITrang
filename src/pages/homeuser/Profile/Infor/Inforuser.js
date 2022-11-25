import * as React from 'react';

import './Infor.scss';

//import custom hooks
import useToken from 'HOC/useToken';
import { toast } from 'react-toastify';

//import mui component
import { Box, TextField, Grid, Paper, Stack, Button, Avatar, styled } from '@mui/material';

//import icon mui
import PhotoCamera from '@mui/icons-material/PhotoCamera';

//import api
import { handleUpdateAccountApi } from 'services/accountService';

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

    const { tokenApi } = useToken();

    if (tokenApi) {
        var { user } = tokenApi;
    }

    const [information, setInformation] = React.useState({
        email: user.email,
        name: user.name,
        address: user.address,
        phone: user.phone,
        avatar: '',
        preview: user.avatar
    });

    const handleOnchangeInput = (prop) => (event) => {
        setInformation({ ...information, [prop]: event.target.value });
    };

    const handleUpdateAccount = async () => {
        try {
            const res = await handleUpdateAccountApi(user._id, information.name, information.address, information.phone);
            if (res && res.status === 200) {
                toast.success('Cập nhật thành công, hãy đăng nhập lại để kiểm tra');
            }
        } catch (e) {
            console.log(e);
            toast.error('Có lỗi xảy ra');
        }
    };

    const handleCancel = () => {
        setInformation({
            email: user.email,
            name: user.name,
            address: user.address,
            phone: user.phone,
            avatar: '',
            preview: user.avatar
        });
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
            <Grid item xs={12} md>
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
                            src={information.preview}
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
                            Tải hình
                            <input hidden accept="image/*" type="file" />
                        </Button>
                    </Stack>
                </Item>
            </Grid>
            <Grid item xs={12} md>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '45ch' },
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
                        label="Email"
                        disabled
                        value={information.email}
                        onChange={handleOnchangeInput('email')}
                        helperText=""
                        color="secondary"
                    />
                    <TextField
                        label="Tên"
                        value={information.name}
                        onChange={handleOnchangeInput('name')}
                        helperText=""
                        color="secondary"
                    />
                    <TextField
                        label="Địa chỉ"
                        value={information.address}
                        onChange={handleOnchangeInput('address')}
                        helperText=""
                        color="secondary"
                    />
                    <TextField
                        label="Số điện thoại"
                        value={information.phone}
                        onChange={handleOnchangeInput('phone')}
                        helperText=""
                        color="secondary"
                    />
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
                            onClick={handleUpdateAccount}
                        >
                            Lưu
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
                            onClick={handleCancel}
                        >
                            Hủy
                        </Button>
                    </Stack>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Inforuser;
