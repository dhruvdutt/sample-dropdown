import React, { Component } from 'react';

import { AppContainer } from './styles';
import Main from './containers/Main';
import Header from './components/Header';

// ////////////////////////////////////////////////////////

class App extends Component {
  state = {};

  render() {
    return (
      <AppContainer>
        <Header />
        <Main />
      </AppContainer>
    );
  }
}

export default App;
