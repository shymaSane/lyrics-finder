import React, { Component } from 'react'

export default class Lyrics extends Component {
  render() {
    return (
        <div>
            <a href="/" className="btn btn-outline-danger">Go Back</a>
            <div className="card">
                <div className="card-header">song name</div>
                <div className="card-body">
                    <p className="card-text">
                        lyrics
                    </p>
                </div>
            </div>
        </div>
      
    )
  }
}
