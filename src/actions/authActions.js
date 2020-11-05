import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
} from './actionTypes';
import { push } from 'connected-react-router';

export const loginUser = (cred) => {
  const loginUserRequest = () => ({
    type: LOGIN_USER_REQUEST,
  });
  const loginUserSuccess = (userDetails) => ({
    type: LOGIN_USER_SUCCESS,
    payload: { userDetails },
  });
  const loginUserFailure = (error) => ({
    type: LOGIN_USER_FAILURE,
    payload: { error },
  });
  return (dispatch) => {
    dispatch(loginUserRequest());
    return fetch(
      `https://ic3haoorgj.execute-api.ap-south-1.amazonaws.com/api/auth`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cred),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Login Error');
      })
      .then((response) => {
        dispatch(loginUserSuccess(response.data));
        if (response.data) dispatch(push('/'));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(loginUserFailure(errMsg));
      });
  };
};

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
