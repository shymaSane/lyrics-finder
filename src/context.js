import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext({})

export class Provider extends Component {
    state = {
        tracks: []
    }

    componentDidMount () {
            axios.get(`https://api.musixmatch.com/ws/1.1/track.search?q_track=love&page_size=10&apikey=41df6d718c2e856755645a68976b7283`)
            .then(res => this.setState({
            tracks: res.data.message.body
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