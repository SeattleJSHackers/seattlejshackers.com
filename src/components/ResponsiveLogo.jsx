import React from 'react';
import { Logo } from '../styles';

const ResponsiveLogo = () => {
  return (
    <Logo>
      <div className='seattle'>SEATTLE</div>
      <div className='js'><span>{`{`}</span>JS<span>{`}`}</span></div>
      <div className='hackers'>HACKERS</div>
    </Logo>
  );
}

export default ResponsiveLogo;