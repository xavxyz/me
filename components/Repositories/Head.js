import React from 'react';
import styled from 'styled-components';

const Head = () => (
  <Wrapper>
    <Title>Open Source Software</Title>
    <Subtitle>My favorite projects</Subtitle>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  line-height: 1;
  font-family: "Space Mono", monospace, sans-serif;
  font-size: 2.6vw;
  font-weight: 700;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 668px) {
    font-size: 1.6rem;
  }
`;

const Subtitle = styled.h3`
  text-transform: uppercase;
  letter-spacing: .3rem;
  font-weight: normal;
  font-size: 1.6rem;
  opacity: .5;
`;

export default Head;
