import React from 'react';
import { hero } from './assets/';
import './Hero.css';
import Header from './Header';

const Hero = () => (
  <div className="Hero">
    <Header 
      main="Consultant, Fullstack Javascript"
      meta="I build modern webapps to help SaaS businesses becoming more profitable."
      color="white" 
    />
    <div className="Hero-picture">
      <img src={ hero.rocket } alt="Rocket consulting" />
    </div>
  </div>
);

export default Hero;
