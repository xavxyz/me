import React from 'react';
import PropTypes from 'prop-types';

const PlanetoidStripe = ({ cx, cy, r, angle, length, offset = 0 }) => {
  // convert angle in radian
  const angleRadian = angle * Math.PI / 180;

  // make the stripe goes from left to right or right to left
  // depending on the angle in degree
  const direction = angle >= 80 || angle <= -80 ? -1 : 1;

  // base coordinate for the line to start from the planetoid edge
  const x = cx - r * Math.cos(angleRadian);
  const y = cy - r * Math.sin(angleRadian);

  const stripeDefinition = {
    x1: x + direction * offset,
    y1: y,
    x2: x + direction * (length + offset),
    y2: y,
  };

  return <line {...stripeDefinition} />;
};

PlanetoidStripe.propTypes = {
  angle: PropTypes.number.isRequired,
  r: PropTypes.number,
  cx: PropTypes.number,
  cy: PropTypes.number,
  length: PropTypes.number,
  offset: PropTypes.number,
};

export default PlanetoidStripe;
