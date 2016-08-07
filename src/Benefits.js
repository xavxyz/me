import React from 'react';
import './Benefits.css';

const whyShouldHireMe = [
  {
    title: 'Business Driven Developer',
    details: 'My job is firstly to understand the underlying problems your business is facing, and then providing a solution which fits your needs.',
  },
  {
    title: 'Engineering At Core',
    details: 'I come from a mechanical and industrial engineering background: my products are built with the right structure to solve the right problem.',
  },
  {
    title: 'Open-Source Contributor',
    details: 'I believe that the goal is to learn. Being part of Telescope core team, the biggest Meteor + React open-source app, helps me achieve that.',
  },
];

const Benefits = () => (
  <div className="Benefits">
    { whyShouldHireMe.map(({ title, details }, i) => (
      <div className="Benefits-block" key={i}>
        <span className="Benefits-block__title">{ title }</span>
        <span className="Benefits-block__details">{ details }</span>
      </div>
    )) }
  </div>
);

export default Benefits;
