import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const InsideLink = styled(NavLink)`
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${props => props.theme.colors.primary};
  padding: 0 5px 0 10px;
  margin: 10px 0;
  font-family: 'Space Mono', monospace;
  transition: all .5s ease-in-out;

  .icon-frame {
    /* background-color: #F0DB4F;
    color: #323330; */
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    margin: 0 5px 0 0;
    font-size: 15px;
  }

  &.you-are-here {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
  }
`;

export default InsideLink;
