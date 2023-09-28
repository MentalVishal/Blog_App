import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCESS,
  SIGNUP_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  token: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING: {
      return { ...state, isLoading: true };
    }
    case LOGIN_SUCESS: {
      return { ...state, isLoading: false, token: payload };
    }
    case LOGIN_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case SIGNUP_LOADING: {
      return { ...state, isLoading: true };
    }
    case SIGNUP_SUCESS: {
      return { ...state, isLoading: false };
    }
    case SIGNUP_ERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};
