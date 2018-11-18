import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default function SongUi({artist, song, album, id}) {
  return (
    <div className="card my-4 mx-5 border-danger bg-dark text-white" style={{width: '350px'}}>
         <div className="card-header border-danger">{artist}</div>
        <div className="card-body">
            <h6 className = "card-title">Track: {song}</h6>
            <h6 className = "card-title">Album: {album}</h6>
            <Link to={`/lyrics/${id}`} className="btn btn-danger">View Lyrics</Link>
        </div>
    </div>
  )
}

SongUi.propTypes = {
  artist: PropTypes.string.isRequired,
  song: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}
