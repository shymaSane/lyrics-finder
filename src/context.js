import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext({})

export class Provider extends Component {
    state = {
        tracks: []
    }

    componentDidMount () {
            axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=love&page_size=10&apikey=${process.env.REACT_APP_MUISXMATCH_KEY}`)
            .then(res => this.setState({
            tracks: res.data
            }))
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