// transitioned stop (svg element)
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Transistop = styled.stop`
  stop-color: ${props =>
    props.end ? props.theme.selectedEnd : props.theme.selectedStart};
  transition: .3s ease-out;
`;

Transistop.propTypes = {
  end: PropTypes.bool,
};

export default Transistop;
