import {withProvider, withProviderHOC} from './../src/indexUtils';
import { addDecorator } from '@storybook/react';
import { DefaultState } from './../src/redux/storeTest/storeExemple'

//addDecorator(withProvider);
 
addDecorator(withProviderHOC(DefaultState));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};