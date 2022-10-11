import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom/client';
import Home from '../src/component/Home';
import About from './component/About';
import Education from './component/Education';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Loader from './component/Loader';
import Testimonials from './component/Testimonials';


function Hello(){
  const [loader, setLoader]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false);
    },4000)
  },[])
  return loader?
  ( 
  
    
    <Loader/>

  ):( <>
   <Home />
    <About />
    <Education/>
    <Projects/>
    <Testimonials/>
    <Contact/></>
  )
}
// export default Hello;


const root = ReactDOM.createRoot(document.getElementById('root'));

 root.render(
  <React.StrictMode>
    <Hello/>
  </React.StrictMode>
)