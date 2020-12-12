import React from 'react';
import { ScreenFrame, TextFrame } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <ScreenFrame>
      <TextFrame>
        <h3><FontAwesomeIcon icon={faExclamationTriangle} className='warning-icon' />Page Not Found</h3>
        <p>If you believe this may be an error, please contact site administrator.</p>
      </TextFrame>
    </ScreenFrame>
  );
};

export default NotFound;