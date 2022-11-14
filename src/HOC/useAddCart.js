import * as React from 'react';

export default function useAddCart() {
    const [cart, setCart] = React.useState([]);

    const saveCart = () => {
        localStorage.setItem('shopping-cart', JSON.stringify(cart));
    };

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

    const cartItem = (userId, product, size) => {
        return {
            userId: userId,
            productId: product.id,
            productName: product.title,
            productPrice: product.price,
            productSize: size,
            quantity: 1
        };
    };

    function addCart(userId, product, size) {
        for (let item in cart) {
            if (cart[item].productId === product.id && cart[item].productSize === size) {
                cart[item].quantity += 1;
                saveCart();
                return;
            }
        }
        let item = cartItem(userId, product, size);
        cart.push(item);
        saveCart();
    }

    return {
        setCart: addCart,
        cart
    };
}
