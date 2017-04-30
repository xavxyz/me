import styled from 'styled-components';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

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
    <Header />
    <Hero />
    <Carousel />
    <Footer />
  </AppWrapper>
);
