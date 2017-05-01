import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { compose, withState, withHandlers } from 'recompose';
import Me from './Me';
import SocialIcons from './SocialIcons';

const Header = ({ scaleIcons, scaled }) => (
  <Wrapper>
    <Me scaleIcons={scaleIcons} />
    <SocialIcons scaled={scaled} />
  </Wrapper>
);

Header.propTypes = {
  scaleIcons: PropTypes.func,
  scaled: PropTypes.bool,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all .2s ease-in-out;
  margin-bottom: 6rem;
`;

export default compose(
  withState('scaled', 'updateScale', false),
  withHandlers({
    scaleIcons: ({ /*scaledIcons,*/ updateScale }) => bool => event => {
      updateScale(bool);
    },
  })
)(Header);
