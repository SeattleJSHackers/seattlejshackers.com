import React from 'react';
import { InsideLink } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InternalLink = props => {
  const { to, handleMenuToggle, alt, icon, text } = props;

  return (
    <InsideLink
      exact={true}
      to={to}
      activeClassName='you-are-here'
      onClick={handleMenuToggle(to)}
      alt={alt}
    >
      <div className='icon-frame'>
        <FontAwesomeIcon icon={icon} size={'2x'} />
      </div>
      {text}
    </InsideLink>
  );
};

export default InternalLink;
