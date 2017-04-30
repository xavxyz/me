import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OkGrowLogo from './OkGrowLogo';
import colors from '../../styles/colors';

const Job = () => (
  <Wrapper>
    <Text>
      I work at{' '}
      <Highlight>OK GROW!</Highlight>
      {' '}where I use React, GraphQL & Meteor to{' '}
      <Highlight>build client apps, run trainings and ship opensource packages</Highlight>
      .
    </Text>
    <OkGrowLogo />
  </Wrapper>
);
const Wrapper = styled.div`
  align-self: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h3`
  font-family: "Space Mono", monospace, sans-serif;
  font-size: 2.6vw;
  font-weight: normal;
  margin-bottom: 3rem;
  @media screen and (max-width: 668px) {
    font-size: 1.6rem;
  }
`;

const Highlight = styled.span`
  color: ${colors.lightBlue};
  font-weight: 700;
`;

export default Job;
