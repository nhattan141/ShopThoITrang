import * as React from 'react';
import { Link } from 'react-router-dom';

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
                                <Link to="/jew" className="link">
                                    Jewelry & Accessories
                                </Link>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={3} md>
                            <Item>
                                <Link to="/clothing" className="link">
                                    Clothing & Shoes
                                </Link>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={3} md>
                            <Item>
                                <Link to="/living" className="link">
                                    Home & Living
                                </Link>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={3} md>
                            <Item>
                                <Link to="/wedding" className="link">
                                    Wedding & Party
                                </Link>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={3} md>
                            <Item>
                                <Link to="/toys" className="link">
                                    Toys & Entertainment
                                </Link>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={3} md>
                            <Item>
                                <Link to="/art" className="link">
                                    Art & Collectibles
                                </Link>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={3} md>
                            <Item>
                                <Link to="/craft" className="link">
                                    Craft Supplies & Tools
                                </Link>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    );
};

export default Navigation;
