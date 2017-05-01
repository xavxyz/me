import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../styles/colors';
let { Link } = require('next/link');

// fallback for storybook
if (typeof Link === 'undefined') {
  // eslint-disable-next-line
  Link = ({ children }) => <div>{children}</div>;
}

const Me = ({ scaleIcons }) => (
  <Link prefetch href="/">
    <StyledLink onMouseEnter={scaleIcons(true)} onMouseLeave={scaleIcons(false)}>
      Xavier Cazalot
    </StyledLink>
  </Link>
);

Me.propTypes = {
  scaleIcons: PropTypes.func,
};

const StyledLink = styled.a`
  font-family: "Space Mono", monospace, sans-serif;
  font-size: 1.5vw;
  transition: all .2s ease-in;
  text-transform: uppercase;
  letter-spacing: .1rem;
  font-weight: 700;
  color: ${props => props.theme.main} !important; 
  transition: all .2s ease-in;
  
  padding: 1rem 1.5rem;
  
  &:hover {
    transition: all .2s ease-in;
    border-radius: 1vw;
    background: ${props => props.theme.main};
    color: ${colors.white} !important;
    transition: all .2s ease-in-out;
  }
`;

export default Me;
