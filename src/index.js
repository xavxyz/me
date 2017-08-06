import React from 'react';
import ReactDOM from 'react-dom';
import GooHue from './GooHue';
import { bubbles, gooes } from './GooHue/data';
import './theme';

const App = () => <GooHue bubbles={bubbles} gooes={gooes} />;

ReactDOM.render(<App />, document.getElementById('root'));
