import React from 'react';
import Portfolio from '../Portfolio/projects';
import About from '../About/index.js';
import Contact from '../Contact';
import Skills from '../Skills';
import Hero from '../Hero';
import Resume from '../Resume';
import Services from '../Services';

export default function Home() {
  return (
    <div>
      <Hero/>
      <About />
      <Resume/>
      <Portfolio />
      <Contact />  
    </div>
  );
}