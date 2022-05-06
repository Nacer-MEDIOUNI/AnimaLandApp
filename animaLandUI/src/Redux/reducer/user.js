// import types
const {
  REGISTER_USER,
  LOGIN_USER,
  FAIL_USER,
  LOAD_USER,
  CURRENT_USER,
  LOGOUT_USER,
  CLEAR_ERRORS,
  LOAD_USERNAV,
  SUCCESS_USER,
} = require("../constants/user");

// initialstate
const initialState = {
  user: {},
  errors: "",
  success: "",
  isAuth: false,
  isSeller:false,
  isAdmin: false,
  isLoad: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, isLoad: true };
    case LOAD_USERNAV:
      return { ...state, isLoad: false };
    case REGISTER_USER:
      return { ...state, user: payload, isLoad: false };
    case LOGIN_USER:
      localStorage.setItem("token", `Bearer ${payload.token}`);
      return {
        ...state,
        user: payload,
        isLoad: false,
        isAuth: true,
        isSeller:true,
        isAdmin: true,
      };
    case FAIL_USER:
      return { ...state, errors: payload, isLoad: false };
    case SUCCESS_USER:
      return { ...state, success: payload, isLoad: false };
    case CURRENT_USER:
      return {
        ...state,
        user: payload,
        isLoad: false,
        isAuth: true,
        isSeller: true,
        isAdmin: true,
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return { ...state, user: {}, isAuth: false };
    case CLEAR_ERRORS:
      return { ...state, errors: "" };
    default:
      return state;
  }
};

export default userReducer;
