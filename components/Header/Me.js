import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';
let { Link } = require('next/link');

// fallback for storybook
if (typeof Link === 'undefined') {
  // eslint-disable-next-line
  Link = ({ children }) => <div>{children}</div>;
}

const Me = () => <Link prefetch href="/"><StyledLink>Xavier Cazalot</StyledLink></Link>;

const StyledLink = styled.a`
  font-family: "Space Mono", monospace, sans-serif;
  font-size: 1.5vw;
  transition: all .2s ease-in;
  text-transform: uppercase;
  letter-spacing: .1rem;
  font-weight: 700;
  color: ${colors.black} !important; 
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
`;

export default Me;
