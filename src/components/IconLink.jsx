import React from 'react';
import { SymbolLink } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconLink = props => {
  const { href, alt, icon } = props;
  return (
    <SymbolLink
      href={href}
      target='_blank'
      rel='noreferrer'
      alt={alt}
    >
      <FontAwesomeIcon icon={icon} size={'3x'} />
    </SymbolLink>
  );
};

export default IconLink;
