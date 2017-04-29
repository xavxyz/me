import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../styles/colors';

const display = {
  react: `react is cool`,
  graphql: `graphql rocks`,
  elm: `elm blows your mind`,
};

const Picker = ({ active }) => (
  <List>
    {Object.keys(display).map((toolName, index) => (
      <Item
        key={toolName}
        isActive={active === toolName}
        lastChild={index === Object.keys(display).length - 1}
      >
        {display[toolName]}
      </Item>
    ))}
  </List>
);

Picker.propTypes = {
  active: PropTypes.string,
};

const List = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
`;

const Item = styled.p`
  ${props => props.isActive && `color: ${colors.red};`}
  ${props => !props.isActive && 'opacity: .5;'}
  margin-bottom: ${props => props.lastChild ? 0 : '3rem'};
  transition: all .2s ease-out 0s;
`;

export default Picker;
