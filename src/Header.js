import React, { Component } from 'react';
import rocket from './assets/rocket.jpg'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-text">
          <span className="Header-text__main">Consultant, Fullstack Javascript</span>
          <span className="Header-text__meta">I build modern webapps to help SaaS businesses becoming more profitable.</span>
        </div>
        <div className="Header-picture">
          <img src={rocket} alt="Rocket consulting" />
        </div>
      </div>
    );
  }
}

export default Header;
