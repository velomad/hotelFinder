import {SIGNIN_LOAD, SIGNIN_FETCH, SIGNIN_ERROR} from '../types';

const initialState = {
  token: '',
  isAuth:false,
  signinLoading: false,
  error: {},
};

const AuthReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SIGNIN_LOAD:
      return {
        ...state,
        signinLoading: true,
      };
    case SIGNIN_FETCH:
      return {
        ...state,
        signinLoading: false,
        token: payload,
        isAuth : true
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        signinLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
