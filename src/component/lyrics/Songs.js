import React, { Component } from 'react';
import Song from './Song';
import {Consumer} from '../../context'

class Songs extends Component {
  render() {
    return (
      <Consumer>
        {
          value => {
            console.log(value);
            return (

              <div></div>
     
            )
          }
        }
      </Consumer>
      
    )
  }
}

export default Songs;