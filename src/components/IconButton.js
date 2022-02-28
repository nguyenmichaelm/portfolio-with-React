import React from 'react';
import { ReactSVG } from 'react-svg';
import './IconButton.css';

function IconButton({ iconButton }) {
  return (
    <a href={iconButton.url} target="_blank">
      <ReactSVG className="icon" src={require(iconButton.src)} alt={iconButton.alt} />
    </a>
  );
}

export default IconButton;

