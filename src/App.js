import React from 'react';
import { Provider } from 'react-redux';
import store, { history } from './store';
import './App.scss';
import Login from './components/Login/Login';
import { Switch, Route } from 'react-router';
import { RequireAuth } from './components/RequireAuth';
import { ConnectedRouter } from 'connected-react-router';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route component={RequireAuth} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
