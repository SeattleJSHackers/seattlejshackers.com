import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { NavigationBar, NavigationButton } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars, faHome, faBook, faCalendar, faFile } from '@fortawesome/free-solid-svg-icons';
import { faSlack, faMeetup, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import InternalLink from './InternalLink';
import ExternalLink from './ExternalLink';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  const [isScaled, setIsScaled] = useState(true);
  const [isFaded, setIsFaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener('resize', handleClose);

    return () => window.removeEventListener('resize', handleClose);
  });

  const handleMenuToggle = () => {
    setIsScaled(false);
    setIsOpen(prevState => {
      if (!prevState) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'scroll';
      }

      return !prevState;
    });

    setTimeout(() => {
      setIsButtonOpen(prevState => !prevState);

      setTimeout(() => setIsScaled(true), 100);
    }, 500);
  }

  const handleClose = () => {
    if (isOpen === true) {
      setIsScaled(false);
      setIsOpen(false);
      document.body.style.overflow = 'scroll';

      setTimeout(() => {
        setIsButtonOpen(false);
        setTimeout(() => setIsScaled(true), 100);
      }, 500)
    }
  }

  const handleNavigation = (location) => (event) => {
    event.preventDefault();

    handleClose();
    setIsFaded(true);
    setTimeout(() => {
      window.scrollTo(0, 0);
      history.push(location);
      setTimeout(() => {
        setIsFaded(false);
      }, 100);
    }, 500)
  }


  return (
    <NavigationBar>
      <NavigationButton onClick={handleMenuToggle} disabled={!isScaled}>
        <FontAwesomeIcon icon={isButtonOpen ? faTimes : faBars} className={`icon ${isScaled ? 'is-scaled' : 'not-scaled'}`} alt={isOpen ? 'close menu' : 'open menu'} />
      </NavigationButton>
      <div className='sjsh-icon'>
        Seattle{`{JS}`}Hackers
      </div>
      <div className={`menu ${isOpen ? 'open' : 'closed'}`}>
        <InternalLink
          to='/'
          handleMenuToggle={handleNavigation}
          alt=''
          icon={faHome}
          text='home'
        />
        <InternalLink
          to='/events'
          handleMenuToggle={handleNavigation}
          alt=''
          icon={faCalendar}
          text='events'
        />
        {/* <InternalLink
          to='/resources'
          handleMenuToggle={handleNavigation}
          alt=''
          icon={faBook}
          text='Resources'
        /> */}
        <InternalLink
          to='/code-of-conduct'
          handleMenuToggle={handleNavigation}
          alt=''
          icon={faFile}
          text='Code of Conduct'
        />
        <div className='bar' />
        <div className='menu-title'>Join Us</div>
        <ExternalLink
          href='https://join.slack.com/t/seattlejshackers/shared_invite/enQtMzYzMDcwNzQ3Nzk0LTcxZDI5NjA1MjIwYzdkYjQ5ZDhhYjVlNzg1MjljZTg5NjU1YTRlYzhjMjNiZTQ0Y2NkMGRkOTQ2N2Q2N2VjYzU'
          alt='Seattle JS Hackers Slack invite link (opens to new page)'
          icon={faSlack}
          text='slack'
        />
        <ExternalLink
          href='https://www.meetup.com/seattlejshackers/'
          alt='Seattle JS Hackers meetup.com group page (opens to new page)'
          icon={faMeetup}
          text='meetup'
        />
        <ExternalLink
          href='https://twitter.com/js_hackers'
          alt='Seattle JS Hackers meetup.com group page (opens to new page)'
          icon={faTwitter}
          text='twitter'
        />
        <ExternalLink
          href='https://www.youtube.com/channel/UC0xOiHI3zANH7WLp5Ucru8Q'
          alt='Seattle JS Hackers youtube page (opens to new page)'
          icon={faYoutube}
          text='youtube'
        />

      </div>
      <div className={`nav-bg ${isFaded ? 'fade' : 'unfade'}`} />
      <div className={`menu-bg ${isOpen ? 'show' : 'hide'}`} onClick={handleMenuToggle} />
    </NavigationBar >
  );
};

export default Navigation;
