import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { store } from './redux/redux';

import initApiSocket from './socketAdapter';

import {ProviderWrapper} from './indexUtils';

initApiSocket(store);

ReactDOM.render(
  <React.StrictMode>
    <ProviderWrapper store={store}>
      <App />
    </ProviderWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
