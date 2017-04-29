import styled from 'styled-components';
import Carousel from '../components/Carousel';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default () => (
  <AppWrapper>
    <Carousel />
  </AppWrapper>
);
