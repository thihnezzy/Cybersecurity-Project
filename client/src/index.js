import React from 'react';
import ReactDOM from 'react-dom/client';

// import {StrictMode} from 'react';
// import {createRoot} from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers';
import {Routes, Route} from 'react-router-dom';
import "../node_modules/boostrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

import App from './App';

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'))
// const rootElement = 
// document.getElementById('root');
// const root = createRoot(rootElement);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);