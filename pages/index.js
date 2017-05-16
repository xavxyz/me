import styled, { ThemeProvider } from 'styled-components';
import { compose } from 'recompose';
import withThemeSelector from '../lib/withThemeSelector';
import withData from '../lib/withData';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Repositories from '../components/Repositories';
import Footer from '../components/Footer';

export default compose(withData, withThemeSelector)(({ currentTheme }) => (
  <ThemeProvider theme={currentTheme}>
    <AppWrapper>
      <Header />
      <Hero />
      <Carousel />
      <Repositories />
      <Footer />
    </AppWrapper>
  </ThemeProvider>
));

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6vw;
  margin-left: 2rem;
  margin-right: 2rem;
`;
