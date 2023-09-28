import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCESS,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCESS,
} from "./actionTypes";
import axios from "axios";

export const userLogin = (value) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  return axios
    .post("https://beautiful-rose-narwhal.cyclic.cloud/login", value)
    .then((res) => {
      dispatch({ type: LOGIN_SUCESS, payload: res.data.token });
      localStorage.setItem("token", res.data.token);
    })
    .catch(() => {
      dispatch({ type: LOGIN_ERROR });
    });
};

export const userSignup = (value) => (dispatch) => {
  dispatch({ type: SIGNUP_LOADING });
  return axios
    .post("https://beautiful-rose-narwhal.cyclic.cloud/register", value)
    .then((res) => {
      dispatch({ type: SIGNUP_SUCESS });
    })
    .catch(() => {
      dispatch({ type: SIGNUP_ERROR });
    });
};
