import React from 'react';
import UserTable from './UserTable';

const UserListGenerator = (props) => {
  return (
    <div className='table-wrapper'>
      <p className='table-heading'>User Logs</p>
      <div className='overflow-wrapper'>
        <div className='table-container'>
          <div className='table-header'>#</div>
          <div className='table-header'>First Name</div>
          <div className='table-header'>Last Name</div>
          <div className='table-header'>Phone Number</div>
          <div className='table-header'>Address</div>
          {props.userLogs.map((user, index) => (
            <UserTable key={index} {...user} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserListGenerator;
