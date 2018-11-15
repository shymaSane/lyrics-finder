import React, { Component } from 'react';
import Header from './component/ui/Header';
import {Provider} from './context';
import Songs from './component/lyrics/Songs'


class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <Header />
          <Songs />
        </div>
      </Provider>
    );
  }
}

export default App;
