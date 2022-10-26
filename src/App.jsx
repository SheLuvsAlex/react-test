import React from 'react';
import Test from './components/test';
import Navbar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Services from './components/services'

function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
       <About/> 
      <Services/>
     
    </>
  );
}

export default App
    //   <Test name={'mrs. roy'} color = {'green'}/>
    // <Test name={'mrs. alrx'} color = {'yellow'}/>
    // <Test name={'max'} color = {'pink'}/>
