import React, { Component } from 'react'

const Context = react.createContext({})

export class Provider extends Component {
    state = [{}]

    render (){
        return (
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;