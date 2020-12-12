import styled from 'styled-components';
import { Parallax } from 'react-parallax';

const ParallaxScreen = styled(Parallax)`
  width: 100vw;
  height: 100vh;
  max-width: 800px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  padding: 50px 0;
  margin-top: 60px;

  .icon-flex {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .bg-img {
    transition: opacity .5s linear;
    opacity: .5;

    &.faded {
      opacity: 0;
    }
  }

  img {
    z-index: 99;
    filter: grayscale(100%);
    max-width: 1000px;
  }

  @media (min-width: 1100px) {
    margin-left: 250px;
    width: calc(100vw - 250px);
  }
  
`;

export default ParallaxScreen;
