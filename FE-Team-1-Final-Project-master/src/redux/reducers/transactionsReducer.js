import {GET_ALL_TRBUYER, GET_ALL_TRSELLER, CREATE_TRANSACTION, UPDATE_TRANSACTION} from "../actions/types";

const initialState = {
    transactionSeller: [],
    transactionBuyer: [],
    statusTR: null,
};

const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TRBUYER:
            return {
                ...state,
                transactionBuyer: action.payload,
                statusTR: action.status,
            };
        case GET_ALL_TRSELLER:
            return {
                ...state,
                transactionSeller: action.payload,
                statusTR: action.status,
            };
        case CREATE_TRANSACTION:
            return {
                ...state,
                statusTR: action.status,
            };
        case UPDATE_TRANSACTION:
            return {
                ...state,
                statusTR: action.status,
            };
        default:
            return state;
    }
};

export default transactionsReducer;
