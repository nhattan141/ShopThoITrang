import * as React from 'react';
import { NavLink } from 'react-router-dom';

//import component mui
import { Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Navigation = () => {
    const Item = styled(Paper)(({ theme }) => ({
        height: '24px',
        with: '200px',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: theme.palette.text.secondary
    }));

    return (
        <div className="nav-container">
            <div className="nav-content">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={3} md>
                            <Item>
                                <NavLink to="/jew" className={(navData) => (navData.isActive ? 'link_active' : 'link')}>
                                    Jewelry & Accessories
                                </NavLink>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={3} md>
                            <Item>
                                <NavLink to="/clothing" className={(navData) => (navData.isActive ? 'link_active' : 'link')}>
                                    Clothing & Shoes
                                </NavLink>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={3} md>
                            <Item>
                                <NavLink to="/living" className={(navData) => (navData.isActive ? 'link_active' : 'link')}>
                                    Home & Living
                                </NavLink>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={3} md>
                            <Item>
                                <NavLink to="/wedding" className={(navData) => (navData.isActive ? 'link_active' : 'link')}>
                                    Wedding & Party
                                </NavLink>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={3} md>
                            <Item>
                                <NavLink to="/toys" className={(navData) => (navData.isActive ? 'link_active' : 'link')}>
                                    Toys & Entertainment
                                </NavLink>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={3} md>
                            <Item>
                                <NavLink to="/art" className={(navData) => (navData.isActive ? 'link_active' : 'link')}>
                                    Art & Collectibles
                                </NavLink>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={3} md>
                            <Item>
                                <NavLink to="/craft" className={(navData) => (navData.isActive ? 'link_active' : 'link')}>
                                    Craft Supplies & Tools
                                </NavLink>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default Navigation;
