import React, { Component } from 'react';
import Header from './component/ui/Header';
import {Provider} from './context';
import Songs from './component/lyrics/Songs'



class App extends Component {
  state ={
    appClass: null
  }

  componentDidMount(){
    this.setState({
      appClass: 'col-md-6 col-sm-12'
    })
  }

  render() {
    return (
      <Provider>
        <div>
          <Header />
          <div className="container">
            <div className="row show_cards">
              <div className={this.state.appClass}>
                <Songs />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
