import React from 'react';
import './Button.css';

function Button({ button }) {
  return (
    <a className='button' href={button.url}>
      {button.text}
    </a>
  );
}

export default Button;