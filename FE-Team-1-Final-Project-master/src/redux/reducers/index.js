import {combineReducers} from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import transactionsReducer from "./transactionsReducer";

export default combineReducers({
    auth: authReducer,
    product: productReducer,
    transaction: transactionsReducer,
});
