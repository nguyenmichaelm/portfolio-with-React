import './App.css';
import React from 'react';
import Header from './Header';
import AboutSection from './AboutSection';
import ProjectDisplay from './ProjectDisplay';
import Footer from './Footer';

function App() {
  return (
    <main className="App">
      <Header />
      <AboutSection />
      {/* <ProjectDisplay /> */}
      <Footer />
    </main>
  );
}

export default App;