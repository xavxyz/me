import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../styles/colors';
import Bubbles from './Bubbles';
import Picker from './Picker';
import Image from './Image';

const Carousel = ({ active = 'react' }) => (
  <Frame>
    <Bubbles active={active} />
    <Picker active={active} />
    <Image active={active} />
  </Frame>
);

const Frame = styled.div`
  display: flex;
  max-width: 96rem;
  border: .2rem solid ${colors.transparentWhite};
  border-radius: .4rem;
  padding: 2rem 1.5rem;
  cursor: pointer;
`;

Carousel.propTypes = {
  active: PropTypes.string,
};

export default Carousel;
