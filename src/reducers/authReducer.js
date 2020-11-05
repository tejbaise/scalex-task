import { LOGIN_USER_SUCCESS, LOGOUT_USER } from '../actions/actionTypes';

const initialState = { authenticated: false };

const loginUser = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      const {
        payload: { userDetails },
      } = action;
      return { ...state, ...userDetails, authenticated: true };
    case LOGOUT_USER:
      return { authenticated: false };
    default:
      return state;
  }
};

export default loginUser;
