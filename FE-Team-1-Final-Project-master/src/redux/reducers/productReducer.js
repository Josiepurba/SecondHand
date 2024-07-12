import {
  GET_ALL_PRODUCT,
  GET_PRODUCT,
  CREATE_PRODUCT,
  PREVIEW_PRODUCT,
  PRODUCT_ERROR,
  UPDATE_PRODUCT,
  CLEAR_PRODUCT,
  CLEAR_ALL_PRODUCT,
  CLEAR_STATUS_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/types";

const initialState = {
  product: [],
  productdetail: [],
  newproduct: [],
  previewProduct: [],
  status: "",
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCT:
      return {
        ...state,
        product: action.payload,
        status: action.status,
      };
    case GET_PRODUCT:
      return {
        ...state,
        productdetail: action.payload,
        status: action.status,
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        newproduct: action.payload,
        status: action.status,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        newproduct: action.payload,
        status: action.status,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        status: action.status,
      };
    case PREVIEW_PRODUCT:
      return {
        ...state,
        previewProduct: action.payload,
      };
    case CLEAR_PRODUCT:
      return {
        ...state,
        productdetail: [],
        newproduct: [],
        previewProduct: [],
        status: "",
        error: null,
      };
    case CLEAR_ALL_PRODUCT:
      return {
        ...state,
        product: [],
        productdetail: [],
        newproduct: [],
        previewProduct: [],
        status: "",
        error: null,
      };
    case CLEAR_STATUS_PRODUCT:
      return {
        ...state,
        status: "",
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
        status: action.status,
      };
    default:
      return state;
  }
};

export default productReducer;
