import {SIGNIN_LOAD, SIGNIN_FETCH, SIGNIN_ERROR} from '../types';

const initialState = {
  token: '',
  signinLoading: false,
  error: {},
};

const AuthReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SIGNIN_LOAD:
      return {
        signinLoading: true,
        ...state,
      };
    case SIGNIN_FETCH:
      console.log('from reducer========>', payload);
      return {
        signinLoading: false,
        token: payload,
        ...state,
      };
    case SIGNIN_ERROR:
      return {
        signinLoading: false,
        error: payload,
        ...state,
      };
    default:
      return state;
  }
};

export default AuthReducer;
