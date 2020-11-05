import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserListGenerator from '../UserListGenerator';

export class Body extends Component {
  render() {
    const {
      userDetails: { activeUsers, inactiveUsers, userLogs = [] },
    } = this.props;
    return (
      <div className='dashboard-body-cont'>
        <div className='user-info-wrapper'>
          <div className='active-user-info-box'>
            <p className='active-user-title'>Active Users</p>
            <p className='user-count'>{activeUsers}</p>
          </div>
          <div className='active-user-info-box'>
            <p className='active-user-title'>In Active Users</p>
            <p className='user-count'>{inactiveUsers}</p>
          </div>
        </div>
        <div>
          <UserListGenerator userLogs={userLogs} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userDetails: state.userDetails,
});

export default connect(mapStateToProps, null)(Body);
