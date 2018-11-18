import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

export default class Lyrics extends Component {

    state={
        song_name: "Lyrics:",
        lyrics: ''
    }

    async componentDidMount(){
        const {id} = this.props.match.params
        const res = await axios.get     (`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MUISXMATCH_KEY}`);
        const data = await res.data;
        const body = await data.message.body.lyrics.lyrics_body;
        this.setState({
                lyrics : body
        })
    }

  render(props) {
    return (
        <div>
            <Link to="/" className="btn btn-outline-danger">Go Back</Link>
            <div className="card">
                <div className="card-header">{this.state.song_name}</div>
                <div className="card-body">
                    <p className="card-text">
                        {this.state.lyrics}
                    </p>
                </div>
            </div>
        </div>
      
    )
  }
}

