import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import books from './reducers';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Nav from './components/Nav.js';
import App from './containers/app';
import rootReducer from './reducers/index';
import './index.css';
import About from './components/About';

// reducers----------------v
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Route exact path='/' component={App} />
        <Route path='/about' component={About} />
      </div>
    </Router>
    <App />
  </Provider>,
  document.getElementById('root')
);