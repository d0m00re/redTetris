import React from 'react';

import { Provider } from 'react-redux';
import { store } from './redux/redux';

export const ProviderWrapper = ({children, store}) => (
  <Provider store={store}>
    {children}
  </Provider>);

export const withProvider = (story) => (
  <ProviderWrapper store={store}>
    {story()}
  </ProviderWrapper>
)

export const withProviderAndStore = (story, persoStore) => (
    <ProviderWrapper store={persoStore}>
        {story()}
  </ProviderWrapper>
)

export const withProviderHOC = (persoStore) => (
    (story) => (
        <ProviderWrapper store={persoStore}>
        {story()}
     </ProviderWrapper>
    )
)