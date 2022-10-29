import * as React from 'react';
import brand1 from '../../../assets/images/brand/brand-1.svg';
import brand2 from '../../../assets/images/brand/brand-2.svg';
import brand3 from '../../../assets/images/brand/brand-3.svg';
import brand4 from '../../../assets/images/brand/brand-4.svg';
import brand5 from '../../../assets/images/brand/brand-5.svg';

import './Brand.scss';

const Brand = () => {
    return (
        <div className="brand-container">
            <div className="brand-content">
                <div className="brand-logo">
                    <img src={brand1} alt="brandlogo" />
                </div>
                <div className="brand-logo">
                    <img src={brand2} alt="brandlogo" />
                </div>
                <div className="brand-logo">
                    <img src={brand3} alt="brandlogo" />
                </div>
                <div className="brand-logo">
                    <img src={brand4} alt="brandlogo" />
                </div>
                <div className="brand-logo">
                    <img src={brand5} alt="brandlogo" />
                </div>
            </div>
        </div>
    );
};

export default Brand;
