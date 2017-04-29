import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../styles/colors';

const Picker = ({ active, tools, pickSpecific }) => (
  <List>
    {Object.keys(tools).map((toolName, index) => {
      const [capitalizedTool, ...rest] = tools[toolName].split(' ');

      return (
        <Item
          key={toolName}
          isActive={active === toolName}
          isLastChild={index === Object.keys(tools).length - 1}
          onClick={pickSpecific(toolName)}
        >
          <ToolName>{capitalizedTool}</ToolName> {rest.join(' ')}
        </Item>
      );
    })}
  </List>
);

Picker.propTypes = {
  tools: PropTypes.object.isRequired,
  active: PropTypes.string.isRequired,
  pickSpecific: PropTypes.func.isRequired,
};

const List = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  font-size: 1.6rem;
  max-width: 33rem;
  margin: 2rem;
`;

const Item = styled.p`
  &:before {
    ${props => !props.isActive && 'opacity: 0;'}
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: .4rem;
    border-radius: .2rem;
    background-color: ${colors.red};
    transition: all .2s ease-out 0s;
  }
  
  position: relative;
  padding-left: 2rem;
  ${props => !props.isActive && 'opacity: .5;'}
  margin-bottom: ${props => props.isLastChild ? 0 : '3rem'};
  transition: all .2s ease-out 0s;
  color: ${colors.grey};
  line-height: 1.9;
`;

const ToolName = styled.span`
  font-weight: 700;
  color: ${colors.white};
`;

export default Picker;
