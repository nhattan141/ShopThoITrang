import * as React from 'react';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

import './TopMain.scss';
import Header from '../Header/Header';
import TopMainImg from '../../../assets/images/TopMainImg.png';

const TopMain = () => {
    return (
        <div className="topmain-container">
            <div className="topmain-content">
                <Header />
                <div className="topmain-product">
                    <div className="topmain-left">
                        <div className="title">Collections</div>
                        <div className="description">You can explore and shop many different collection from various barands here</div>
                        <div className="button">
                            <button>
                                <LocalMallOutlinedIcon />
                                Shop Now
                            </button>
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
