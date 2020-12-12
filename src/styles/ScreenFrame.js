import styled from 'styled-components';

const ScreenFrame = styled.div`
  width: 100vw;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 0 20px 0;

  &.fit {
    min-height: fit-content;
  }

  
@media (min-width: 1100px) {
  margin-left: 250px;
  width: calc(100vw - 250px);
}
  
`;

export default ScreenFrame;
