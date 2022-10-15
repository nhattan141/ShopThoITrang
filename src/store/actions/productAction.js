import actionTypes from './actionTypes';

import { handleGetAllProduct } from '../../services/productService';

export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            let res = await handleGetAllProduct();
            if (res.status === 200) {
                dispatch(getAllProductSuccess(res.data));
            } else {
                dispatch(getAllProductFail());
            }
        } catch (e) {
            dispatch(getAllProductFail());
            console.log(e);
        }
    };
};

export const getAllProductsSuccess = (data) => ({
    type: actionTypes.GET_ALL_PRODUCT_SUCCESS,
    products: data
});

export const getAllProductsFail = () => ({
    type: actionTypes.GET_ALL_PRODUCT_FAIL,
    products: []
});
