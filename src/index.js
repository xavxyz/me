import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Hello from './Hello';
import GooHue from './GooHue';
import { bubbles, gooes } from './GooHue/data';
import './index.css';

const App = () =>
  <Wrap>
    <Hello title={['JavaScript', 'Explorer']} />
    <GooHue bubbles={bubbles} gooes={gooes} withoutHue />
  </Wrap>;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 12rem 3rem 3rem 3rem;
`;

ReactDOM.render(<App />, document.getElementById('root'));
