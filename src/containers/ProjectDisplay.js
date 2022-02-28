import React from 'react';
import IconButton from '../components/IconButton';
import CardList from '../components/CardList';

function ProjectDisplay() {
  return (
    <section className="projects">
      <h2 className="project-header">Projects</h2>
      <p>See what I am up to:</p>
      <IconButton iconbutton={{ url: "https://github.com/nguyenmichaelm/", src: "../media/github-brands.svg", alt: "github-icon" }} />
    </section>
  );
}

export default ProjectDisplay;