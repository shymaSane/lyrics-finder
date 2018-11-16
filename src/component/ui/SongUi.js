import React from 'react';
import PropTypes from 'prop-types';

export default function SongUi({artist, song, album}) {
  return (
    <div className="card my-4 mx-5 border-danger bg-dark text-white" style={{width: '350px'}}>
         <div className="card-header border-danger">{artist}</div>
        <div className="card-body">
            <h6 className = "card-title">Track: {song}</h6>
            <h6 className = "card-title">Album: {album}</h6>
            <a href="#" className="btn btn-danger">View Lyrics</a>
        </div>
    </div>
  )
}

SongUi.propTypes = {
  artist: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired
}
