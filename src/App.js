import React, { Component } from 'react';
import Header from './component/ui/Header';
import {Provider} from './context';
import Songs from './component/lyrics/Songs'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Songs />
      </div>
    );
  }
}

export default App;
