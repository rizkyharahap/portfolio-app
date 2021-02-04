import React from 'react';
import About from './containers/About';
import Banner from './containers/Banner';
import Contact from './containers/Contact';
import Navbar from './containers/Navbar';
import Project from './containers/Projects';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 1000,
});

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default App;
