import React, { PureComponent } from 'react';
import { Provider as StoreProvider } from 'react-redux';

import Navigation from './src/navigation/navigation';
import { store } from './src/redux/store';

export default class App extends PureComponent {
  render() {
    return (
      <StoreProvider store={store}>
        <Navigation />
      </StoreProvider>
    )
  }
}
