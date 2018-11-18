import React, { Component } from 'react';
import Header from './component/ui/Header';
import {Provider} from './context';
import Songs from './component/lyrics/Songs';
// import SearchSong from './component/search/SearchSong';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Lyrics from './component/lyrics/Lyrics'



class App extends Component {
   render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path='/' component={Songs}/>
              <Route exact path='/lyrics/:id' component={Lyrics}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
