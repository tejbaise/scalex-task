import * as actions from './authActions';
import * as ActionTypes from './actionTypes';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create an action to logout user', () => {
    const expectedAction = {
      type: ActionTypes.LOGOUT_USER,
    };
    expect(actions.logoutUser()).toEqual(expectedAction);
  });

  it('creates LOGIN_USER_SUCCESS when auth call has completed', () => {
    fetchMock.once(
      'https://ic3haoorgj.execute-api.ap-south-1.amazonaws.com/api/auth',
      {
        body: { data: {} },
        headers: { 'content-type': 'application/json' },
      }
    );

    const expectedActions = [
      { type: ActionTypes.LOGIN_USER_REQUEST },
      { type: ActionTypes.LOGIN_USER_SUCCESS, payload: { userDetails: {} } },
      {
        type: '@@router/CALL_HISTORY_METHOD',
        payload: {
          args: ['/'],
          method: 'push',
        },
      },
    ];
    const store = mockStore({});

    return store.dispatch(actions.loginUser()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
