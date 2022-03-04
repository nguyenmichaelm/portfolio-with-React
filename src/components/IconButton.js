import React from 'react';
import './IconButton.css';

function IconButton({ iconButton }) {
  return (
    <a href={iconButton.url} target="_blank">
      <img className="icon" src={iconButton.src} alt={iconButton.alt} />
    </a>
  );
}

export default IconButton;

