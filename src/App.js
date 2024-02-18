import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Email from './components/email';
import { Tweet } from 'react-tweet';
import HomePage from './components/twt';

const App = () => {
  return (
      <div>
      <section><Navbar/><Hero/></section>
       <section></section>
    
       <Email/>   <HomePage/>
      </div>
  );
}


export default App;