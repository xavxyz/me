import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Footer = () => (
  <Wrapper>
    <Tagline>Curious?</Tagline>
    <a href="https://github.com/xavcz/xav.cz" target="_blank">
      <GoToRepo>Source code</GoToRepo>
    </a>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

const Tagline = styled.div`
  font-size: 1.2vw;
  text-transform: uppercase;
  letter-spacing: .3rem;
  font-weight: normal;
  opacity: .5;
  margin-bottom: 1rem;
  @media screen and (max-width: 668px) {
    font-size: 1.6rem;
  }
`;

const GoToRepo = styled.div`
  font-family: "Space Mono", monospace, sans-serif;
  font-weight: 700;
  font-size: 1.2vw;
  padding: 1vw 1.2vw;
  display: flex;
  justify-content: center;
  border-radius: .3vw;
  transition: all .2s ease-out;
  
  @media screen and (max-width: 668px) {
    font-size: 1.6rem;
  }
  
  &:hover {
    transition: all .2s ease-in;
    border-radius: 1vw;
    background: ${colors.white};
    color: ${props => props.theme.main};
  }
`;

export default Footer;

// note: wave version, to be re-enabled later, maybe?
// import Wave from './Wave';
// import SocialLinks from './SocialLinks';
//
// const Footer = () => (
//   <Wrapper>
//     <Wave />
//     <SocialLinks />
//   </Wrapper>
// );
//
// const Wrapper = styled.div`
//   width: 100vw;
//   position: relative;
// `;
//
// export default Footer;
