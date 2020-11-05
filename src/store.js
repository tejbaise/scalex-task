import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const middleware = [thunk, routerMiddleware(history)];
export const INITIAL_STATE = {};

const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
