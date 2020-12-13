import styled from 'styled-components';

const TextFrame = styled.div`
  width: calc(100% - 40px);
  max-width: 800px;
  margin: 20px;
  color: ${props => props.theme.colors.primary};

  h3 {
    margin: 10px 0;
    font-family: 'Space Mono', monospace;
    text-transform: uppercase;
    font-size: 35px;
    line-height: 1;

    .warning-icon {
      margin-right: 10px;
    }
  }
  
  p {
    margin: 10px 0;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    a {
      color: ${props => props.theme.colors.primary + '99'};
    }
  }

  img {
    width: 100%;
    filter: grayscale(100%);
    max-width: 800px;
  }
`;

export default TextFrame;
