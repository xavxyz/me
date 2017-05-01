// note: this is the initial version of the slider that will be handled
// with observables for smoother throttled animations!

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import Me from './Me';
import ThemeSwitcher from './ThemeSwitcher';
import SocialIcons from './SocialIcons';
import About from './About';
import colors from '../../styles/colors';

const Header = ({ scrollUp }) => {
  return (
    <FixedWrapper scrollUp={scrollUp}>
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
};

Header.propTypes = {
  scrollUp: PropTypes.bool,
};

const scrollAnimation = up => keyframes`
  from { transform: translateY(${up ? '-100%' : '0%'}); }
  to { transform: translateY(${up ? '0%' : '-100%'}); }
`;

const FixedWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all .2s ease-in-out;
  background: ${colors.white};
  box-shadow: 0 .2rem .4rem rgba(0,0,0,.1);
  z-index: 42; /* 😳 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all .2s ease-in-out;
  animation: ${props => props.scrollUp ? scrollAnimation(true) : scrollAnimation(false)} .5s;
  animation-fill-mode: both;
`;

const Left = styled.div`
  display: flex;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;

export default compose(
  withState('scrollUp', 'setScrollUp', true),
  withHandlers(() => {
    let scrollTop = 0;
    return {
      hideOrShow: ({ scrollUp, setScrollUp }) => event => {
        const newScrollTop = event.srcElement.body.scrollTop;
        if (newScrollTop > scrollTop) {
          // scroll down
          if (scrollUp !== false) {
            setScrollUp(false);
          }
        } else {
          // scroll up
          if (scrollUp !== true) {
            setScrollUp(true);
          }
        }
        scrollTop = newScrollTop;
      },
    };
  }),
  lifecycle({
    componentDidMount() {
      window.addEventListener('scroll', this.props.hideOrShow);
    },
    componentWillUnmount() {
      window.removeEventListener('scroll', this.props.hideOrShow);
    },
  })
)(Header);
