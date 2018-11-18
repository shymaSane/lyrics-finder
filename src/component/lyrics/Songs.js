import React, { Component } from 'react';
import Song from './Song';
import {Consumer} from '../../context';
import SearchSong from '../search/SearchSong'

class Songs extends Component {
  render() {
    return (
      <Consumer>
        {
          value => {
            const {tracks} = value
            console.log(tracks)
            return (
              <div>
                <SearchSong />
                <div>
                  {tracks.map(track => <Song
                    key={track.track.track_id}
                    track={track.track}
                  />)}
                </div>
              </div>
            )
          }
        }
      </Consumer>
      
    )
  }
}

export default Songs;