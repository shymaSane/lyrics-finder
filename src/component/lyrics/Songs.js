import React, { Component } from 'react';
import Song from './Song'

class Songs extends Component {
  render() {
    return (
      <div>
        <Song />
        <Song />
        <Song />
        <Song />
      </div>
    )
  }
}

export default Songs;