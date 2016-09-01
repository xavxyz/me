import React from 'react';
import './PictureListItem.css';

const PictureListItem = ({ picture, name, text, meta }) => (
  <div className="PictureListItem">
    <div className="PictureListItem__picture">
      <img src={picture} alt={name} className={ meta ? 'PictureListItem__picture--with-border' : '' } />
    </div>
    <div className="PictureListItem__content">
      <div className="PictureListItem__text">
        { text }
      </div>
      { meta ? (<div className="PictureListItem__meta">{ meta }</div>) : null }
    </div>
  </div>
);

export default PictureListItem;
