import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Subtitle from './Subtitle';
import StripedPlanetoid from './StripedPlanetoid';

const Hero = () => {
  return (
    <Wrapper>
      <Title>Javascript Engineer</Title>
      <Subtitle>Building webapps for your delight</Subtitle>
      <PlanetoidContainer>
        {/* note: let's make it kickable in this container later 🏌️‍♂️ */}
        <StripedPlanetoid />
      </PlanetoidContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 5rem;
  min-width: 80vw;
`;

const PlanetoidContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default Hero;
