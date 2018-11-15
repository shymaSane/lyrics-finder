import React from 'react'

export default function SongUi() {
  return (
    <div className="card container my-4 mx-5" style={{width: '350px'}}>
        <div className="card-body">
            <h5 className = "card-title">Imagine Dragons</h5>
            <h5 className = "card-title">Track:</h5>
            <h5 className = "card-title">Album:</h5>
            <a href="#" className="btn btn-info btn-outline-dark">View Lyrics</a>
        </div>
    </div>
  )
}
