import React from 'react';
import './Testimonial.css';

const Testimonial = ({ picture, text, name, role, company }) => (
  <div className="Testimonial">
    <div className="Testimonial-picture">
      <img src={picture} alt={name} />
    </div>
    <div className="Testimonial-content">
      <div className="Testimonial-contet__text">
        { text }
      </div>
      <div className="Testimonial-content__meta">
         — { name }, { company }
      </div>
    </div>
  </div>
);

export default Testimonial;
