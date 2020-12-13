import styled from 'styled-components';

const AppFrame = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  animation: fadein .5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: _;
  align-items: center;
  transition: all .5s ease-in-out;
  
  @keyframes fadein {
    from {opacity: 0;}
    to {opacity: 1;}
  }

`;

export default AppFrame;
