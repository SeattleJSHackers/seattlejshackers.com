import React, { useState, useEffect } from 'react';
import { ScreenFrame, TextFrame, ParallaxScreen } from '../styles';
import ResponsiveLogo from './ResponsiveLogo';
import { Background } from 'react-parallax';
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpeg';
import bg3 from '../assets/bg3.jpeg';
import IconLink from './IconLink';
import { faSlack, faMeetup, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const [isFaded, setIsFaded] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const bgs = [bg1, bg2, bg3];

  const changePicture = () => {
    setIsFaded(true);
    setTimeout(() => {
      setBgIndex(prevState => prevState + 1 === bgs.length ? 0 : prevState + 1);
      setTimeout(() => {
        setIsFaded(false);

      }, 250);
    }, 1000)
  };


  useEffect(() => {
    const homeInterval = setInterval(() => {
      changePicture();
    }, 7500);
    return () => clearInterval(homeInterval);
  });


  return (
    <>
      <ParallaxScreen blur={10} strength={100}>
        <ResponsiveLogo />
        <div className='icon-flex'>
          <IconLink
            href='https://join.slack.com/t/seattlejshackers/shared_invite/enQtMzYzMDcwNzQ3Nzk0LTcxZDI5NjA1MjIwYzdkYjQ5ZDhhYjVlNzg1MjljZTg5NjU1YTRlYzhjMjNiZTQ0Y2NkMGRkOTQ2N2Q2N2VjYzU'
            alt='Seattle JS Hackers Slack invite link (opens to new page)'
            icon={faSlack}
            text='slack'
          />
          <IconLink
            href='https://www.meetup.com/seattlejshackers/'
            alt='Seattle JS Hackers meetup.com group page (opens to new page)'
            icon={faMeetup}
            text='meetup'
          />
          <IconLink
            href='https://twitter.com/js_hackers'
            alt='Seattle JS Hackers meetup.com group page (opens to new page)'
            icon={faTwitter}
            text='twitter'
          />
        </div>
        <Background className='img-bg'>
          <div className='bg-filter' />
          <img src={bgs[bgIndex]} alt='' className={`bg-img${isFaded ? ' faded' : ''}`} />
        </Background>
      </ParallaxScreen>
      <ScreenFrame className='fit'>
        <TextFrame>
          <h3>About us</h3>
          <p>Seattle JS Hackers is an open and inclusive after-hours community of JavaScript hackers who learn and hack in JavaScript together. We are entrepreneurs, creatives, professionals, tinkerers, computer scientists, educators, marketers, and more – all working to ignite and amplify our personal productivity and collaboration.</p>
          <p>We organize online and in person events around Seattle each week. Our events encourage peer ideation and review, knowledge sharing, new champions for causes and projects, personal productivity, and a heightened sense of community.</p>
          <p>If you want to learn and hack together, come join us!</p>
        </TextFrame>
      </ScreenFrame>
    </>
  );
};



export default Home;