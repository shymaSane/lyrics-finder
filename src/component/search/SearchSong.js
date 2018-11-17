import React, { Component } from 'react';
import {Consumer} from '../../context';
import axios from 'axios'


class SearchSong extends Component {
    constructor(){
        super()
        this.state ={
            song: ''
        }

        this.onHandleChange = this.onHandleChange.bind(this)
    }

    onHandleChange(e){
        console.log(e.target.value)
        this.setState({
            song: e.target.value
        })
    }

    async onSubmit (dispatch,e){
        e.preventDefault()
        const{song} = this.state
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${song}&page_size=10&apikey=${process.env.REACT_APP_MUISXMATCH_KEY}`);
        const data = await res.data;
        const body = await data.message.body.track_list;
        dispatch({type: 'SEARCHED_SONG', payload: body})

        //clear fields 
        this.setState({
            song:''
        })
    }

  render() {
      
      return(
        <Consumer>
            {
                value => {
                    const {dispatch} = value;
                    return (
                        <div className="container">
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <input type="text" className="form-control" name="song" placeholder="Search Song..." required value={this.state.song} onChange={this.onHandleChange}/>
                            </form>
                        </div>
                    )
                }
            }
        </Consumer>
          
      )
  }
}

export default SearchSong;