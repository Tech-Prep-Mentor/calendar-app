import React from 'react';
import Feature from './pages/Home/Feature';
import Hero from './pages/Home/Hero';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <Feature/>
    <Footer/>
  </div>
  );
}

export default App;
