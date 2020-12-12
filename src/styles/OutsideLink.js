import styled from 'styled-components';

const OutsideLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: ${props => props.theme.colors.primary};
  border-radius: 5px;
  padding: 0 5px 0 0;
  margin: 10px;
  font-family: 'Space Mono', monospace;

  .icon-frame {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    margin: 0 5px 0 0;
    font-size: 15px;
  }
`;

export default OutsideLink;
