import actionTypes from './actionTypes';

import { handleGetAllAccount } from '../../services/accountService';

export const getAllAccounts = () => {
    return async (dispatch) => {
        try {
            let res = await handleGetAllAccount();
            if (res.status === 200) {
                dispatch(getAllAccountSuccess(res.data));
            } else {
                dispatch(getAllAccountFail());
            }
        } catch (e) {
            dispatch(getAllAccountFail());
            console.log(e);
        }
    };
};

export const getAllAccountsSuccess = (data) => ({
    type: actionTypes.GET_ALL_ACCOUNT_SUCCESS,
    accounts: data
});

export const getAllAccountsFail = () => ({
    type: actionTypes.GET_ALL_ACCOUNT_FAIL,
    accounts: []
});
