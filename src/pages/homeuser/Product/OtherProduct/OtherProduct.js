import * as React from 'react';

import './OtherProduct.scss';

import SliderProducts from 'pages/homeuser/MainHome/SliderProducts/SliderProducts';

const OtherProduct = (props) => {
    return (
        <div className="others-container">
            <div className="others-content">
                <SliderProducts title="Others" class="slider-top-none" />
            </div>
        </div>
    );
};

export default OtherProduct;
