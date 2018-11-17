import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext({})

const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCHED_SONG':
            return{
                ...state,
                tracks: async () =>{
                    const res = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=love&page_size=10&apikey=${process.env.REACT_APP_MUISXMATCH_KEY}`);
                    const data = await res.data;
                    const body = await data.message.body.track_list;
                    return body
                }
            }
    }
}

export class Provider extends Component {
    state = {
        tracks: [],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    async componentDidMount () {
            const res = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=love&page_size=10&apikey=${process.env.REACT_APP_MUISXMATCH_KEY}`);
            const data = await res.data;
            const body = await data.message.body.track_list;
            this.setState({
                tracks: body
            })
    }

    render (){
        return (
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;