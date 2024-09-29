import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '60px' }}> 
        <section id="home"><Home /></section>
        <section id="products"><Products /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
};

export default App;
