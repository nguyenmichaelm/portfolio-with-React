import React from 'react';
import Button from '../components/Button';
import TextBlock from '../containers/TextBlock';

function AboutSection() { 
  return (
    <section className='about'>
      <TextBlock />
      <Button />
      <TextBlock />
      <Button />
    </section>
  );
}

export default AboutSection;