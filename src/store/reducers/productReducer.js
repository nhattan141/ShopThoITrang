import actionTypes from 'store/actions/actionTypes';

export const initialStateProduct = {
    products: [],
    product: {}
};

const productReducer = (state = initialStateProduct, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.products
            };
        case actionTypes.GET_ALL_PRODUCT_FAIL:
            return {
                ...state,
                products: []
            };
        case actionTypes.GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                product: action.product
            };
        case actionTypes.GET_SINGLE_PRODUCT_FAIL:
            return {
                ...state,
                product: {}
            };
        default:
            return state;
    }
};

export default productReducer;
