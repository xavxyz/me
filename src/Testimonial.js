import React from 'react';
import './Testimonial.css';
import PictureListItem from './PictureListItem';

const Testimonial = (props) => (
  <div className="Testimonial">
    <PictureListItem { ...props } />
  </div>
);

export default Testimonial;
