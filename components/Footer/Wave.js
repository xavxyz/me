import React from 'react';
// note: for later
import styled /*, { withTheme }*/ from 'styled-components';
import colors from '../../styles/colors';

const Wave = () => (
  <WavePositioner>
    <StyledWave
      xmlns="http://www.w3.org/2000/svg"
      width="100vw"
      height="100%"
      viewBox="0 0 1600 198"
    >
      <defs>
        <linearGradient id="light" x1="50%" x2="50%" y1="-10.959%" y2="100%">
          <stop stopColor={colors.transparentWhite} stopOpacity=".25" offset="0%" />
          <stop stopColor={colors.lightBlue} offset="80%" />
        </linearGradient>
      </defs>
      <path
        fill="url(#light)"
        fillRule="evenodd"
        d="M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z"
        transform="matrix(-1 0 0 1 1600 0)"
      />
    </StyledWave>
  </WavePositioner>
);

const WavePositioner = styled.div`
  position: absolute;
  z-index: -1;
  overflow: hidden;
`;

const StyledWave = styled.svg`
  position: relative;
  bottom: -3vw;
`;

export default Wave;
