import * as React from 'react';

import './Filter.scss';

import { Grid, Paper, styled } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Filter = () => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: '#000000',
        borderBottom: '1px solid #a5a5a5'
    }));

    const [openDetails, setOpenDetails] = React.useState(true);

    const toggleDetails = () => {
        setOpenDetails(!openDetails);
    };

    return (
        <div className="filter-container">
            <div className="filter-content">
                <Grid container spacing={2}>
                    <Grid item xs={4} md={12}>
                        <Item>
                            <div className="filter-title">BỘ LỌC SẢN PHẨM</div>
                        </Item>
                    </Grid>
                    <Grid item xs={4} md={12}>
                        <Item>
                            <div className="filter-list">
                                <div className="filter-list-summary">
                                    {openDetails === true ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    <button onClick={toggleDetails}>Khoảng giá</button>
                                </div>
                                <div className={openDetails === true ? 'filter-list-detail' : 'filter-list-detail-close'}>
                                    <div className="filter-list-checkbox">
                                        <input type="checkbox" id="650" name="650" value="650" />
                                        <label htmlFor="650">&lt;650k</label>
                                    </div>
                                    <div className="filter-list-checkbox">
                                        <input type="checkbox" id="850" name="850" value="850" />
                                        <label htmlFor="850">650k-850k</label>
                                    </div>
                                    <div className="filter-list-checkbox">
                                        <input type="checkbox" id="990" name="990" value="990" />
                                        <label htmlFor="990">850k-990k</label>
                                    </div>
                                    <div className="filter-list-checkbox">
                                        <input type="checkbox" id="1500" name="1500" value="1500" />
                                        <label htmlFor="1500">990k-1500k</label>
                                    </div>
                                    <div className="filter-list-checkbox">
                                        <input type="checkbox" id="max" name="max" value="max" />
                                        <label htmlFor="max">&gt;1500k</label>
                                    </div>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Filter;
