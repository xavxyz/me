import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Hue = ({ handleSelectGoo, gooes }) =>
  <Wrap>
    {gooes.map(([start, end], index) =>
      <GooOut key={start + end} onClick={handleSelectGoo(index)} start={start}>
        <GooIn start={start} end={end} />
      </GooOut>
    )}
  </Wrap>;

Hue.propTypes = {
  handleSelectGoo: PropTypes.func.isRequired,
  gooes: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

const Wrap = styled.div`
  display: flex;
  margin: 20px 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const GooOut = styled.button`
  border-color: transparent;
  border-width: 0;
  padding: 4px;
  margin: 4px;
  width: 36px;
  height: 36px;
  position: relative;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:focus {
    outline-style: groove;
    outline-color: ${props => props.start};
  }
`;

const GooIn = styled.div`
  background-color: #cfd8dc;
  background-image: linear-gradient(
    135deg,
    ${props => `${props.start} 0%, ${props.end} 100%`}
  );
  width: 28px;
  height: 28px;
`;

export default Hue;
