import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Email from './components/email';


const App = () => {
  return (
      <div>
      <section><Navbar/><Hero/></section>
       <section></section>
       
       <Email/>
      </div>
  );
}


export default App;