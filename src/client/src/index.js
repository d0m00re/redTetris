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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
