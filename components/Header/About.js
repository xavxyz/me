import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
let { Link } = require('next/link');

// fallback for storybook
if (typeof Link === 'undefined') {
  // eslint-disable-next-line
  Link = ({ children }) => <div>{children}</div>;
}

const About = () => (
  <Wrapper>
    <Link prefetch href="/about"><StyledLink>About</StyledLink></Link>
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
`;

const StyledLink = styled.a`
  margin: 1rem 0;
  padding: .5vw;
  
  font-family: "Space Mono", monospace, sans-serif;
  font-weight: 700;
  color: ${colors.darkGrey} !important; /* change resets */
  font-size: 1.3vw;
  transition: all .2s ease-in;
  
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-left: 2.3rem;
  }
  
  padding: 1rem 1.5rem;
  margin: 0 2.8rem;
  
  &:hover {
    transition: all .2s ease-in;
    border-radius: 1vw;
    background: ${colors.lightBlue};
    color: ${colors.white} !important;
    transition: all .2s ease-in-out;
  }
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${colors.darkGrey};
    margin: 0 1rem;
    width: .4rem;
    border-radius: .2rem;
    @media screen and (max-width: 768px) {
      border-radius: .1rem;
      width: .2rem;
    }
  }
`;

export default About;
