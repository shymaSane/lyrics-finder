import React, { Component } from 'react';
import Song from './Song';
import {Consumer} from '../../context'

class Songs extends Component {
  render() {
    return (
      <Consumer>
        {
          value => {
            const {lyrics} = value;
            return (

              <div>{console.log(lyrics)}</div>
     
            )
          }
        }
      </Consumer>
      
    )
  }
}

export default Songs;