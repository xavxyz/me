import styled from 'styled-components';

const Subtitle = styled.h3`
  font-size: 2.4vw;
  text-transform: uppercase;
  letter-spacing: .3rem;
  font-weight: normal;
  opacity: .5;
  margin-bottom: 3rem;
  @media screen and (max-width: 668px) {
    font-size: 1.6rem; /* make it fit inline on a 320px screen */
  }
`;

export default Subtitle;
