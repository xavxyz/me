import styled from 'styled-components';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12vw;
  margin-left: 2rem;
  margin-right: 2rem;
`;

export default () => (
  <AppWrapper>
    <Hero />
    <Carousel />
  </AppWrapper>
);
