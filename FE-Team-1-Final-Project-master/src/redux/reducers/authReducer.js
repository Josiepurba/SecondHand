import {
  AUTH_ERROR,
  CLEAR_STATUS,
  LOGIN,
  LOGOUT,
  REGISTER,
  UPDATE_INFO_USERS,
} from "../actions/types";

const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
  token: localStorage.getItem("token"),
  user: null,
  status: "",
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        user: action.user,
        status: action.status,
        error: null,
      };
    case REGISTER:
      return {
        ...state,
        status: action.status,
        error: null,
      };
    case UPDATE_INFO_USERS:
      return {
        ...state,
        user: action.payload,
        status: action.status,
      };
    case CLEAR_STATUS:
      return {
        ...state,
        user: action.payload,
        status: "",
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        status: "logout",
        token: null,
        error: null,
      };
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
