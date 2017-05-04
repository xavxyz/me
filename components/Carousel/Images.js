import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// in order to have a smooth transition between images, I use opacity and so need
// to display the 3 images directly...
const Images = ({ active, tools }) => (
  <RelativeWrapper>
    {Object.keys(tools).map((toolName, index) => (
      <ImageBackground
        key={toolName}
        isLastChild={index === Object.keys(tools).length - 1}
        active={active}
        toolName={toolName}
      />
    ))}
  </RelativeWrapper>
);

Images.propTypes = {
  active: PropTypes.string.isRequired,
  tools: PropTypes.object.isRequired,
};

const RelativeWrapper = styled.div`
  position: relative;
`;

const ImageBackground = styled.div`
  ${props => props.active !== props.toolName && 'opacity: 0;'}
  ${props => !props.isLastChild && 'position: absolute;'}
  display: flex;
  flex: 1;
  background-repeat: no-repeat;
  background-image: url('/static/${props => props.toolName}.svg');
  transition: all .3s ease-in-out 0s;
  min-width: 30rem;
  min-height: 30rem;
  margin: 2rem;
`;

export default Images;
