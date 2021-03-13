import {SIGNIN_FETCH, SIGNIN_LOAD, SIGNIN_ERROR} from '../types';
import Axios from 'axios';
import toastMessage from '../../utils/toastMessage';

export const signIn = (data, navigation) => async (dispatch) => {
  dispatch({type: SIGNIN_LOAD});
  try {
    const result = await Axios.post(
      'https://www.reachnbuy.com/test/api/v1/user/auth/login',
      data,
    );
    dispatch({type: SIGNIN_FETCH, payload: result.data.accessToken});

    // Navigate to screen after successful signin
    navigation.navigate('Home');
  } catch (error) {
    dispatch({type: SIGNIN_ERROR, payload: error.response.data.error});
    toastMessage('Invalid login or password');
  }
};
