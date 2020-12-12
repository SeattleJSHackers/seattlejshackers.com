import styled from 'styled-components';

const NavigationButton = styled.button`
  z-index: 102;
  position: fixed;
  left: 10px;
  top: 10px;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.background + '75'};
  color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  margin: 0 5px 0 0;
  font-size: 35px;
  border: none;

  .icon {
    transition: all .5s ease-in-out;
  }

  .not-scaled {
    transform: rotate(90deg) rotateY(90deg);
  }

  .is-scaled {
    transform: rotate(0deg) rotateY(0deg);
  }
  @media (min-width: 1100px) {
    display: none;
  }
`;

export default NavigationButton;
