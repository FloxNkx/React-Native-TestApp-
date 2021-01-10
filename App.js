import React, {Component} from 'react';

import {Provider} from 'react-redux';
import {store} from './app/store/store';

import Routes from './app/store/routes';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
