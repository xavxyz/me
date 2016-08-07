import React from 'react';
import { header } from './assets/';
import './Header.css';

const Header = () => (
  <div className="Header">
    <div className="Header-text">
      <span className="Header-text__main">Consultant, Fullstack Javascript</span>
      <span className="Header-text__meta">I build modern webapps to help SaaS businesses becoming more profitable.</span>
    </div>
    <div className="Header-picture">
      <img src={ header.rocket } alt="Rocket consulting" />
    </div>
  </div>
);

export default Header;
