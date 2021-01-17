import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />

      <Navbar />

      <MainContent />
      
      <Footer />
    </div>
  );
};

export default App;
