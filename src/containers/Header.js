import React from 'react';
import Button from '../components/Button';

function Header() {
  return (
    <header className='header'>
      <h1>Web Developer</h1>
      <img source='' alt='portfolio picture' />
      <p>I am a web app developer with a background in the Fashion and Beauty Industry</p>
      <Button button={{ text: "Let's Connect", url: "#footer" }} />
    </header>
  );
}

export default Header;