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
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    
      <div className="app-wrapper">
        <Header />

        <Navbar />
        <section className="app-wrapper-mainContent">
          <Route
            path="/profile"
            render={() => <MainContent state={props.state.mainContentPage} addPost={props.addPost}/>}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                state={props.state.dialogsPage}
                // messagesData={props.state.dialogsPage.messagesData}
              />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/setting" render={() => <News />} />
        </section>

        <Footer />
      </div>   
  );
};

export default App;
