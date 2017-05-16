import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../styles/colors';

const GithubMetrics = ({ stars, forks }) => (
  <Block>
    <Metric><Star /><Value>{stars}</Value></Metric>
    <Metric><Fork /><Value>{forks}</Value></Metric>
  </Block>
);

GithubMetrics.propTypes = {
  stars: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
};

const Block = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  align-items: flex-end;
  padding-bottom: 1rem;
`;

const Metric = styled.div`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
`;

const Value = styled.span`
  padding-left: 1rem;
  font-family: "Space Mono", monospace, sans-serif;
`;

const StyledSvg = styled.svg`
  fill: ${colors.transparentWhite};
  transform: scale(1.6);
`;

const Star = () => (
  <StyledSvg viewBox="0 0 14 16" width="14" height="16" version="1.1">
    <path
      fillRule="evenodd"
      d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"
    />
  </StyledSvg>
);

const Fork = () => (
  <StyledSvg viewBox="0 0 10 16" width="10" height="16" version="1.1">
    <path
      fillRule="evenodd"
      d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
    />
  </StyledSvg>
);

export default GithubMetrics;
