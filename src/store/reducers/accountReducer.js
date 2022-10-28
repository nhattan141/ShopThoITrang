import actionTypes from 'store/actions/actionTypes';

export const initialState = {
    accounts: [1, 2, 3],
    account: {}
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_ACCOUNT_SUCCESS:
            return {
                ...state,
                accounts: action.accounts
            };
        case actionTypes.GET_ALL_ACCOUNT_FAIL:
            return {
                ...state,
                accounts: []
            };
        default:
            return state;
    }
};

export default accountReducer;
