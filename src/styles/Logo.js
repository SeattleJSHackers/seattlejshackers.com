import styled from 'styled-components';

const Logo = styled.div`
  font-family: 'Space Mono', monospace;
  margin: 0 auto;
  box-shadow: 0 10px 10px -5px ${props => props.theme.colors.shadow + '95'};

  @media (max-width: 500px) {
    padding: 5px;
    border-radius: 10%;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.primary};
    line-height: 1.2;

    .seattle, .hackers {
      font-size: 43px;
      font-weight: 700;
    }
    
    .js {
      font-size: 85px;
      font-weight: 400;

    }
    div {
      text-align: center;
    }
  }
  
  @media (min-width: 500px) {
    @media (max-width: 799px) {
      background-color: ${props => props.theme.colors.primary};
      border-radius: 5px;
      padding: 5px;
      position: relative;
      height: 124px;
      width: 400px;

      .seattle, .hackers {
        color: ${props => props.theme.colors.secondary};
        font-size: 62px;
        position: absolute;
        left: 5px;
        line-height: 1;
        font-weight: 700;
      }

      .seattle {
        top: 5px;
      } 
      .hackers {
        bottom: 5px;
      }

      .js {
        font-weight: 400;
        position: absolute;
        right: 2px;
        top: 2px;
        color: ${props => props.theme.colors.primary};
        padding: 5px;
        width: 120px;
        height: 120px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.colors.secondary};
        font-size: 95px;
        font-weight: 500;
        line-height: 1;

        span {
          display: none;
        }
      }
    }
  }

  @media (min-width: 800px) {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 5px;
    padding: 2px 15px;
    display: flex;
    align-items: center;
    font-weight: 400;
    width: fit-content;
    .seattle, .hackers {
      color: ${props => props.theme.colors.secondary};
      font-size: 62px;
      line-height: 1;
    }

    .js {
      color: ${props => props.theme.colors.primary};
      padding: 2px;
      margin: 0 40px;
      width: 80px;
      height: 80px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${props => props.theme.colors.secondary};
      font-size: 62px;
      font-weight: 500;
      line-height: 1;

      span {
        margin: 0 5px;
        color: ${props => props.theme.colors.secondary};
      }
    }
  }
`;

export default Logo;
