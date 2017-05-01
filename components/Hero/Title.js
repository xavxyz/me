import styled, { keyframes } from 'styled-components';
import colors from '../../styles/colors';

const shimmer = keyframes`
  from { background-position: -500px 0 }
  to { background-position: 500px 0 }
`;

const Title = styled.h1`
  line-height: 1;
  font-family: "Space Mono", monospace, sans-serif;
  font-size: 5vw;
  @media screen and (max-width: 668px) {
    font-size: 3.34rem; /* make it fit inline on a 320px screen */
  }
  
  animation: 1s linear 2 forwards ${shimmer} 2s;
  background: linear-gradient(to right, ${colors.white} 10%, ${colors.grey} 18%, ${colors.white} 26%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 1000px 2em;
`;

export default Title;
