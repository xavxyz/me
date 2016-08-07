import React from 'react';
import './Header.css';

const Header = ({ main, meta, color }) => (
  <div className={`Header Header--${ color }`}>
    <span className="Header-main">{ main }</span>
    <span className="Header-meta">{ meta }</span>
  </div>
);

export default Header;
