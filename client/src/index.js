import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

// const store = createStore(reducers, compose(applyMiddleware(thunk)));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);

ReactDOM.render(<BrowserRouter>
  <App/>
</BrowserRouter>, document.getElementById('root'));
