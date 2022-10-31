import * as React from 'react';

import './HotCategory.scss';
import hot1 from '../../../assets/images/hot/image-category-1.png';
import hot2 from '../../../assets/images/hot/image-category-2.png';
import hot3 from '../../../assets/images/hot/image-category-3.png';
import hot4 from '../../../assets/images/hot/image-category-4.png';
import hot5 from '../../../assets/images/hot/image-category-5.png';

const HotCategory = () => {
    return (
        <div className="hot-contaiter">
            <div className="hot-content">
                <div className="hot-title">Explore new and popular styles</div>
                <div className="right-content">
                    <div className="hot-img-left">
                        <img src={hot1} alt="hotcategory" />
                    </div>
                    <div className="hot-img-right">
                        <div className="hot-img">
                            <img src={hot2} alt="hotcategory" />
                        </div>
                        <div className="hot-img">
                            <img src={hot3} alt="hotcategory" />
                        </div>
                        <div className="hot-img">
                            <img src={hot4} alt="hotcategory" />
                        </div>
                        <div className="hot-img">
                            <img src={hot5} alt="hotcategory" />
                            <div className="others-container">
                                <div className="others-content">
                                    <p>Jacket</p>
                                    <p>103 Products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotCategory;
