import actionTypes from 'store/actions/actionTypes';

export const initialState = {
    products: [1, 2, 3],
    product: {}
};

const productReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
};

export default productReducer;
