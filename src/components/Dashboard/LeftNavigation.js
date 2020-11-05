import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { logoutUser } from '../../actions';
var classNames = require('classnames');
const LeftNavigation = (props) => {
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(logoutUser());
    dispatch(push('/login'));
  };
  let btnCls = classNames('left-nav', 'menu-transition', {
    'left-nav-show': props.leftNavOpen,
  });
  return (
    <div className={btnCls}>
      <ul>
        <h1>Users</h1>
        <li>Dashboard</li>
        <li>Logs</li>
        <li onClick={onSignOut}>Signout</li>
      </ul>
    </div>
  );
};

export default LeftNavigation;
