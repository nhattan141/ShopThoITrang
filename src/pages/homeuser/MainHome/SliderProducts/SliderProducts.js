import * as React from 'react';
import Slider from 'react-slick';

import './SliderProducts.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import CardProduct from 'layout/HomeLayout/CardProduct/CardProduct';

import useAddCart from 'HOC/useAddCart';

import { handleGetAllProduct } from 'services/productService';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

//import store redux
import * as actions from 'store/actions/index';
import productReducer, { initialStateProduct } from 'store/reducers/productReducer';

const SliderProducts = (props) => {
    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const Item = styled(Paper)(({ theme }) => ({
        padding: theme.spacing(1),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: theme.palette.text.secondary
    }));

    // ==================== Call API =================

    const [state, dispatch] = React.useReducer(productReducer, initialStateProduct);
    const { products } = state;

    const getAllProduct = async () => {
        try {
            let res = await handleGetAllProduct();
            dispatch(actions.getAllProductsSuccess(res.data));
        } catch (e) {
            console.log(e);
        }
    };

    React.useEffect(() => {
        getAllProduct();
    }, []);

    const [length, setLength] = React.useState(0);

    const { getCart } = useAddCart();

    React.useEffect(() => {
        getCart();
    }, [length]);

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
                <div className="slider-title">{props.title}</div>
                <div className={props.class}>
                    <div className="tabs">
                        <button className="slider-tablinks active" onClick={(event) => openTab(event, 'slider-all')}>
                            Tất cả
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
                        <p>Xem hết</p>
                    </div>
                </div>
                <div className="products">
                    <div className="slider-tabcontent tab-active" id="slider-all">
                        <div className="list-products">
                            <Slider {...settings}>
                                {products.map((item, index) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={3} key={index}>
                                            <Item>
                                                <CardProduct
                                                    id={item._id}
                                                    title={item.Name}
                                                    category={item.CategoryId}
                                                    price={item.Price}
                                                    image={item.Image}
                                                    product={item}
                                                    setLength={setLength}
                                                />
                                            </Item>
                                        </Grid>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="slider-tabcontent" id="slider-tshirt">
                        <div className="list-products">
                            <Slider {...settings}>
                                {products.map((item, index) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={3} key={index}>
                                            <Item>
                                                <CardProduct
                                                    id={item._id}
                                                    title={item.Name}
                                                    category={item.CategoryId}
                                                    price={item.Price}
                                                    image={item.Image}
                                                    product={item}
                                                    setLength={setLength}
                                                />
                                            </Item>
                                        </Grid>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="slider-tabcontent" id="slider-hoodies">
                        <div className="list-products">
                            <Slider {...settings}>
                                {products.map((item, index) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={3} key={index}>
                                            <Item>
                                                <CardProduct
                                                    id={item._id}
                                                    title={item.Name}
                                                    category={item.CategoryId}
                                                    price={item.Price}
                                                    image={item.Image}
                                                    product={item}
                                                    setLength={setLength}
                                                />
                                            </Item>
                                        </Grid>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                    <div className="slider-tabcontent" id="slider-jacket">
                        <div className="list-products">
                            <Slider {...settings}>
                                {products.map((item, index) => {
                                    return (
                                        <Grid item xs={12} sm={6} md={3} key={index}>
                                            <Item>
                                                <CardProduct
                                                    id={item._id}
                                                    title={item.Name}
                                                    category={item.CategoryId}
                                                    price={item.Price}
                                                    image={item.Image}
                                                    product={item}
                                                    setLength={setLength}
                                                />
                                            </Item>
                                        </Grid>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderProducts;
