import styled from 'styled-components';

const ThemeButton = styled.button`
  z-index: 102;
  position: fixed;
  right: 10px;
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
  font-size: 35px;
  border: none;
  transition: all .5s ease-in-out;

  .icon {
    transition: opacity .5s ease-in-out;
  }

  .not-shown {
    opacity: 0;
  }

  .is-shown {
    opacity: 1;
  }
`;

export default ThemeButton;
