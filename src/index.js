import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import books from './reducers';

let store = createStore(books);

ReactDOM.render(
  <Provider store=(store)>
    <App />
  <Provider>,
  document.getElementById('root')
);