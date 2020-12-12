import React from 'react';
import { OutsideLink } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExternalLink = props => {
  const { href, alt, icon, text } = props;
  return (
    <OutsideLink
      href={href}
      target='_blank'
      rel='noreferrer'
      alt={alt}
    >
      <div className='icon-frame'>
        <FontAwesomeIcon icon={icon} size={'2x'} />
      </div>
      {text}
    </OutsideLink>
  );
};

export default ExternalLink;
