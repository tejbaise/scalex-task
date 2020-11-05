import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) =>
  combineReducers({
    userDetails: authReducer,
    router: connectRouter(history),
  });

export default rootReducer;
