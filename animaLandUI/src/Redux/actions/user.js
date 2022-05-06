import axios from "axios";
import {
  REGISTER_USER,
  FAIL_USER,
  LOGIN_USER,
  CURRENT_USER,
  LOGOUT_USER,
  CLEAR_ERRORS,
  LOAD_USERNAV,
  SUCCESS_USER,
} from "../constants/user";

export const register = (user, navigate) => async (dispatch) => {
  try {
    let result = await axios.post("/auth/register", user);
    dispatch({ type: REGISTER_USER, payload: result.data });
    dispatch({ type: SUCCESS_USER, payload: "You're registred successfully!" });
    window.location.href = "/auth/login";
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const login = (user) => async (dispatch) => {
  try {
    let result = await axios.post("/auth/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data });
    dispatch({ type: SUCCESS_USER, payload: "You're logged in successfully!" });
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const current = () => async (dispatch) => {
  dispatch({ type: LOAD_USERNAV });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // dispatch({ type: LOAD_USER });
    let result = await axios.get("/api/users/me", config);
    dispatch({ type: CURRENT_USER, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response.data });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
