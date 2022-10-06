import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from '../src/component/Home';
import About from './component/About';
import Education from './component/Education';
import Contact from './component/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <About />
    <Education/>
    <Contact/>
  </React.StrictMode>
);

