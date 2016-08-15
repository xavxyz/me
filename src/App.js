import React from 'react';
import Hero from './Hero';
import Header from './Header';
import Benefits from './Benefits';
import Testimonial from './Testimonial';
import Stack from './Stack';
import CallToAction from './CallToAction';


import { hero, testimonials } from './assets';

import './App.css';

const App = () => (
  <div className="App">
    <Hero />
    
    <div className="App__me">
      <img src={hero.me} alt="Me" />
      <Header
        main="Hello, I'm Xavier Cazalot"
        color="both"
        meta="I’m an entrepreneur and a software engineer."
        animatedWordIndex={0}
      />
    </div>

    <Benefits />

    <Testimonial
      picture={ testimonials[0] }
      text="Xavier is an excellent web developer supported by an entrepreneur mindset. He remains always watchful on the legitimacy of a functional evolution compared to business benefits. This is extremely useful and effective during the design process."
      name="Satisfied Client"
      meta="— Aurélien Basille, CTO @ Cavacave"
    />

    <Stack />    

    <Testimonial
      picture={ testimonials[1] }
      text="Resourceful and energetic, Xavier is passionated by choosing the right tools, setting them up, and teaching people how to use them. He has the perfect skills to efficiently bootstrap any project."
      name="Satisfied Client"
      meta="— Maxime Pico, Managing Director @ Startup42"
    />

    <CallToAction />

    <Testimonial
      picture={ testimonials[2] }
      text="Xavier has a very great attitude as a developer: he always wants to deliver the best results. When we discuss the next features/assignment we would like him to work on, he actively thinks along with us to help for deciding how to tackle our current problems."
      name="Satisfied Client"
      meta="— Chris de Rouck, CTO @ iDronect"
    />
  </div>
);

export default App;
