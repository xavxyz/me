import React from 'react';
import PropTypes from 'prop-types';
import Transistop from '../shared/Transistop';

const Icon = ({ name, data, height }) =>
  <svg
    // shouldn't be done like that
    height={height || '3rem'}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* this gradient should be abstracted in a reusable comp, maybe */}
    <linearGradient
      id="iconGrad"
      gradientUnits="userSpaceOnUse"
      x1="300"
      y1="100"
      x2="300"
      y2="600"
    >
      <Transistop offset="0.3" />
      <Transistop offset="0.6" end />
    </linearGradient>
    <path fill="url(#iconGrad)" d={data} />
  </svg>;

Icon.propTypes = {
  name: PropTypes.string,
  data: PropTypes.string,
};

export default Icon;
