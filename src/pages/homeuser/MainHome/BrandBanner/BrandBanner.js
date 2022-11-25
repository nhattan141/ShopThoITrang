import * as React from 'react';

import './BrandBanner.scss';
import zara2 from '../../../../assets/images/banner/Zara_Logo_2.png';

const BrandBanner = () => {
    return (
        <div className="banner-container">
            <div className="banner-content">
                <div className="logo-2-container">
                    <div className="logo-2-content">
                        <div className="banner-logo">
                            <img src={zara2} alt="zara2" />
                        </div>
                        <div className="banner-title">
                            Bộ sưu tập trang phục dạ hội mới được cung cấp độc quyền tại cửa hàng Giorgio Armani đã mở cửa trở lại ở Los
                            Angeles.
                        </div>
                        <div className="banner-button">
                            <button>Xem bộ sưu tập</button>
                        </div>
                    </div>
                </div>
                <div className="logo-1-container">
                    <img src={zara2} alt="zara" />
                </div>
            </div>
        </div>
    );
};

export default BrandBanner;
