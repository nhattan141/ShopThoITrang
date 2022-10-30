import * as React from 'react';
import Slider from 'react-slick';

import './SliderProducts.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// icon mui
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

// image
import p1 from '../../../assets/images/card/p1.png';
import p2 from '../../../assets/images/card/p2.png';
import p3 from '../../../assets/images/card/p3.png';
import p4 from '../../../assets/images/card/p4.png';
import p5 from '../../../assets/images/card/p5.png';
import p6 from '../../../assets/images/card/p6.png';
import p7 from '../../../assets/images/card/p7.png';
import p8 from '../../../assets/images/card/p8.png';

const SliderProducts = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    const openTab = (event, tab) => {
        let sliderTabcontents = document.getElementsByClassName('slider-tabcontent');
        for (let i = 0; i < sliderTabcontents.length; i++) {
            sliderTabcontents[i].style.display = 'none';
        }

        let sliderTablinks = document.getElementsByClassName('slider-tablinks');
        for (let i = 0; i < sliderTablinks.length; i++) {
            sliderTablinks[i].className = sliderTablinks[i].className.replace(' active', '');
        }

        document.getElementById(tab).style.display = 'block';
        event.currentTarget.className += ' active';
    };

    return (
        <div className="slider-container">
            <div className="slider-content">
                <div className="slider-title">Best Sellers</div>
                <div className="slider-top">
                    <div className="tabs">
                        <button className="slider-tablinks active" onClick={(event) => openTab(event, 'slider-all')}>
                            All Products
                        </button>
                        <button className="slider-tablinks" onClick={(event) => openTab(event, 'slider-tshirt')}>
                            T-Shirt
                        </button>
                        <button className="slider-tablinks" onClick={(event) => openTab(event, 'slider-hoodies')}>
                            Hoodies
                        </button>
                        <button className="slider-tablinks" onClick={(event) => openTab(event, 'slider-jacket')}>
                            Jacket
                        </button>
                    </div>
                    <div className="show">
                        <p>Show All</p>
                    </div>
                </div>
                <div className="products">
                    <div className="slider-tabcontent tab-active" id="slider-all">
                        <div className="list-products">
                            <Slider {...settings}>
                                <div className="card-product">
                                    <div className="img-product">
                                        <img src={p1} alt="card" />
                                        <div className="access-product">
                                            <div className="action-product">
                                                <div className="action-product-left">
                                                    <FavoriteBorderOutlinedIcon />
                                                    <SearchOutlinedIcon />
                                                </div>
                                                <div className="action-product-right">
                                                    <ShoppingBagOutlinedIcon />
                                                    Shop Now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="title-product">Adicolor Classics Joggers</div>
                                    <div className="bottom-product">
                                        <div className="left-bot">Dress</div>
                                        <div className="right-bot">$63.85</div>
                                    </div>
                                </div>
                                <div className="card-product">
                                    <div className="img-product">
                                        <img src={p5} alt="card" />
                                        <div className="ribbon">HOT</div>
                                        <div className="access-product">
                                            <div className="action-product">
                                                <div className="action-product-left">
                                                    <FavoriteBorderOutlinedIcon />
                                                    <SearchOutlinedIcon />
                                                </div>
                                                <div className="action-product-right">
                                                    <ShoppingBagOutlinedIcon />
                                                    Shop Now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="title-product">Basic Dress Green</div>
                                    <div className="bottom-product">
                                        <div className="left-bot">Dress</div>
                                        <div className="right-bot">$236.00</div>
                                    </div>
                                </div>
                                <div className="card-product">
                                    <div className="img-product">
                                        <img src={p2} alt="card" />
                                        <div className="access-product">
                                            <div className="action-product">
                                                <div className="action-product-left">
                                                    <FavoriteBorderOutlinedIcon />
                                                    <SearchOutlinedIcon />
                                                </div>
                                                <div className="action-product-right">
                                                    <ShoppingBagOutlinedIcon />
                                                    Shop Now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="title-product">Nike Sportswear Futura Luxe</div>
                                    <div className="bottom-product">
                                        <div className="left-bot">Bag</div>
                                        <div className="right-bot">$130.00</div>
                                    </div>
                                </div>
                                <div className="card-product">
                                    <div className="img-product">
                                        <img src={p6} alt="card" />
                                        <div className="ribbon sale">SALE</div>
                                        <div className="access-product">
                                            <div className="action-product">
                                                <div className="action-product-left">
                                                    <FavoriteBorderOutlinedIcon />
                                                    <SearchOutlinedIcon />
                                                </div>
                                                <div className="action-product-right">
                                                    <ShoppingBagOutlinedIcon />
                                                    Shop Now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="title-product">Nike Air Zoom Pegasus</div>
                                    <div className="bottom-product">
                                        <div className="left-bot">Shoe</div>
                                        <div className="right-bot">$198.00</div>
                                    </div>
                                </div>
                                <div className="card-product">
                                    <div className="img-product">
                                        <img src={p3} alt="card" />
                                        <div className="access-product">
                                            <div className="action-product">
                                                <div className="action-product-left">
                                                    <FavoriteBorderOutlinedIcon />
                                                    <SearchOutlinedIcon />
                                                </div>
                                                <div className="action-product-right">
                                                    <ShoppingBagOutlinedIcon />
                                                    Shop Now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="title-product">Geometric print Scarf</div>
                                    <div className="bottom-product">
                                        <div className="left-bot">Scarf</div>
                                        <div className="right-bot">$198.00</div>
                                    </div>
                                </div>
                                <div className="card-product">
                                    <div className="img-product">
                                        <img src={p7} alt="card" />
                                        <div className="access-product">
                                            <div className="action-product">
                                                <div className="action-product-left">
                                                    <FavoriteBorderOutlinedIcon />
                                                    <SearchOutlinedIcon />
                                                </div>
                                                <div className="action-product-right">
                                                    <ShoppingBagOutlinedIcon />
                                                    Shop Now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="title-product">Nike Repel Miler</div>
                                    <div className="bottom-product">
                                        <div className="left-bot">Dress</div>
                                        <div className="right-bot">$120.50</div>
                                    </div>
                                </div>
                                <div className="card-product">
                                    <div className="img-product">
                                        <img src={p4} alt="card" />
                                        <div className="ribbon sale">SALE</div>
                                        <div className="access-product">
                                            <div className="action-product">
                                                <div className="action-product-left">
                                                    <FavoriteBorderOutlinedIcon />
                                                    <SearchOutlinedIcon />
                                                </div>
                                                <div className="action-product-right">
                                                    <ShoppingBagOutlinedIcon />
                                                    Shop Now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="title-product">Yellow Reserved Hoodie</div>
                                    <div className="bottom-product">
                                        <div className="left-bot">Dress</div>
                                        <div className="right-bot">$155.00</div>
                                    </div>
                                </div>
                                <div className="card-product">
                                    <div className="img-product">
                                        <img src={p8} alt="card" />
                                        <div className="access-product">
                                            <div className="action-product">
                                                <div className="action-product-left">
                                                    <FavoriteBorderOutlinedIcon />
                                                    <SearchOutlinedIcon />
                                                </div>
                                                <div className="action-product-right">
                                                    <ShoppingBagOutlinedIcon />
                                                    Shop Now
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="title-product">Polarised Sunglasses</div>
                                    <div className="bottom-product">
                                        <div className="left-bot">Glasses</div>
                                        <div className="right-bot">$160.00</div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="slider-tabcontent" id="slider-tshirt">
                        T-Shirt
                    </div>
                    <div className="slider-tabcontent" id="slider-hoodies">
                        Hoodies
                    </div>
                    <div className="slider-tabcontent" id="slider-jacket">
                        Jacket
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderProducts;
