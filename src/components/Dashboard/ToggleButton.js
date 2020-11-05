import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const ToggleButton = (props) => {
  const { leftNavOpen, toggleChange } = props;
  let icon = leftNavOpen ? faTimes : faBars;
  return (
    <button
      className='toggle-button'
      onClick={() => {
        toggleChange();
      }}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default ToggleButton;
