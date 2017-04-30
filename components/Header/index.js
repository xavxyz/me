import React from 'react';
import styled from 'styled-components';
import Me from './Me';
import ThemeSwitcher from './ThemeSwitcher';
import SocialIcons from './SocialIcons';
import About from './About';
import colors from '../../styles/colors';

const Header = () => (
  <FixedWrapper>
    <Left>
      <Me />
      <ThemeSwitcher />
    </Left>
    <Right>
      <SocialIcons />
      <About />
    </Right>
  </FixedWrapper>
);

const FixedWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all .2s ease-in-out;
  background: ${colors.white};
  box-shadow: 0 .2rem .4rem rgba(0,0,0,.1);
  z-index: 200; /* 😳 */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
