import * as React from 'react';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

import './TopMain.scss';
import TopMainImg from '../../../assets/images/TopMainImg.png';

const TopMain = () => {
    const navigate = useNavigate();

    const handleNaToShop = () => {
        navigate('/jew');
    };

    return (
        <div className="topmain-container">
            <div className="topmain-content">
                <div className="topmain-product">
                    <div className="topmain-left">
                        <div className="title">Bộ sưu tập</div>
                        <div className="description">Bạn có thể khám phá và mua sắm các bộ sưu tập của các thương hiệu khác nhau ở đây</div>
                        <div className="button">
                            <Button variant="contained" onClick={handleNaToShop}>
                                <LocalMallOutlinedIcon />
                                Mua ngay
                            </Button>
                        </div>
                    </div>
                    <div className="topmain-right">
                        <img src={TopMainImg} alt="TopMainImg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopMain;
