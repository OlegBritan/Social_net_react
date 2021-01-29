import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';

let reRenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={store.addPost.bind(store)}
          updateNewPostText={store.updateNewPostText.bind(store)}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

reportWebVitals();

reRenderEntireTree(store.getState());
store.subscribe(reRenderEntireTree);
