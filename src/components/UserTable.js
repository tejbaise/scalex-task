import React from 'react';

function UserTable(props) {
  const { index, firstName, lastName, phoneNumber, Address } = props;

  return (
    <>
      <div className='grid-cell'>{index + 1}</div>
      <div className='grid-cell'>{firstName}</div>
      <div className='grid-cell'>{lastName}</div>
      <div className='grid-cell'>{phoneNumber}</div>
      <div className='grid-cell'>{Address}</div>
    </>
  );
}

export default UserTable;
