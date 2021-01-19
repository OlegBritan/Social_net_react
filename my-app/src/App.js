import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {BrowserRouter, Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Navbar />
        <section className="app-wrapper-mainContent">
          <Route path="/profile" component={MainContent} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/setting" component={Setting} />
          {/* <MainContent /> */}
        </section>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
