import React from 'react';
import PropTypes from 'prop-types';

export default function SongUi({artist, song, album}) {
  return (
    <div className="card container my-4 mx-5" style={{width: '350px'}}>
        <div className="card-body">
            <h5 className = "card-title">{artist}</h5>
            <h6 className = "card-title">Track: {song}</h6>
            <h6 className = "card-title">Album: {album}</h6>
            <a href="#" className="btn btn-info btn-outline-dark">View Lyrics</a>
        </div>
    </div>
  )
}

SongUi.propTypes ={
  artist: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired
}
