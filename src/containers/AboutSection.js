import React from 'react';
import Button from '../components/Button';
import TextBlock from '../components/TextBlock';

function AboutSection() {
  return (
    <section className='about'>
      <TextBlock />
      <Button button={{ text: 'Contact', url: '#footer' }} />
      <TextBlock />
      <Button button={{ text: 'Resume', url: 'https://docs.google.com/document/d/1IUGknABQu4qron1sMJmnf65B04BV7fX5tSTJsWc1Tbg/edit?usp=sharing' }} />
    </section>
  );
}

export default AboutSection;