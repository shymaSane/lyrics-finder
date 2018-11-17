import React, { Component } from 'react';
import Header from './component/ui/Header';
import {Provider} from './context';
import Songs from './component/lyrics/Songs';
import SearchSong from './component/search/SearchSong';



class App extends Component {
   render() {
    return (
      <Provider>
        <div>
          <Header />
          <SearchSong />
          <Songs />
        </div>
      </Provider>
    );
  }
}

export default App;
