import styled from 'styled-components';

const SymbolLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  border-radius: 5px;
  margin: 10px;
  /* font-family: 'Space Mono', monospace; */
  width: 60px;
  height: 60px;
  box-shadow: 0 10px 10px -5px ${props => props.theme.colors.shadow + '95'};
`;

export default SymbolLink;
