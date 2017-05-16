import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InfoBlock = ({ name, description }) => (
  <Block>
    <Name>{name}</Name>
    <Description>{description}</Description>
  </Block>
);

InfoBlock.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

const Name = styled.div`
  font-family: "Space Mono", monospace, sans-serif;
  font-size: 2.1rem;
  text-transform: uppercase;
  letter-spacing: .1rem;
  font-weight: 700;
  color: ${props => props.theme.main}; 
  padding: 1rem;
`;

const Description = styled.div`
  font-size: 1.6rem;
  text-align: center;
  min-height: 4.8rem; /* firefox lame fix */
`;

export default InfoBlock;
