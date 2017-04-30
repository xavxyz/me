import React from 'react';
import styled from 'styled-components';
// import colors from '../../styles/colors';
import Wave from './Wave';
import SocialLinks from './SocialLinks';

const Footer = () => (
  <Wrapper>
    <Wave />
    <SocialLinks />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100vw;
  position: relative;
`;

export default Footer;
