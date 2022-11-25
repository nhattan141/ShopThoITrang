import * as React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import './CartInfor.scss';

import useAddCart from 'HOC/useAddCart';
import useToken from 'HOC/useToken';

import { Grid, Paper, Stack, styled } from '@mui/material';

import { hadleAddOrderApi, hadleAddOrderDetailsApi } from 'services/orderService';

const CartInfor = (props) => {
    const Item = styled(Paper)(({ theme }) => ({
        // padding: theme.spacing(1),
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: '#000000'
    }));

    const { cart, total, addQuantity, minusQuantity } = useAddCart();
    const { tokenApi } = useToken();

    if (tokenApi) {
        var { user } = tokenApi;
    }

    const handleOrder = async () => {
        if (!user) {
            toast.error('Bạn cần đăng nhập trước');
        } else if (total === 0) {
            toast.info('Không có sản phẩm nào trong giỏ hàng, bạn cần thêm sản phẩm vào giỏ hàng');
        } else {
            try {
                const day = new Date().toLocaleDateString('en-US').toString();
                const res = await hadleAddOrderApi(user._id, day, total, 'Chờ xác nhận', user.email, user.phone, user.address);
                if (res && res.status === 200) {
                    for (let item in cart) {
                        await hadleAddOrderDetailsApi(
                            res.data._id,
                            cart[item].productId,
                            cart[item].productPrice,
                            cart[item].quantity,
                            cart[item].productPrice * cart[item].quantity
                        );
                    }
                    toast.success('Đặt hàng thành công');
                }
            } catch (e) {
                console.log(e);
                toast.error('Có lỗi xảy ra');
            }
        }
    };

    return (
        <div className="cart-infor-container">
            <div className="cart-infor-content">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Item>
                            <div className="list-cart-container">
                                <div className="items-cart">
                                    <Stack>
                                        {cart &&
                                            cart.map((item, index) => {
                                                return (
                                                    <div className="item-cart" key={index}>
                                                        <div className="image-item">
                                                            <img src={item.productImg} alt="item-img" />
                                                        </div>
                                                        <div className="infor-item">
                                                            <div className="infor-title">{item.productName}</div>
                                                            <div className="infor-quantity">
                                                                <div className="quantity-title">Sô lượng:</div>
                                                                <div className="quantity-action">
                                                                    <button
                                                                        onClick={() => {
                                                                            minusQuantity(item.productId, item.productSize, 1);
                                                                        }}
                                                                    >
                                                                        -
                                                                    </button>
                                                                    <div className="quantity">{item.quantity}</div>
                                                                    <button
                                                                        onClick={() => {
                                                                            addQuantity(item.productId, item.productSize, 1);
                                                                        }}
                                                                    >
                                                                        +
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="price-item">
                                                            {new Intl.NumberFormat().format(item.productPrice * item.quantity)}
                                                            &nbsp;VNĐ
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                    </Stack>
                                </div>
                                <div className="cart-empty">
                                    Giỏ hàng đang trống?
                                    <Link to="/jew" className="empty-link">
                                        Mua ngay
                                    </Link>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Item>
                            <div className="payment-container">
                                <div className="payment-total">
                                    <div className="total-title">Tổng</div>
                                    <div className="total-price">{new Intl.NumberFormat().format(total)}&nbsp;VNĐ</div>
                                </div>
                                <div className="payment-button">
                                    <button onClick={handleOrder}>
                                        Đặt hàng&nbsp;&nbsp;{new Intl.NumberFormat().format(total)}&nbsp;VNĐ
                                    </button>
                                </div>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default CartInfor;
