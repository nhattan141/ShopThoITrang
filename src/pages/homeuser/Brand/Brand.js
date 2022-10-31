import * as React from 'react';
import brand1 from '../../../assets/images/brand/brand-1.svg';
import brand2 from '../../../assets/images/brand/brand-2.svg';
import brand3 from '../../../assets/images/brand/brand-3.svg';
import brand4 from '../../../assets/images/brand/brand-4.svg';
import brand5 from '../../../assets/images/brand/brand-5.svg';

import './Brand.scss';

//import component mui
import { Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Brand = () => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: 'auto',
        height: '70px',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        border: '1px solid',
        textAlign: 'center',
        alignItems: 'center',
        color: theme.palette.text.secondary
    }));

    return (
        <div className="brand-container">
            <div className="brand-content">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={2.4}>
                            <Item>
                                <div className="brand-logo">
                                    <img src={brand1} alt="brandlogo" />
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2.4}>
                            <Item>
                                <div className="brand-logo">
                                    <img src={brand2} alt="brandlogo" />
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2.4}>
                            <Item>
                                <div className="brand-logo">
                                    <img src={brand3} alt="brandlogo" />
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2.4}>
                            <Item>
                                <div className="brand-logo">
                                    <img src={brand4} alt="brandlogo" />
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2.4}>
                            <Item>
                                <div className="brand-logo">
                                    <img src={brand5} alt="brandlogo" />
                                </div>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default Brand;
