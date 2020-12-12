import styled from 'styled-components';

const NavigationBar = styled.nav`
  .sjsh-icon {
    display: none;
  }

  .menu {
    z-index: 101;
    position: fixed;
    left: 0;
    top: 0;
    width: 250px;
    min-height: 100vh;
    background-color: ${props => props.theme.colors.background};
    padding: 50px 0;
    transition: left .5s ease-in-out;
    border-right: 2px solid ${props => props.theme.colors.primary};

    &.closed {
      left: -250px;
    }

    .menu-title {
      font-size: 20px;
      color: ${props => props.theme.colors.primary};
      border-radius: 5px;
      padding: 0 5px 0 0;
      margin: 10px;
      font-family: 'Space Mono', monospace;
    }

    .bar {
      width: 250px;
      height: 2px;
      background-color: ${props => props.theme.colors.primary};
    }
  }

  .menu-bg {
    z-index: 100;

    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.shadow};
    transition: opacity .5s ease-in-out;
    &.show {
      opacity: .5;
    }

    &.hide {
      pointer-events: none;
      opacity: 0;
    }
  }

  .nav-bg {
    z-index: 100;
    pointer-events: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};
    transition: opacity .5s ease-in-out;

    &.fade {
      opacity: 1;
    }

    &.unfade {
      opacity: 0;
    }
  }

  @media (min-width: 1100px) {
    .sjsh-icon {
      display: inline;
      font-size: 20px;
      font-weight: 700;
      font-family: 'Space Mono', monospace;
      z-index: 102;
      position: fixed;
      left: 10px;
      top: 15px;
      text-transform: uppercase;   

    }
    .menu-bg {
      display: none;
    }

    .menu {
      &.closed{
      left: 0;
      }
    }
  }
`;

export default NavigationBar;
