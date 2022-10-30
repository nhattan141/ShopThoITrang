import * as React from 'react';

import './NewsLetter.scss';
import InstagramIcon from '@mui/icons-material/Instagram';

import insta1 from '../../../assets/images/insta/i031.png';
import insta2 from '../../../assets/images/insta/i0111.png';
import insta3 from '../../../assets/images/insta/i071.png';
import insta4 from '../../../assets/images/insta/i0121.png';
import insta5 from '../../../assets/images/insta/i0141.png';
import insta6 from '../../../assets/images/insta/i021.png';

const NewsLetter = () => {
    return (
        <div className="news-container">
            <div className="news-content">
                <div className="news-insta">
                    <div className="insta-title">Follow Products And Discounts On Instagram</div>
                    <div className="insta-group">
                        <div className="insta-img">
                            <img src={insta1} alt="insta" />
                            <div className="insta-logo">
                                <InstagramIcon fontSize="large" />
                            </div>
                        </div>
                        <div className="insta-img">
                            <img src={insta2} alt="insta" />
                            <div className="insta-logo">
                                <InstagramIcon fontSize="large" />
                            </div>
                        </div>
                        <div className="insta-img">
                            <img src={insta3} alt="insta" />
                            <div className="insta-logo">
                                <InstagramIcon fontSize="large" />
                            </div>
                        </div>
                        <div className="insta-img">
                            <img src={insta4} alt="insta" />
                            <div className="insta-logo">
                                <InstagramIcon fontSize="large" />
                            </div>
                        </div>
                        <div className="insta-img">
                            <img src={insta5} alt="insta" />
                            <div className="insta-logo">
                                <InstagramIcon fontSize="large" />
                            </div>
                        </div>
                        <div className="insta-img">
                            <img src={insta6} alt="insta" />
                            <div className="insta-logo">
                                <InstagramIcon fontSize="large" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="news-letter">
                    <div className="letter-title">Or Subscribe To The Newsletter</div>
                    <div className="letter-form">
                        <div className="form-input">
                            <input type="text" placeholder="Email Adress..." />
                        </div>
                        <div className="form-btn">
                            <button>SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
