import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Hello = ({ title, handleSelectGoo }) =>
  <Wrap>
    <Title>Hello! I'm Xavier,</Title>
    {title.map((word, index) =>
      <Title key={word}>
        {index === title.length - 1 ? `${word}!` : word}
      </Title>
    )}
    <Subtitle>
      <Highlight onClick={handleSelectGoo}>Refresh the colors</Highlight> or
      follow the links below!
    </Subtitle>
  </Wrap>;

Hello.propTypes = {
  title: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const Wrap = styled.div`
  text-align: right;
  flex: 1;
  padding-top: 3rem;
`;

const Title = styled.div`font-size: 3.7rem;`;

const Subtitle = styled.div`
  margin-top: 2rem;
  font-size: 1.6rem;
`;

const Highlight = styled.span`
  cursor: pointer;
  color: ${props => props.theme.selectedStart};
  transition: color .3s ease-out;
`;

export default Hello;
