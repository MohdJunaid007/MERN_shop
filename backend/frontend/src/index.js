import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
// for redux
import {Provider} from 'react-redux'
import store from './store.js'



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
