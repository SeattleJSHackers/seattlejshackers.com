import styled from 'styled-components';

const TextFrame = styled.div`
  width: calc(100% - 40px);
  max-width: 800px;
  margin: 20px;
  color: ${props => props.theme.colors.primary};

  h3, h4, p, a, img {
    transition: all .5s ease-in-out;
  }

  h3, h4 {
    margin: 10px 0;
    line-height: 1;

    .warning-icon {
      margin-right: 10px;
    }
  }

  h3 {
    font-family: 'Space Mono', monospace;
    text-transform: uppercase;
    font-size: 35px;
  }
  
  h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
  }

  p {
    margin: 10px 0;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
  }

  a {
    color: ${props => props.theme.colors.primary + '99'};
  }

  img {
    border: 2px solid ${props => props.theme.colors.primary};
    width: 100%;
    filter: grayscale(100%);
    max-width: 800px;
  }

  .video-player {
    filter: grayscale(100%);
    border: 2px solid ${props => props.theme.colors.primary};
    width: 800px;
    height: 450px;
    max-width: calc(100vw - 40px);
    max-height: calc((9 / 16) * (100vw - 40px));
  }
`;

export default TextFrame;
