import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

const SocialLinks = () => (
  <List>
    <a href="https://twitter.com/xav_cz" target="_blank"><Button>Twitter</Button></a>
    <a href="https://github.com/xavcz" target="_blank"><Button>GitHub</Button></a>
  </List>
);

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 7vw;
`;

const Button = styled.div`
  font-weight: 700;
  font-size: 1.5vw;
  padding: 1vw 1.5vw;
  display: flex;
  justify-content: center;
  border-radius: .3vw;
  transition: all .2s ease-out;
  margin: 0 2.5vw;
  
  &:hover {
    transition: all .2s ease-in;
    border-radius: 1vw;
    background: ${colors.white};
    color: ${colors.lightBlue};
  }
`;

export default SocialLinks;
