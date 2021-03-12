import {SIGNIN_FETCH, SIGNIN_LOAD, SIGNIN_ERROR} from '../types';
import Axios from 'axios';

export const signIn = (data) => async (dispatch) => {
  dispatch({type: SIGNIN_LOAD});
  try {
    const result = await Axios.post(
      'https://www.reachnbuy.com/test/api/v1/user/auth/login',
      data,
    );
    dispatch({type: SIGNIN_FETCH, payload: result.data.accessToken});
    console.log('from action======>', result.data.accessToken);
  } catch (error) {
    dispatch({type: SIGNIN_ERROR, payload: error.response.data.error});
  }
};
