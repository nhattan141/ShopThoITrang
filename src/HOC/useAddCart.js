import * as React from 'react';
import { toast } from 'react-toastify';

export default function useAddCart() {
    const [cart, setCart] = React.useState([]);

    const getCart = () => {
        const cartString = localStorage.getItem('shopping-cart');
        const userCart = JSON.parse(cartString);
        setCart(userCart);
    };

    React.useEffect(() => {
        if (localStorage.getItem('shopping-cart') != null) {
            getCart();
        }
    }, []);

    const saveCart = () => {
        localStorage.setItem('shopping-cart', JSON.stringify(cart));
    };

    const cartItem = (userId, product, size) => {
        return {
            userId: userId,
            productId: product._id,
            productImg: product.Image,
            productName: product.Name,
            productPrice: product.Price,
            quantity: 1
        };
    };

    function addCart(userId, product, size) {
        for (let item in cart) {
            if (cart[item].productId === product._id) {
                cart[item].quantity += 1;
                saveCart();
                toast.success('Da them vao gio hang thanh cong');
                return;
            }
        }
        const newItem = cartItem(userId, product, size);
        setCart((cart) => cart.splice(0, 0, newItem));
        saveCart();
        toast.success('Da them vao gio hang thanh cong');
    }

    //Tinh tong tien khi nguoi dung them hang vao gio hang tu localStorage
    const getTotalCart = () => {
        const totalString = localStorage.getItem('shopping-cart');
        const totalCart = JSON.parse(totalString);
        let total = 0;
        for (var item in totalCart) {
            total += totalCart[item].quantity * totalCart[item].productPrice;
        }
        return total;
    };

    const [total, setTotal] = React.useState(getTotalCart());

    function setTotalCart() {
        let totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].quantity * cart[item].productPrice;
        }
        setTotal(totalCart);
    }

    // Tang so luong san pham
    function increaseQuantity(productid, size, count) {
        for (var item in cart) {
            if (cart[item].productId === productid && cart[item].productSize === size) {
                cart[item].quantity += count;
                setTotalCart();
                setCart([...cart]);
                saveCart();
                break;
            }
        }
    }

    //giam so luong san pham
    function decreaseQuantity(productid, size, count) {
        for (var item in cart) {
            if (cart[item].productId === productid && cart[item].productSize === size) {
                cart[item].quantity -= count;
                if (cart[item].quantity === 0) {
                    cart.splice(item, 1);
                    toast.success('Da xoa khoi gio hang thanh cong');
                }
                setTotalCart();
                setCart([...cart]);
                saveCart();
                break;
            }
        }
    }

    return {
        setCart,
        addQuantity: increaseQuantity,
        minusQuantity: decreaseQuantity,
        getCart,
        addCart,
        cart,
        total
    };
}
