import React from 'react';
import './Testimonial.css';

const Testimonial = ({ picture, text, name, role, company }) => (
  <div className="Testimonial">
    <div className="Testimonial__picture">
      <img src={picture} alt={name} />
    </div>
    <div className="Testimonial__content">
      <div className="Testimonial__text">
        { text }
      </div>
      <div className="Testimonial__meta">
         — { name }, { company }
      </div>
    </div>
  </div>
);

export default Testimonial;
