import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Hello = ({ title, subtitle, handleSelectGoo }) =>
  <Wrap>
    <Title>Hello! I'm Xavier,</Title>
    <Title>
      {title}!
    </Title>
    {subtitle &&
      <Subtitle>
        {subtitle}
      </Subtitle>}
    <Subtitle>
      <Highlight onClick={handleSelectGoo}>Renew the colors</Highlight> or
      follow the links below!
    </Subtitle>
  </Wrap>;

Hello.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

const Wrap = styled.div`
  text-align: right;
  flex: 1;
  padding-top: 3rem;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

const Title = styled.div`font-size: 3.7rem;`;

const Subtitle = styled.div`
  margin-top: 2rem;
  font-size: 1.6rem;

  @media screen and (max-width: 1024px) {
    margin-bottom: 3rem;
  }
`;

const Highlight = styled.span`
  cursor: pointer;
  color: ${props => props.theme.selectedStart};
  transition: color .3s ease-out;
`;

export default Hello;
