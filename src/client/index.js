import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../shared/store/configureStore';
import AppLayout from './components/AppLayout';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
