import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';

let reRenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          dispatch={store.dispatch.bind(store)} 
          store={store}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

reportWebVitals();

reRenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  reRenderEntireTree(state)
})