import styled from 'styled-components';
import colors from '../../styles/colors';

const Title = styled.h1`
  line-height: 1;
  font-family: "Space Mono", monospace, sans-serif;
  font-size: 5vw;
  @media screen and (max-width: 668px) {
    font-size: 3.34rem; /* make it fit inline on a 320px screen */
  }
`;

export default Title;
