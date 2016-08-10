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
      animatedWordIndex={1}
    />
    <div className="Hero__picture">
      <img src={ hero.rocket } alt="Rocket consulting" />
    </div>
  </div>
);

export default Hero;
