import React from 'react';
import Header from './Header';
import Benefits from './Benefits';
import Testimonial from './Testimonial';

import { testimonials } from './assets';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Benefits />
    <Testimonial
      picture={ testimonials[0] }
      text="Xavier is an excellent web developer supported by an entrepreneur mindset. He remains always watchful on the legitimacy of a functional evolution compared to business benefits. This is extremely useful and effective during the design process."
      name="Aurélien Basille"
      company="CTO @ Cavacave"
    />
    <Testimonial
      picture={ testimonials[1] }
      text="Resourceful and energetic, Xavier is passionated by choosing the right tools, setting them up, and teaching people how to use them. He has the perfect skills to efficiently bootstrap any project."
      name="Maxime Pico"
      company="Managing Director @ Startup42"
    />
    <Testimonial
      picture={ testimonials[2] }
      text="Xavier has a very great attitude as a developer: he always wants to deliver the best results. When we discuss the next features/assignment we would like him to work on, he actively thinks along with us to help for deciding how to tackle our current problems."
      name="Chris de Rouck"
      company="CTO @ iDronect"
    />
  </div>
);

export default App;
