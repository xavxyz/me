import React from 'react';
import './Header.css';

const Header = ({ main, meta, color }) => (
  <div className={`Header Header--${ color }`}>
    <span className="Header__main">{ main }</span>
    <span className="Header__meta">{ meta }</span>
  </div>
);

export default Header;
