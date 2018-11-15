import React, { Component } from 'react';
import Header from './component/ui/Header';
import {Provider} from './context'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
