import React, { Component } from 'react';
import SongUi from '../ui/SongUi';
import PropTypes from 'prop-types';

class Song extends Component {
  render(props) {
    const {track} = this.props
    return (
      <div>
        <SongUi artist={track.artist_name} song={track.track_name} album={track.album_name}/>
      </div>
    )
  }
}

Song.propTypes ={
  track: PropTypes.object.isRequired 
}
export default Song;
