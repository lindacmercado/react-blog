import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory  } from 'react-router';
import routes from './config/routes';

import Provider from 'react-redux';
import createStore from 'redux';
import reducer from './Redux/Like';

var store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={ hashHistory }>{routes}</Router>
    </Provider>,
    document.getElementById('app')
)
